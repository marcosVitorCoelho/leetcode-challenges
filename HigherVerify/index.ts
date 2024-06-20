function heightChecker(heights: number[]): number {
  const newSortedHeights = [...heights].sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== newSortedHeights[i]) {
      count++;
    }
  }

  return count;
}

function BubbleSortedHigherVerify(heights: number[]): number {
  const arrayCopy = new Array(...heights);
  bubbleSort(arrayCopy);

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== arrayCopy[i]) {
      count++;
    }
  }

  return count;
}

function bubbleSort(arr: number[]) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
