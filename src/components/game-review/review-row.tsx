import { ReviewedMove } from "@/lib/reviewer";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useContext, useState } from "react";
import { FenContext } from "./game-review";
import ReviewMove from "./review-move";

type RowProps = {
  id: number;
  move1: ReviewedMove;
  move2: ReviewedMove;
};

function ReviewRow({ id, move1, move2 }: RowProps) {
  const [selectedMove, setMove] = useState<1 | 2>(1);

  const setFen = useContext(FenContext);

  return (
    <AccordionItem value={"move" + id}>
      <AccordionTrigger
        key={id}
        className="hover:no-underline w-full fadein text-start"
      >
        <div className="flex gap-4">
          <span className="w-24">{id}.</span>
          <span
            onClick={(e) => {
              e.currentTarget.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              setFen!(move1.moveFen);
              setMove(1);
            }}
            className="hover:underline w-36"
          >
            {move1.move}
          </span>
          <span
            onClick={(e) => {
              e.currentTarget.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              setFen!(move2.moveFen);
              setMove(2);
            }}
            className="hover:underline w-36"
          >
            {move2.move}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {selectedMove == 1 ? (
          <ReviewMove move={move1} />
        ) : (
          <ReviewMove move={move2} />
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default ReviewRow;
