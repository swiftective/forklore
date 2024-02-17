import { useState } from "react";
import { PromotionContext } from "./promotion-context";
import PromotionDialog from "./promotion-dialog";

type PPProps = {
  children: React.ReactElement;
};

type Select = (piece: string) => void;

function PromotionProvider({ children }: PPProps) {
  const [open, setOpen] = useState(false);
  const [onSelect, setOnSelect] = useState<Select>((piece: string) => {
    console.log(piece);
  });
  return (
    <>
      <PromotionContext.Provider
        value={(fn) => {
          setOpen(true);
          setOnSelect(fn);
        }}
      >
        {children}
      </PromotionContext.Provider>
      <PromotionDialog
        open={open}
        onSelect={(piece: string) => {
          onSelect(piece);
          setOpen(false);
        }}
      />
    </>
  );
}

export default PromotionProvider;
