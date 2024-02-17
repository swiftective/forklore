import { createContext, useContext } from "react";

type PromotionValue = (onSelect: (piece: string) => void) => void;

export const PromotionContext = createContext<PromotionValue | null>(null);

export const usePromotion = () => useContext(PromotionContext);
