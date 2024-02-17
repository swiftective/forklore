import { ReviewedMove } from "@/lib/reviewer";
import { FenContext } from "./game-review";
import { useContext } from "react";

type MoveProp = {
  move: ReviewedMove;
};

function ReviewMove({ move }: MoveProp) {
  const setFen = useContext(FenContext);

  return "bookMove" in move ? (
    <div className="w-full min-h-36 p-4 border border-border rounded-lg">{move.move} is a book move</div>
  ) : (
    <div className="w-full min-h-36 p-4 flex flex-col gap-4 border border-border rounded-lg">
      <div>move: {move.move}</div>
      <div>eval before move: {move.evalBefore}</div>
      {move.evalAfter == "" ? null : (
        <div>eval after move: {move.evalAfter}</div>
      )}
      <div>
        best moves:
        <div className="flex flex-wrap gap-2">
          {move.bestMovesBefore.map((move) => {
            return (
              <span
                onClick={() => setFen!(move.fen)}
                className="select-none cursor-pointer hover:underline"
              >
                {move.move}
              </span>
            );
          })}
        </div>
      </div>
      {move.bestMovesAfter.length == 0 ? null : (
        <div>
          continuation after {move.move}:
          <div className="flex flex-wrap gap-2">
            {move.bestMovesAfter.map((move) => {
              return (
                <span
                  onClick={() => setFen!(move.fen)}
                  className="select-none cursor-pointer hover:underline"
                >
                  {move.move}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewMove;
