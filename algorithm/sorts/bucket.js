const bucketSort = (arr = []) => {
  const n = arr.length;

  //   create a new bucket
  const bucket = new Array(n);

  // add new array in every bucket element
  for (let i = 0; i < n; i++) {
    bucket[i] = [];
  }

  //   add element of arr[i] to bucket(Math.floor(n*arr[i])) index
  for (let i = 0; i < n; i++) {
    const index = Math.floor(n * arr[i]);
    bucket[index].push(arr[i]);
  }

  //   if any bucket is element has array of length 2 or more then it will execute
  for (let i = 0; i < n; i++) {
    if (bucket[i].length > 1) {
      bucket[i].sort((a, b) => a - b);
    }
  }

  //   concate all element in given array from bucket index 0 to length
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < bucket[i].length; j++) {
      arr[index++] = bucket[i][j];
    }
  }
};

let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];

bucketSort(arr);

console.log(arr);
