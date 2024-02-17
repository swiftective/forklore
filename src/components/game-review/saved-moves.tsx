import { Move } from "@/lib/engine";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { memo, useState } from "react";
import { cn } from "@/lib/utils";

type SaveProps = {
  savedMoves: Move[];
  handleClick: (fen: string) => () => void;
};

const SavedMoves = memo(({ handleClick, savedMoves }: SaveProps) => {
  const [currMove, setMove] = useState(-1);
  return (
    <ScrollArea className="w-full rounded-lg flex place-items-center">
      {savedMoves.map((move, index) => {
        return (
          <span
            onClick={(e) => {
              handleClick(move.fen)();
              setMove(index);
              e.currentTarget.scrollIntoView({behavior: "smooth", inline: "center"});
            }}
            className={cn("m-1 whitespace-nowrap text-sm select-none",
              currMove == index && "font-bold text-md"
            )}
          >
            {move.move}
          </span>
        );
      })}
      <ScrollBar orientation="horizontal" className="h-1" />
    </ScrollArea>
  );
});

export default SavedMoves;
