import { ReviewedMove } from "@/lib/reviewer";
import { useContext } from "react";
import { BoardContext } from "./game-review";

type RowProps = {
  id: number;
  move1: ReviewedMove;
  move2: ReviewedMove;
  idx1: number;
  idx2: number;
  handleClick: (idx: number) => void;
};

function ReviewRow({ id, move1, move2, idx1, idx2, handleClick }: RowProps) {
  const setBoard = useContext(BoardContext);

  return (
    <div className="flex fadein gap-4 p-4 font-medium border-b select-none">
      <span className="w-24">{id}.</span>
      <span
        onClick={() => {
          const { moveFen: fen, dest, move } = move1;
          setBoard!(fen, dest, move);
          handleClick(idx1);
        }}
        className="hover:underline w-36 cursor-pointer"
      >
        {move1.move}
      </span>
      {move2 == undefined ? null : (
        <span
          onClick={() => {
            const { moveFen: fen, dest, move } = move2;
            setBoard!(fen, dest, move);
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
