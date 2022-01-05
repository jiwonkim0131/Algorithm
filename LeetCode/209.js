//209. Minimum Size Subarray Sum
const minSubArrayLen = (target, nums) => {
  let lt = 0;
  let rt = 0;
  let tmpSum = 0;
  let answer = 0;

  while (rt <= nums.length) {
    if (tmpSum < target) {
      tmpSum += nums[rt];
      rt += 1;
    } else {
      if (tmpSum >= target) {
        const tmpSubArr = nums.slice(lt, rt);
        if (answer === 0) answer = tmpSubArr.length;
        answer = answer < tmpSubArr.length ? answer : tmpSubArr.length;
      }
      tmpSum -= nums[lt];
      lt += 1;
    }
  }
  return answer;
};

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];

// const target = 11;
// const nums = [1, 2, 3, 4, 5];

console.log(minSubArrayLen(target, nums));
