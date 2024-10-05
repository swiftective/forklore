import { ReviewedMove } from "@/lib/reviewer";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ReviewRow from "./review-row";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import ReviewMove from "./review-move";
import { BoardContext } from "./game-review";
import { EvalChart } from "./eval-chart";

const ReviewBoard = memo(({ moves }: { moves: ReviewedMove[] }) => {
  const [curr, setCurr] = useState<number | null>(null);
  const setBoard = useContext(BoardContext);

  const setCurrBoard = useCallback((idx: number) => {
    setCurr(idx);
    const { moveFen: fen, dest, move } = moves[idx];
    setBoard!(fen, dest, move);
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (["ArrowUp", "w"].includes(e.key)) {
        const val =
          curr == null ? 0 : curr + 1 >= moves.length ? curr : curr + 1;
        setCurr(val);
        const { moveFen: fen, dest, move } = moves[val];
        setBoard!(fen, dest, move);
      }

      if (["ArrowDown", "s"].includes(e.key)) {
        const val = curr == null ? 0 : curr - 1 <= 0 ? 0 : curr - 1;
        setCurr(val);
        const { moveFen: fen, dest, move } = moves[val];
        setBoard!(fen, dest, move);
      }

      if (e.key == "f") {
        if (curr == null) return;
        setCurr(curr);
        const { moveFen: fen, dest, move } = moves[curr];
        setBoard!(fen, dest, move);
      }
    },
    [setCurr, curr, moves, setBoard],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <>
      <EvalChart review={moves} setCurr={setCurrBoard} />
      <ScrollArea className="flex-auto mt-3">
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
        <ScrollBar className="w-[1px]" />
      </ScrollArea>
    </>
  );
});

export default ReviewBoard;
