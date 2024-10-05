import { Move } from "@/lib/engine";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GrFormNext as NextIcon } from "react-icons/gr";
import { BoardContext, LastMove } from "./game-review";
import playAudio from "./audio.ts";
import { Button } from "@/components/ui/button.tsx";

type SaveProps = {
  savedMoves: Move[];
  className?: string;
};

const SavedMoves = memo(({ savedMoves, className = "" }: SaveProps) => {
  const [currMove, setMove] = useState(-1);

  const setBoard = useContext(BoardContext);
  const handleClick = useCallback(
    (fen: string, dest: LastMove, move: string | undefined) => {
      return () => setBoard!(fen, dest, move);
    },
    [],
  );

  useEffect(() => {
    const MOVE = savedMoves[currMove];

    if (!MOVE) return;

    handleClick(MOVE.fen, MOVE.dest, MOVE.move)();

    playAudio(MOVE.move, MOVE.fen);
  }, [currMove]);

  useEffect(() => {
    setMove(-1);
  }, [savedMoves]);

  return (
    <div className="w-full flex place-items-center overflow-hidden h-full">
      {savedMoves.length != 0 ? (
        <Button
          className="size-6 block p-0"
          variant="outline"
          onClick={() => {
            setMove((move) => {
              const newMove = move + 1;
              if (newMove >= savedMoves.length) return move;
              return newMove;
            });
          }}
        >
          <NextIcon size={20} className="m-auto" />
        </Button>
      ) : null}
      <ScrollArea
        className={cn("w-full rounded-lg flex place-items-center", className)}
      >
        {savedMoves.map((move, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                setMove(index);
                if (currMove == index) {
                  const { fen, dest, move } = savedMoves[index];
                  handleClick(fen, dest, move)();
                }
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className={cn(
                "m-1 whitespace-nowrap text-sm select-none",
                currMove == index && "font-bold text-md",
              )}
            >
              {move.move}
            </span>
          );
        })}
        <ScrollBar orientation="horizontal" className="h-2" />
      </ScrollArea>
    </div>
  );
});

export default SavedMoves;
