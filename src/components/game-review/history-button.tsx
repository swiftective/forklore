import { memo, useCallback, useEffect } from "react";
import { Button } from "../ui/button";

import { IoChevronBack as BackIcon } from "react-icons/io5";
import { cn } from "@/lib/utils";

type ButtonProps = {
  handleClick: () => void;
  className?: string;
};

const HistoryButton = memo(({ handleClick, className = "" }: ButtonProps) => {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key != "ArrowLeft") return;
      handleClick();
    },
    [handleClick],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <Button
      className={cn("h-8 p-3", className)}
      variant="ghost"
      onClick={handleClick}
    >
      <BackIcon />
    </Button>
  );
});

export default HistoryButton;
