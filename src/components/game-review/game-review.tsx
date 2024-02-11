import { ReviewReport } from "@/lib/reviewer";
import { Button } from "../ui/button";
import { CgBolt as Icon } from "react-icons/cg";
import ReviewMove from "./review-move";

type GameReviewProps = {
  reviewInput: ReviewReport | undefined;
  newGame: () => void;
};

function GameReview({ reviewInput, newGame }: GameReviewProps) {
  if (reviewInput == undefined) {
    console.error("error: reviewInput undefined");
    newGame();
    return null;
  }

  const moves = reviewInput.review.map((move) => move.move);

  return (
    <div className="flex flex-col size-full">
      <div className="w-full min-h-[30%] border border-border mb-8 rounded-lg"></div>
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
