import { Area, AreaChart, CartesianGrid, Dot, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { ReviewedMove } from "@/lib/reviewer";
import { memo, useMemo } from "react";
import Eval from "./eval";
import { minMax } from "@/lib/utils";

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
      return value.evalAfter[0] == "-" ? -10 : 10;
    }

    if (evalAfter == "") {
      if (evalBefore.includes("M")) {
        return evalBefore[0] == "-" ? -10 : 10;
      }

      return minMax(Number(evalBefore), -10, 10);
    }

    return minMax(Number(evalAfter), -10, 10);
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
  curr: number | null;
};

type TipProps = {
  active?: boolean;
  payload?: any[];
  label?: number;
  evals: string[];
};

export const EvalChart = memo(({ review, setCurr, curr }: ChartProps) => {
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
        <CartesianGrid stroke="gray" syncWithTicks={true} />
        <ChartTooltip cursor={false} content={<EvalToolTip evals={evals} />} />
        <XAxis
          ticks={curr ? [curr] : []}
          hide={true}
          domain={["dataMin", "dataMax"]}
        />
        <YAxis
          ticks={[0]}
          hide={true}
          domain={[-5, 5]}
          allowDataOverflow={true}
        />
        <Area
          dataKey="eval"
          type="bump"
          baseValue="dataMin"
          fill="var(--color-eval)"
          fillOpacity={0.6}
          stroke="var(--color-eval)"
          dot={<CurrentDot curr={curr} />}
        />
      </AreaChart>
    </ChartContainer>
  );
});

function EvalToolTip({ active, payload, label, evals }: TipProps) {
  if (!(active && payload && payload.length && label)) return;

  return <Eval score={evals[label]} />;
}

const CurrentDot = (props: {
  cx?: number;
  cy?: number;
  payload?: any;
  curr: number | null;
}) => {
  const { payload, curr } = props;

  if (payload.move == curr) {
    return <Dot {...props} />;
  }

  return;
};
