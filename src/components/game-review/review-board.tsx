import { ReviewedMove } from "@/lib/reviewer";
import { ScrollArea } from "../ui/scroll-area";
import ReviewRow from "./review-row";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import ReviewMove from "./review-move";
import { FenContext } from "./game-review";

const ReviewBoard = memo(({ moves }: { moves: ReviewedMove[] }) => {
  const [curr, setCurr] = useState<number | null>(null);
  const setFen = useContext(FenContext);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key != "ArrowRight") return;
      const val = curr == null ? 0 : curr + 1 >= moves.length ? curr : curr + 1;
      setCurr(val);
      setFen!(moves[val].moveFen);
    },
    [setCurr, curr, moves, setFen],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <ScrollArea className="flex-auto">
      {moves.map((move, index) => {
        if (index % 2 == 1) {
          return;
        }

        const move1 = move;
        const move2 = moves[index + 1];
        const moveNumber = index / 2 + 1;

        return (
          <>
            <ReviewRow
              key={moveNumber}
              id={moveNumber}
              move1={move1}
              idx1={index}
              idx2={index + 1}
              handleClick={(index: number) => setCurr(index)}
              move2={move2}
            />

            {curr != null && (curr == index || curr - 1 == index) ? (
              <ReviewMove move={moves[curr]} />
            ) : null}
          </>
        );
      })}
    </ScrollArea>
  );
});

export default ReviewBoard;
