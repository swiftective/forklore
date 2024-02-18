import { memo } from "react";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";
import MyPiece from "./my-piece";

type DialogProps = {
  open: boolean;
  select: (piece: string) => void;
};

export type PromotionPiece = "q" | "b" | "r" | "n";

const PromotionDialog = memo(({ open, select }: DialogProps) => {
  const pieces: PromotionPiece[] = ["q", "b", "r", "n"];

  const handleClick = (piece: PromotionPiece) => {
    return () => select(piece);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="flex justify-around">
        {pieces.map((p) => {
          return <MyPiece piece={p} handleClick={handleClick(p)} />;
        })}
      </AlertDialogContent>
    </AlertDialog>
  );
});

export default PromotionDialog;
