type MoveProps = {
  move: string;
  id: string;
};

function ReviewMove({ move, id }: MoveProps) {

  if (move == undefined) {
    return <span key={id} className="flex-1"></span>;
  }

  return (
    <span key={id} className="flex-1">
      <span
        onClick={() => {
          console.log(move);
        }}
        className="hover:font-bold cursor-pointer"
      >
        {move}
      </span>
    </span>
  );
}

export default ReviewMove;
