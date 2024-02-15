import { ReviewReport } from "@/lib/reviewer";
import { Button } from "../ui/button";
import { CgBolt as Icon } from "react-icons/cg";
import ReviewMove from "./review-move";
import { ConfigContext } from "@/app";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Chess } from "chess.js";
import { Key } from "chessground/types";
import Analyzer from "./analyzer";

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

  useEffect(() => {
    setConfig!({
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      movable: {
        color: "white",
        dests: getDests(chess),
        events: {
          after: (from, to) => {
            chess.move({ from: from, to: to });

            setFen(chess.fen());

            setConfig!(() => ({
              turnColor:chess.turn() == "w" ? "white" : "black",
              check: chess.isCheck(),
              fen: chess.fen(),
              movable: {
                dests: getDests(chess),
                color: chess.turn() == "w" ? "white" : "black",
              },
            }));
          },
        },
      },
    });
  }, []);

  const moves = reviewInput.review.map((move) => move.move);

  return (
    <div className="flex flex-col size-full">
      <Analyzer fen={fen}/>
      <div className="w-full min-h-[10%] border border-border mb-8 rounded-lg"></div>
      <div className="mb-8 mx-1 text-sm text-muted-foreground">
        {reviewInput.opening.eco} {reviewInput.opening.name}
      </div>
      <div className="overflow-y-auto min-h-0 flex-auto">
        {moves.map((move, index) => {
          if (index % 2 == 1) {
            return;
          }

          const move1 = move;
          const move2 = moves[index + 1];
          const moveNumber = index / 2 + 1;

          return (
            <div
              key={moveNumber}
              className="odd:bg-secondary p-3 w-full flex rounded-lg select-none fadein"
            >
              <span className="flex-1">{moveNumber}.</span>
              <ReviewMove move={move1} id={moveNumber + "w"} />
              <ReviewMove move={move2} id={moveNumber + "b"} />
            </div>
          );
        })}
      </div>
      <Button onClick={newGame} className="w-full my-5 p-5 font-bold h-5">
        <Icon className="m-1 size-6" /> New Game
      </Button>
    </div>
  );
}

export default GameReview;
