const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const maxHepify = (arr, n, i) => {
  let large = i;

  const l = 2 * i;
  const r = l + 1;

  if (l <= n && arr[l] < arr[large]) large = l;
  if (r <= n && arr[r] < arr[large]) large = r;

  if (large !== i) {
    swap(arr, i, large);
    maxHepify(arr, n, large);
  }
};

const heapSort = (arr, n) => {
  // create max heap
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    maxHepify(arr, n, i);
  }

  // delete element from max heap and find sorted array
  for (let i = n; i >= 0; i--) {
    swap(arr, 0, i);
    maxHepify(arr, n, 0);
  }
};

const arr = [6, 5, 4, 1, 3];
const n = arr.length - 1;

heapSort(arr, n);

console.log(arr);
