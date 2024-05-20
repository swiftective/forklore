import { ReviewedMove } from "@/lib/reviewer";
import { useContext } from "react";
import { FenContext } from "./game-review";

type RowProps = {
  id: number;
  move1: ReviewedMove;
  move2: ReviewedMove;
  idx1: number;
  idx2: number;
  handleClick: (idx: number) => void;
};

function ReviewRow({ id, move1, move2, idx1, idx2, handleClick }: RowProps) {
  const setFen = useContext(FenContext);

  return (
    <div className="flex fadein gap-4 p-4 font-medium border-b">
      <span className="w-24">{id}.</span>
      <span
        onClick={() => {
          setFen!(move1.moveFen);
          handleClick(idx1);
        }}
        className="hover:underline w-36 cursor-pointer"
      >
        {move1.move}
      </span>
      {move2 == undefined ? null : (
        <span
          onClick={() => {
            setFen!(move2.moveFen);
            handleClick(idx2);
          }}
          className="hover:underline w-36 cursor-pointer"
        >
          {move2.move}
        </span>
      )}
    </div>
  );
}

export default ReviewRow;
