import { useEffect, useState } from "react";
import { FaPlay as PlayIcon } from "react-icons/fa6";
import { MdAdd as AddIcon } from "react-icons/md";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Info, Stockfish as engine } from "@/lib/engine";
import { cn } from "@/lib/utils";

const DEPTH = 22;

type AnalProps = {
  fen: string;
};

function Analyzer({ fen }: AnalProps) {
  const [score, setScore] = useState("+0.00");
  const [moves, setMoves] = useState<string[]>([]);
  const [savedMoves, setSavedMoves] = useState<string[]>([]);

  useEffect(() => {


    engine.setOnMessage((info) => {
      setScore(info.score);
      const m = info.moves.map((move) => move.move);
      setMoves(m);
    });

    engine.analyze(fen, DEPTH);
  }, [fen]);

  return (
    <div className="mb-8">
      <div className="w-full flex border border-border mb-4 rounded-lg">
        <span
          className={cn(
            "px-2 whitespace-nowrap font-semibold rounded-l-lg mr-2 text-black bg-white",
            score.includes("-") && "bg-[#121212] text-white",
          )}
        >
          {score}
        </span>
        <ScrollArea className="rounded-lg grid place-items-center">
          {moves.map((move) => {
            return (
              <span className="m-1 whitespace-nowrap text-sm select-none">
                {move}
              </span>
            );
          })}
          <ScrollBar orientation="horizontal" className="h-2" />
        </ScrollArea>
      </div>

      <div className="w-full flex place-items-center items-center border border-border rounded-lg">
        <span className="px-2 font-semibold rounded-lg bg-background">
          <span className="flex place-items-center gap-2">
            <PlayIcon />
            <AddIcon
              onClick={() => {
                setSavedMoves(moves);
              }}
              size={23}
            />
          </span>
        </span>
        <ScrollArea className="w-full rounded-lg flex place-items-center">
          {savedMoves.map((move) => {
            return (
              <span className="m-1 whitespace-nowrap text-sm select-none">
                {move}
              </span>
            );
          })}
          <ScrollBar orientation="horizontal" className="h-2" />
        </ScrollArea>
      </div>
    </div>
  );
}

export default Analyzer;
