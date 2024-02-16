import { ReviewedMove } from "@/lib/reviewer";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useState } from "react";

type RowProps = {
  id: number;
  move1: ReviewedMove;
  move2: ReviewedMove;
};

function ReviewRow({ id, move1, move2 }: RowProps) {
  const [selectedMove, setMove] = useState<1 | 2>(1);

  return (
    <AccordionItem value={"move" + id}>
      <AccordionTrigger key={id} className="hover:no-underline w-full fadein text-start">
        <div className="flex gap-4">
          <span className="w-24">{id}.</span>
          <span onClick={() => setMove(1)} className="hover:underline w-36">
            {move1.move}
          </span>
          <span onClick={() => setMove(2)} className="hover:underline w-36">
            {move2.move}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {selectedMove == 1 ? (
          <span>This is move: {move1.move}</span>
        ) : (
          <span>This is move: {move2.move}</span>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default ReviewRow;
