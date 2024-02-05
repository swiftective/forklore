import { Button } from "../ui/button";
import ReviewRow from "./review-row";
import { CgBolt as Icon } from "react-icons/cg";

function GameReview() {
  const moves = [
    "e4",
    "e5",
    "Nf3",
    "Nc6",
    "Bc4",
    "Bc5",
    "O-O",
    "O-O",
    "d3",
    "Ne7",
    "Re1",
    "a5",
    "Nbd2",
    "f6",
    "c4",
    "Nf7",
    "Nc3",
    "Bf5",
    "a4",
    "exf4",
    "Nxf4",
    "Qe8",
    "Qf2#",
  ];

  return (
    <div className="flex flex-col size-full">
      <div className="w-full min-h-[30%] border border-border mb-8 rounded-lg"></div>
      <div className="overflow-y-auto min-h-0 flex-auto">
        {moves.map((move, index) => {
          if (index % 2 == 1) {
            return;
          }
          return (
            <ReviewRow
              moves={[move, moves[index + 1]]}
              moveNumber={index / 2 + 1}
            />
          );
        })}
      </div>
      <Button className="w-full my-5 p-5 font-bold h-5">
        <Icon className="m-1 size-6" /> New Game
      </Button>
    </div>
  );
}

export default GameReview;
