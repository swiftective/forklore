import ReviewMove from "./review-move";

type RowProps = {
  moves: [string, string];
  moveNumber: number;
};

function ReviewRow({ moves, moveNumber }: RowProps) {
  return (
    <div
      key={moveNumber}
      className="odd:bg-secondary p-3 w-full flex rounded-lg select-none"
    >
      <span className="flex-1">{moveNumber}.</span>
      <ReviewMove move={moves[0]} id={moveNumber + "w"} />
      <ReviewMove move={moves[1]} id={moveNumber + "b"} />
    </div>
  );
}

export default ReviewRow;
