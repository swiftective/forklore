import { Opening } from "@/lib/reviewer";
import { memo } from "react";

const ReviewOpening = memo(({ opening }: { opening: Opening }) => {
  return (
    <div className="mb-8 mx-1 text-sm text-muted-foreground">
      {opening.eco} {opening.name}
    </div>
  );
});

export default ReviewOpening;
