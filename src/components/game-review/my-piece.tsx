import { PromotionPiece } from "@/components/game-review/promotion-dialog";
import { FaChessKnight as Knight } from "react-icons/fa";
import { GiQueenCrown as Queen } from "react-icons/gi";
import { TbChessBishopFilled as Bishop } from "react-icons/tb";
import { FaChessRook as Rook } from "react-icons/fa";

type PProps = {
  handleClick: () => void;
  piece: PromotionPiece;
};

function MyPiece({ piece, handleClick: onclick }: PProps) {
  const className = "size-20 hover:scale-150 transition-all";

  return (
    <div onClick={onclick}>
      {piece == "q" ? (
        <Queen className={className} />
      ) : piece == "r" ? (
        <Rook className={className} />
      ) : piece == "b" ? (
        <Bishop className={className} />
      ) : (
        <Knight className={className} />
      )}
    </div>
  );
}

export default MyPiece;
