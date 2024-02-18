import { ReviewedMove } from "@/lib/reviewer";
import SavedMoves from "@/components/game-review/saved-moves";
import Eval from "./eval";

type MoveProp = {
  move: ReviewedMove;
};

function ReviewMove({ move }: MoveProp) {
  return "bookMove" in move ? (
    <div className="w-full min-h-36 p-4 border border-border rounded-lg">
      <span className="text-xl mr-2 font-bold">{move.move}</span> is a book move
    </div>
  ) : (
    <div className="w-full min-h-36 p-4 flex flex-col gap-4 border border-border rounded-lg">
      <div className="text-xl font-bold">{move.move}</div>
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
