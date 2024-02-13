import { FC, useMemo, useEffect } from "react";

type LinearProps = {
  data: number[];
  rerenderCount: number;
};

const LINEAR_PERF_NAME = "linear";

export const Linear: FC<LinearProps> = ({ data, rerenderCount }) => {
  performance.mark("start-memo");
  const displayData = useMemo(() => {
    return data.reduce((acc, x) => acc + x, 0);
  }, [data]);

  const name = `${LINEAR_PERF_NAME}-length-${data.length}`;
  performance.mark("end-memo");
  performance.measure(name, "start-memo", "end-memo");
  const measure = performance.getEntriesByName(name).pop();

  return (
    <p
      data-testid={`${rerenderCount} ${displayData}`}
    >{`${measure?.duration}ms`}</p>
  );
};
