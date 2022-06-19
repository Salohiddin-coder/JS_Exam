function positiveSum(arr) {
  let sum = 0;
  let negativeCount = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          sum += arr[i];
      }
      if (arr[i] < 0) {
          negativeCount++;
      }
      if (negativeCount === arr.length) {
          return 0;
      }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3, -4, 5, 6]));