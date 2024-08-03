import { ReviewedMove } from "@/lib/reviewer";
import SavedMoves from "@/components/game-review/saved-moves";
import Eval from "./eval";
import { FenContext } from "./game-review";
import { useContext, useEffect, useRef } from "react";
import playAudio from "./audio";

type MoveProp = {
  move: ReviewedMove;
};

function ReviewMove({ move }: MoveProp) {
  const setFen = useContext(FenContext);

  const handleClick = () => setFen!(move.moveFen);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { current } = ref;
    if (current !== null) {
      setTimeout(() => {
        current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }, 10);
    }
  }, []);

  useEffect(() => {
    playAudio(move.move, move.moveFen);
  }, [move]);

  return "bookMove" in move ? (
    <div
      ref={ref}
      className="w-full min-h-36 p-4 border border-border rounded-lg"
    >
      <span
        onClick={handleClick}
        className="cursor-pointer hover:underline text-xl mr-2 font-bold"
      >
        {move.move}
      </span>{" "}
      is a book move
    </div>
  ) : (
    <div
      ref={ref}
      className="w-full min-h-36 p-4 flex flex-col gap-4 border border-border rounded-lg"
    >
      <div
        onClick={handleClick}
        className="cursor-pointer hover:underline text-xl font-bold"
      >
        {move.move}
      </div>
      <div>
        eval before move:
        <Eval score={move.evalBefore} />
      </div>
      {move.evalAfter == "" ? null : (
        <div>
          eval after move:
          <Eval score={move.evalAfter} />
        </div>
      )}
      <div className="flex flex-col">
        <span>best moves:</span>
        <SavedMoves savedMoves={move.bestMovesBefore} className="w-96" />
      </div>
      {move.bestMovesAfter.length == 0 ? null : (
        <div className="flex flex-col">
          <span>continuation after {move.move}:</span>
          <SavedMoves savedMoves={move.bestMovesAfter} className="w-96" />
        </div>
      )}
    </div>
  );
}

export default ReviewMove;
