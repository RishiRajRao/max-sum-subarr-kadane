function maxSum(arr) {
  let maxSum = Number.NEGATIVE_INFINITY,
    sum = 0;
  for (let val of arr) {
    sum += val;
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  }
  return maxSum;
  // console.log("res==", maxSum);
}

maxSum([1,2,3,-2,5]);
