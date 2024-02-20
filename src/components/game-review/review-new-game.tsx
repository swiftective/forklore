import { memo } from "react";
import { CgBolt as Icon } from "react-icons/cg";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  fn: () => void;
  className?: string;
};

const ReviewNewGameButton = memo(({ fn, className = "" }: Props) => {
  return (
    <Button onClick={fn} className={cn("font-bold h-8 p-3 pr-5", className)}>
      <Icon className="m-1 size-6" /> New Game
    </Button>
  );
});

export default ReviewNewGameButton;
