import { useCallback, useContext, useEffect, useState } from "react";
import { MdAdd as AddIcon } from "react-icons/md";
import { CgSpinner as Spinner } from "react-icons/cg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info, Move, Stockfish as engine } from "@/lib/engine";
import { cn } from "@/lib/utils";
import { BoardContext } from "./game-review";
import SavedMoves from "@/components/game-review/saved-moves";
import playAudio from "./audio";

const DEPTH = 22;

type AnalProps = {
  fen: string;
};

function Analyzer({ fen }: AnalProps) {
  const [score, setScore] = useState("+0.00");
  const [moves, setMoves] = useState<Move[]>([]);
  const [savedMoves, setSavedMoves] = useState<Move[]>([]);
  const [loading, setloading] = useState(true);

  const setBoard = useContext(BoardContext);

  const handleClick = useCallback((move: Move) => {
    const { fen, dest, move: moveSan } = move;
    return () => setBoard!(fen, dest, moveSan);
  }, []);

  useEffect(() => {
    engine.setOnMessage((info: Info) => {
      if (info.depth < 16) return;
      setloading(false);
      setScore(info.score);
      const m = info.moves;
      setMoves(m);
    });
  }, []);

  useEffect(() => {
    engine.analyze(fen, DEPTH);
    setloading(true);
    setMoves([]);
  }, [fen]);

  return (
    <div className="mb-8">
      <div className="w-full flex border border-border mb-4 rounded-lg">
        {!loading ? (
          <span
            className={cn(
              "px-2 whitespace-nowrap font-semibold rounded-l-lg mr-2 text-black bg-white select-none",
              score.includes("-") && "bg-[#121212] text-white",
            )}
          >
            {score}
          </span>
        ) : (
          <span className="size-6 p-1">
            <Spinner className="animate-spin size-full mx-1" />
          </span>
        )}
        <ScrollArea className="rounded-lg grid place-items-center">
          {moves.map((move, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  handleClick(move)();
                  playAudio(move.move, move.fen);
                }}
                className="m-1 whitespace-nowrap text-sm select-none"
              >
                {move.move}
              </span>
            );
          })}
        </ScrollArea>
      </div>

      <div className="w-full flex place-items-center items-center border border-border rounded-lg">
        <span className="px-2 font-semibold rounded-lg bg-background">
          <span className="flex place-items-center gap-2">
            <AddIcon
              onClick={() => {
                setSavedMoves(moves);
              }}
              size={23}
            />
          </span>
        </span>
        <SavedMoves savedMoves={savedMoves} />
      </div>
    </div>
  );
}

export default Analyzer;
