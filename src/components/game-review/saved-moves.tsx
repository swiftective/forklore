import { Move } from "@/lib/engine";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GrFormNext as NextIcon } from "react-icons/gr";
import { FenContext } from "./game-review";

type SaveProps = {
  savedMoves: Move[];
  className?: string;
};

const SavedMoves = memo(({ savedMoves, className = "" }: SaveProps) => {
  const [currMove, setMove] = useState(-1);

  const setFen = useContext(FenContext);
  const handleClick = useCallback((fen: string) => {
    return () => setFen!(fen);
  }, []);

  useEffect(() => {
    if (!savedMoves[currMove]) return;

    handleClick(savedMoves[currMove].fen)();
  }, [currMove]);

  return (
    <div className="w-full flex place-items-center overflow-hidden h-full">
      {savedMoves.length != 0 ? (
        <span
          className="size-6"
          onClick={() => {
            setMove((move) => {
              const newMove = move + 1;
              if (newMove >= savedMoves.length) return move;
              return newMove;
            });
          }}
        >
          <NextIcon className="size-full" />
        </span>
      ) : null}
      <ScrollArea
        className={cn("w-full rounded-lg flex place-items-center", className)}
      >
        {savedMoves.map((move, index) => {
          return (
            <span
              onClick={(e) => {
                setMove(index);
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
