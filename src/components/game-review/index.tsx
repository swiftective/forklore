import GameReview, { GameReviewProps } from "./game-review";
import PromotionProvider from "./promotion-provider";

function GameReviewPromotion(props: GameReviewProps) {
  return (
    <PromotionProvider>
      <GameReview {...props} />
    </PromotionProvider>
  );
}

export default GameReviewPromotion;
