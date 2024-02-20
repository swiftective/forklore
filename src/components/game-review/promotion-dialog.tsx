import { memo } from "react";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";
import MyPiece from "./my-piece";

type DialogProps = {
  open: boolean;
  select: (piece: string) => void;
  color: "white" | "black";
};

export type PromotionPiece = "q" | "b" | "r" | "n";

const PromotionDialog = memo(({ open, select, color }: DialogProps) => {
  const pieces: PromotionPiece[] = ["q", "b", "r", "n"];

  const handleClick = (piece: PromotionPiece) => {
    return () => select(piece);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="flex justify-around bg-orange-100">
        {pieces.map((p, index) => {
          return (
            <MyPiece
              color={color}
              key={index}
              piece={p}
              handleClick={handleClick(p)}
            />
          );
        })}
      </AlertDialogContent>
    </AlertDialog>
  );
});

export default PromotionDialog;
