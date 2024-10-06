import { cn } from "@/lib/utils";

type EvalProps = {
  score: string;
};

function Eval({ score }: EvalProps) {
  return (
    <span
      className={cn(
        "m-3 font-bold text-black bg-white rounded-lg p-1 px-2 select-none",
        score.includes("-") && "text-white bg-[#121212]",
      )}
    >
      {score}
    </span>
  );
}

export default Eval;
