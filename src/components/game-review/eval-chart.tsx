import { Area, AreaChart, CartesianGrid, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { ReviewedMove } from "@/lib/reviewer";
import { memo, useMemo } from "react";
import Eval from "./eval";

function getEvals(review: ReviewedMove[]): string[] {
  const evals = review.map((value: ReviewedMove) => {
    if ("bookMove" in value) return "+0.00";

    if (value.evalAfter == "") return value.evalBefore;

    return value.evalAfter;
  });

  return evals;
}

function getEvalValues(review: ReviewedMove[]): number[] {
  const evals = review.map((value: ReviewedMove) => {
    if ("bookMove" in value) return 0;

    const { evalAfter, evalBefore } = value;

    if (evalAfter.includes("M")) {
      return value.evalAfter[0] == "-" ? -100 : 100;
    }

    if (evalAfter == "") return Number(evalBefore);

    return Number(evalAfter);
  });

  return evals;
}

const chartConfig = {
  eval: {
    label: "evaluation",
    color: "white",
  },
} satisfies ChartConfig;

type ChartProps = {
  review: ReviewedMove[];
  setCurr: (idx: number) => void;
};

type TipProps = {
  active?: boolean;
  payload?: any[];
  label?: number;
  evals: string[];
};

export const EvalChart = memo(({ review, setCurr }: ChartProps) => {
  const evals = useMemo(() => {
    return getEvals(review);
  }, [review]);

  const chartData = useMemo(() => {
    const chartData = getEvalValues(review).map((value, index) => {
      return { move: index, eval: value };
    });

    return chartData;
  }, [review]);

  return (
    <ChartContainer
      className="bg-[#121212] rounded-lg h-24 w-full my-3 border-border border-2"
      config={chartConfig}
    >
      <AreaChart
        accessibilityLayer
        margin={{
          left: 0,
          right: 0,
        }}
        data={chartData}
        onClick={({ activeTooltipIndex }) => {
          if (!activeTooltipIndex) return;
          setCurr(activeTooltipIndex);
        }}
      >
        <CartesianGrid stroke="gray" syncWithTicks={true} vertical={false} />
        <ChartTooltip
          cursor={false}
          content={<CustomToolTip evals={evals} />}
        />
        <YAxis
          ticks={[0]}
          hide={true}
          domain={[-5, 5]}
          allowDataOverflow={true}
        />
        <Area
          dataKey="eval"
          type="natural"
          baseValue="dataMin"
          fill="var(--color-eval)"
          fillOpacity={0.6}
          stroke="var(--color-eval)"
        />
      </AreaChart>
    </ChartContainer>
  );
});

function CustomToolTip({ active, payload, label, evals }: TipProps) {
  if (!(active && payload && payload.length && label)) return;

  return <Eval score={evals[label]} />;
}
