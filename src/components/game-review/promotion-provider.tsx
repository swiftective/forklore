import { useState } from "react";
import { PromotionContext } from "./promotion-context";
import PromotionDialog from "./promotion-dialog";

type PPProps = {
  children: React.ReactElement;
};

function PromotionProvider({ children }: PPProps) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState({
    select: (piece: string) => console.log(piece)
  });

  return (
    <>
      <PromotionContext.Provider
        value={(fn) => {
          setSelect({
            select: fn,
          });
          setOpen(true);
        }}
      >
        {children}
      </PromotionContext.Provider>
      <PromotionDialog
        open={open}
        select={(piece: string) => {
            select.select(piece);
            setOpen(false);
        }}
      />
    </>
  );
}

export default PromotionProvider;
