import { GiMountedKnight as Knight } from "react-icons/gi";
import { Progress } from "@/components/ui/progress";
import { useContext, useEffect, useMemo, useState } from "react";
import { AddGameInput } from "@/components/add-game";
import { Chess } from "chess.js";
import { ConfigContext } from "@/app";
import { ReviewReport, Reviewer } from "@/lib/reviewer";

function Loading({
  input,
  onComplete,
  onError,
}: {
  input: AddGameInput;
  onComplete: (info: ReviewReport) => void;
  onError: () => void;
}) {
  const [progress, setProgess] = useState<number>(0);

  const setConfig = useContext(ConfigContext);

  const fens = useMemo(() => {
    const chess = new Chess();
    chess.loadPgn(input.pgn);

    const fens = chess.history({ verbose: true }).map((move) => move.after);

    return fens;
  }, []);

  useEffect(() => {
    setConfig!({
      orientation: input.player,
    });

    const moves = fens.map((fen) => {
      const fenSplit = fen.split(" ");
      fenSplit.splice(4, 2);
      const newFen = fenSplit.join(" ");

      return newFen;
    });

    const movesString = moves.join("\t");

    //@ts-expect-error Module call from emscripten
    const openingData = Module.ccall(
      "get_opening",
      "string",
      ["string"],
      [movesString],
    );

    if (!openingData) {
      onError();
      return;
    }

    const openingInfo = openingData.split("\n");

    Reviewer(
      input.pgn,
      { eco: openingInfo[0], name: openingInfo[1] },
      Number(openingInfo[2]),
      (info) => {
        onComplete(info);
      },
      (progress, fen) => {
        setProgess(progress);
        setConfig!({
          fen: fen,
        });
      },
      16,
    );
  }, []);

  return (
    <div className="size-full grid place-items-center">
      <div className="grid place-items-center">
        <div className="overflow-hidden rounded-[10px] grid place-items-center">
          <div className="magbor m-[1px] grid place-items-center">
            <Knight className="size-full p-5 absolute bg-background rounded-[inherit] animate-pulse" />
          </div>
        </div>
        <Progress className="m-8 h-1" value={progress} />
      </div>
    </div>
  );
}

export default Loading;
