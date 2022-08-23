const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, heigh) => {
  let i = low - 1;
  const pivot = arr[heigh];

  for (let j = low; j < heigh; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, heigh);
  return i + 1;
};

const quickSort = (arr, low, heigh) => {
  if (low < heigh) {
    const pi = partition(arr, low, heigh);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, heigh);
  }
};

const arr = [5, 2, 1, 11, 6, 7, 8, 9];
const n = arr.length - 1;

quickSort(arr, 0, n);

console.log(arr);
