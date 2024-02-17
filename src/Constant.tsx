import { FC, useMemo } from "react";

type ConstantProps = {
  data: number[];
  rerenderCount: number;
};

export const CONSTANT_PERF_NAME = "O(1) useMemo";

export const MemoConstant: FC<ConstantProps> = ({ data, rerenderCount }) => {
  performance.mark("start-memo");

  const displayData = useMemo(() => {
    return data;
  }, [data]);

  const name = `${CONSTANT_PERF_NAME}-length-${data.length}`;
  performance.mark("end-memo");
  performance.measure(name, "start-memo", "end-memo");
  const measure = performance.getEntriesByName(name).pop();

  return (
    <p
      data-testid={`${rerenderCount}${displayData.length}`}
    >{`${measure?.duration}ms`}</p>
  );
};

export const Constant: FC<ConstantProps> = ({ data, rerenderCount }) => {
  performance.mark("start-memo");

  const displayData = data;

  const name = `${CONSTANT_PERF_NAME}-length-${data.length}`;
  performance.mark("end-memo");
  performance.measure(name, "start-memo", "end-memo");
  const measure = performance.getEntriesByName(name).pop();

  return (
    <p
      data-testid={`${rerenderCount}${displayData.length}`}
    >{`${measure?.duration}ms`}</p>
  );
};


