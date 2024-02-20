import { useState } from "react";
import { PromotionContext } from "./promotion-context";
import PromotionDialog from "./promotion-dialog";

type PPProps = {
  children: React.ReactElement;
};

function PromotionProvider({ children }: PPProps) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<"white" | "black">("white");
  const [select, setSelect] = useState(
    () => (piece: string) => console.log(piece),
  );

  return (
    <>
      <PromotionContext.Provider
        value={(fn, color) => {
          setSelect(() => fn);
          setOpen(true);
          setColor(color);
        }}
      >
        {children}
      </PromotionContext.Provider>
      <PromotionDialog
        open={open}
        color={color}
        select={(piece: string) => {
          select(piece);
          setOpen(false);
        }}
      />
    </>
  );
}

export default PromotionProvider;
