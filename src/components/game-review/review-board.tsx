import { ReviewedMove } from "@/lib/reviewer";
import { Accordion } from "../ui/accordion";
import { ScrollArea } from "../ui/scroll-area";
import ReviewRow from "./review-row";
import { memo } from "react";

const ReviewBoard = memo(({ moves }: { moves: ReviewedMove[] }) => {
  return (
    <ScrollArea className="flex-auto">
      <Accordion type="single">
        {moves.map((move, index) => {
          if (index % 2 == 1) {
            return;
          }

          const move1 = move;
          const move2 = moves[index + 1];
          const moveNumber = index / 2 + 1;

          return <ReviewRow key={moveNumber} id={moveNumber} move1={move1} move2={move2} />;
        })}
      </Accordion>
    </ScrollArea>
  );
});

export default ReviewBoard;
