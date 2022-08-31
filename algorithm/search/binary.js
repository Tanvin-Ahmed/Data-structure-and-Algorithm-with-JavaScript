const binarySearch = (arr, left, right, value) => {
  if (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) return binarySearch(arr, left, mid - 1, value);
    else if (arr[mid] < value) return binarySearch(arr, mid + 1, right, value);
  }
  return -1;
};

// Binary search is applicable only in sorted arrays
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 0, arr.length - 1, 9));

// time complexity = O(logn)
