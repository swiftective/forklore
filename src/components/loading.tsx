import { GiMountedKnight as Knight } from "react-icons/gi";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { AddGameInput } from "@/components/add-game";

function Loading({ input }: { input: AddGameInput }) {
  const [progress, setProgess] = useState<number>(0);

  useEffect(() => {
    const key = setInterval(() => {
      setProgess((progress) => {
        if (progress >= 100) {
          return 0;
        }
        return progress + 5;
      });
    }, 1000);

    return () => {
      clearInterval(key);
    };
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
