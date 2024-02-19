import { Opening } from "@/lib/reviewer";
import { memo } from "react";

const ReviewOpening = memo(({ opening }: { opening: Opening }) => {
  return (
    <div className="mb-8 mx-1 text-sm text-muted-foreground">
      <a
        className="hover:underline"
        href={`https://www.chessgames.com/perl/chessopening?eco=${opening.eco}`}
        target="_blank"
      >
        {opening.eco}
      </a>{" "}
      {opening.name}
    </div>
  );
});

export default ReviewOpening;
