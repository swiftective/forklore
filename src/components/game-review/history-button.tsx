import { memo, useCallback, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = {
  handleClick: () => void;
  onKeys: string[];
  icon: JSX.Element;
  className?: string;
};

const HistoryButton = memo(
  ({ handleClick, onKeys, icon, className = "" }: ButtonProps) => {
    const handleKey = useCallback(
      (e: KeyboardEvent) => {
        e.preventDefault();
        if (!onKeys.includes(e.key)) return;
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
        {icon}
      </Button>
    );
  },
);

export default HistoryButton;
