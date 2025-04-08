/**
 * @param {number[]} nums // 1234
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const length = nums.length;
  let arr = new Array(length * 2);
  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[i];
    arr[length + i] = nums[i];
  }
  return arr;
};

/*
 0 -> 1
 1 -> 1
 2 -> 2
 3 -> 1
 4 -> 2
 5 -> 3

*/
