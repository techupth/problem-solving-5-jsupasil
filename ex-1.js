function runningSum(nums) {
  const newNums = [];
  let accumulator = 0;
  for (let num of nums) {
    accumulator += num;
    newNums.push(accumulator);
  }
  return newNums;
}

let nums = [1, 2, 3, 4, 1, 2, 4];
console.log(runningSum(nums));

let nums1 = [1, 2, 3, 4];
console.log(runningSum(nums1));

let nums2 = [1, 1, 1, 1, 1];
console.log(runningSum(nums2));

let nums3 = [3, 1, 2, 10, 1];
console.log(runningSum(nums3));
