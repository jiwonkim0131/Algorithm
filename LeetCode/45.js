// LeetCode 45. Jump Game II

const jump = nums => {
  let max = nums[0];
  let len = nums.length;
  let start = 0;
  let end = nums[0];
  let count = 1;

  if (len < 2) {
    return 0;
  }

  while (max < len - 1) {
    let n = start;
    let m = end;
    start = end + 1;
    for (let i = n; i <= m; i++) {
      if (i + nums[i] > max) {
        max = i + nums[i];
        end = max;
      }
    }
    count += 1;
  }

  return count;
};
