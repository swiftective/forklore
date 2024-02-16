import { memo } from "react";
import { CgBolt as Icon } from "react-icons/cg";
import { Button } from "../ui/button";

type Props = {
  fn: () => void;
};

const ReviewNewGame = memo(({ fn }: Props) => {
  return (
    <Button onClick={fn} className="w-full my-5 p-5 font-bold h-5">
      <Icon className="m-1 size-6" /> New Game
    </Button>
  );
});

export default ReviewNewGame;
