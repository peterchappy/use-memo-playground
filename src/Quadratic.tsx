import { FC, useMemo } from "react";

type QuadraticProps = {
  data: number[];
  rerenderCount: number;
};

export const QUADRATIC_PERF_NAME = "O(n^2) useMemo";

const bubbleSort = (arr: number[]): number[] => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export const Quadratic: FC<QuadraticProps> = ({ data, rerenderCount }) => {
  performance.mark("start-memo");

  const displayData = useMemo(() => {
    return bubbleSort(data);
  }, [data]);

  const name = `${QUADRATIC_PERF_NAME}-length-${data.length}`;
  performance.mark("end-memo");
  performance.measure(name, "start-memo", "end-memo");
  const measure = performance.getEntriesByName(name).pop();

  return (
    <p
      data-testid={`${rerenderCount} ${displayData.length}`}
    >{`${measure?.duration}ms`}</p>
  );
};
