function moveZeroes(nums) {
  let newNums = nums.filter((num) => {
    return num;
  });

  let zeroCounts = nums.length - newNums.length;
  let i = 0;
  while (i < zeroCounts) {
    newNums.push(0);
    i++;
  }
  return newNums;
}

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
