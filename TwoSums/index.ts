function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i <= nums.length - 1; i++) {
    console.log("first loop", nums[i]);
    for (let j = nums.length - 1; j >= 0; j--) {
      console.log("second loop", nums[j]);
      if (nums[i] + nums[j] === target && j !== i) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([3, 3], 6));

function SimplifiedBigOTwoSums(nums: number[], target: number): number[] {
  let counter: any = {};
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    let result = target - temp;

    console.log(counter);
    if (counter[result] !== undefined) {
      return [counter[result], i];
    }
    counter[temp] = i;
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
