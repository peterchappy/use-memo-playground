import { FC, useMemo } from "react";

type LinearithmicProps = {
  data: number[];
  rerenderCount: number;
};

export const LINEARITHMIC_PERF_NAME = "O(nlogn) useMemo";

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // Concatenate values into resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // Move to the next element in the left array
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // Move to the next element in the right array
    }
  }

  // Concatenate any remaining elements in the left or right array
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Exampl

export const MemoLinearithmic: FC<LinearithmicProps> = ({
  data,
  rerenderCount,
}) => {
  performance.mark("start-memo");

  const displayData = useMemo(() => {
    return mergeSort(data);
  }, [data]);

  const name = `${LINEARITHMIC_PERF_NAME}-length-${data.length}`;
  performance.mark("end-memo");
  performance.measure(name, "start-memo", "end-memo");
  const measure = performance.getEntriesByName(name).pop();

  return (
    <p
      data-testid={`${rerenderCount} ${displayData.length}`}
    >{`${measure?.duration}ms`}</p>
  );
};

export const Linearithmic: FC<LinearithmicProps> = ({
  data,
  rerenderCount,
}) => {
  performance.mark("start-memo");

  const displayData =  mergeSort(data);
  

  const name = `${LINEARITHMIC_PERF_NAME}-length-${data.length}`;
  performance.mark("end-memo");
  performance.measure(name, "start-memo", "end-memo");
  const measure = performance.getEntriesByName(name).pop();

  return (
    <p
      data-testid={`${rerenderCount} ${displayData.length}`}
    >{`${measure?.duration}ms`}</p>
  );
};

