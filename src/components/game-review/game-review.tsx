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
import { Chess, Square } from "chess.js";
import { Key } from "chessground/types";
import Analyzer from "./analyzer";
import ReviewBoard from "@/components/game-review/review-board";
import ReviewOpening from "@/components/game-review/review-opening";
import ReviewNewGameButton from "@/components/game-review/review-new-game";
import { usePromotion } from "@/components/game-review/promotion-context";
import { History, HistoryType } from "@/components/game-review/fen-history";
import HistoryButton from "./history-button";

export const FenContext = createContext<((fen: string) => void) | null>(null);

export type GameReviewProps = {
  reviewInput: ReviewReport;
  newGame: () => void;
};

const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

function GameReview({ reviewInput, newGame }: GameReviewProps) {
  const setConfig = useContext(ConfigContext);

  const [fen, setFen] = useState(initFen);

  const chess = useMemo(() => new Chess(), []);

  const fenHistory = useMemo<HistoryType>(() => History(), []);

  useEffect(() => {
    fenHistory.add(fen);
  }, [fen]);

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

  const promptPromotion = usePromotion();

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
            const isPromotion =
              chess.get(from as Square).type == "p" &&
              (to[1] == "8" || to[1] == "1");

            if (isPromotion) {
              promptPromotion!((piece) => {
                chess.move({ from: from, to: to, promotion: piece });

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
              }, getTurn(chess));

              return;
            }

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
        <div className="flex gap-2 my-5">
          <HistoryButton
            className="border border-border"
            handleClick={() => {
              setCurrFen(fenHistory.back());
            }}
          />
          <ReviewNewGameButton fn={newGame} />
        </div>
      </div>
    </FenContext.Provider>
  );
}

export default GameReview;
