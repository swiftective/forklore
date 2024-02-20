import { PromotionPiece } from "@/components/game-review/promotion-dialog";

import "./promotion.css";
import { cn } from "@/lib/utils";

type PProps = {
  handleClick: () => void;
  piece: PromotionPiece;
  color: "white" | "black";
};

function MyPiece({ piece, handleClick, color }: PProps) {
  const className = "hover:scale-150 transition-transform size-20";

  return (
    <div
      onClick={handleClick}
      className={cn(className, `promotion-piece promotion-${piece}-${color}`)}
    ></div>
  );
}

export default MyPiece;
