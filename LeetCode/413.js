//413. Arithmetic Slices 부분 수열

//sol1 two pointer
const numberOfArithmeticSlices1 = nums => {
  let lt = 0;
  let rt = 2;
  let answer = 0;
  let diff = nums[1] - nums[0];

  if (nums.length < 3) return 0;

  while (rt < nums.length) {
    const currentGap = nums[rt] - nums[rt - 1];
    if (currentGap === diff) {
      answer += rt - lt - 1;
      rt += 1;
    } else {
      lt = rt - 1;
      rt = lt + 2;
      diff = currentGap;
    }
  }
  return answer;
};

//sol2 dp
const numberOfArithmeticSlices = nums => {
  let answer = 0;
  const dp = Array(nums.length).fill(0);

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = 1 + dp[i - 1];
      answer += dp[i];
    }
  }

  return answer;
};

const nums = [1, 2, 3, 4];
console.log(numberOfArithmeticSlices(nums)); //3
