import { ReviewReport } from "@/lib/reviewer";
import { ConfigContext } from "@/app";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Chess } from "chess.js";
import { Key } from "chessground/types";
import Analyzer from "./analyzer";
import ReviewBoard from "@/components/game-review/review-board";
import ReviewOpening from "@/components/game-review/review-opening";
import ReviewNewGame from "@/components/game-review/review-new-game";

export const FenContext = createContext<((fen: string) => void) | null>(null);

type GameReviewProps = {
  reviewInput: ReviewReport;
  newGame: () => void;
};

const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

function GameReview({ reviewInput, newGame }: GameReviewProps) {
  const setConfig = useContext(ConfigContext);

  const [fen, setFen] = useState(initFen);

  const chess = useMemo(() => new Chess(), []);

  const getDests = useCallback((chess: Chess) => {
    const map = new Map<Key, Key[]>();

    chess.moves({ verbose: true }).forEach((move) => {
      if (map.has(move.from)) {
        map.get(move.from)?.push(move.to);
      } else {
        map.set(move.from, [move.to]);
      }
    });

    return map;
  }, []);

  const getTurn = useCallback((chess: Chess) => {
    if (chess.turn() == "w") {
      return "white";
    }
    return "black";
  }, []);

  const setCurrFen = useCallback(
    (fen: string) => {
      chess.load(fen);
      setConfig!({
        fen: fen,
        turnColor: getTurn(chess),
        check: chess.isCheck(),
        movable: { color: getTurn(chess), dests: getDests(chess) },
      });
      setFen(fen);
    },
    [setConfig, chess, getDests, getTurn],
  );

  useEffect(() => {
    setConfig!({
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      movable: {
        free: false,
        color: "white",
        dests: getDests(chess),
        events: {
          after: (from, to) => {
            chess.move({ from: from, to: to });

            setFen(chess.fen());

            setConfig!(() => ({
              turnColor: getTurn(chess),
              check: chess.isCheck(),
              fen: chess.fen(),
              movable: {
                dests: getDests(chess),
                color: getTurn(chess),
              },
            }));
          },
        },
      },
      highlight: {
        lastMove: true,
      },
    });
  }, []);

  return (
    <FenContext.Provider value={setCurrFen}>
      <div className="flex flex-col size-full">
        <Analyzer fen={fen} />
        <ReviewOpening opening={reviewInput.opening} />
        <ReviewBoard moves={reviewInput.review} />
        <ReviewNewGame fn={newGame} />
      </div>
    </FenContext.Provider>
  );
}

export default GameReview;
