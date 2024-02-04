import { GiMountedKnight as Knight } from "react-icons/gi";

function Loading() {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="overflow-hidden rounded-[10px] grid place-items-center">
        <div className="magbor m-[1px] grid place-items-center">
          <Knight className="size-full p-3 absolute bg-background rounded-[inherit] animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
