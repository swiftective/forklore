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
import { History, HistoryType } from "@/components/game-review/move-history";
import HistoryButton from "./history-button";
import { IoChevronBack as BackIcon } from "react-icons/io5";
import { IoChevronForward as ForIcon } from "react-icons/io5";
import playAudio from "./audio.ts";

export type GameReviewProps = {
  reviewInput: ReviewReport;
  newGame: () => void;
};

export type LastMove =
  | {
      from: Key;
      to: Key;
    }
  | undefined;

export type BoardState = {
  fen: string;
  dest: LastMove;
  move: string | undefined;
};

export const BoardContext = createContext<
  ((fen: string, dest: LastMove, move: string | undefined) => void) | null
>(null);

const initFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

function GameReview({ reviewInput, newGame }: GameReviewProps) {
  const setConfig = useContext(ConfigContext);

  const [board, setBoard] = useState<BoardState>({
    fen: initFen,
    dest: undefined,
    move: undefined,
  });

  const chess = useMemo(() => new Chess(), []);

  const moveHistory = useMemo<HistoryType>(() => History(), []);

  useEffect(() => {
    moveHistory.add(board);
  }, [board]);

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

  const setCurrBoard = useCallback(
    (fen: string, dest: LastMove, move: string | undefined) => {
      chess.load(fen);

      const lastMove = dest ? [dest.from, dest.to] : undefined;

      setConfig!({
        fen: fen,
        turnColor: getTurn(chess),
        check: chess.isCheck(),
        movable: { color: getTurn(chess), dests: getDests(chess) },
        lastMove: lastMove,
      });
      setBoard({ fen, dest, move });
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
                const move = chess.history().pop();

                setCurrBoard(chess.fen(), { from, to }, move);

                playAudio(move, chess.fen());
              }, getTurn(chess));

              return;
            }

            chess.move({ from: from, to: to });

            const move = chess.history().pop();

            playAudio(move, chess.fen());

            setCurrBoard(chess.fen(), { from, to }, move);
          },
        },
      },
      highlight: {
        lastMove: true,
      },
    });
  }, []);

  return (
    <BoardContext.Provider value={setCurrBoard}>
      <div className="flex flex-col size-full">
        <Analyzer fen={board.fen} />
        <ReviewOpening opening={reviewInput.opening} />
        <ReviewBoard moves={reviewInput.review} />
        <div className="flex gap-2 my-5">
          <HistoryButton
            className="border border-border"
            icon={<BackIcon />}
            onKeys={["ArrowLeft", "a"]}
            handleClick={() => {
              const { fen, dest, move } = moveHistory.back();
              setCurrBoard(fen, dest, move);
            }}
          />
          <HistoryButton
            className="border border-border"
            icon={<ForIcon />}
            onKeys={["ArrowRight", "d"]}
            handleClick={() => {
              const hisMove = moveHistory.forward();
              if (!hisMove) return;
              playAudio(hisMove.move, hisMove.fen);
              setCurrBoard(hisMove.fen, hisMove.dest, hisMove.move);
            }}
          />
          <ReviewNewGameButton fn={newGame} />
        </div>
      </div>
    </BoardContext.Provider>
  );
}

export default GameReview;
