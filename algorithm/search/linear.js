const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

// linear search is applicable for any kind of array
const arr = [3, 45, 6, 7, 9, 100, 69];

console.log(linearSearch(arr, 100));

// time complexity = O(n)
// other name of linear search algorithm is sequential search algorithm
