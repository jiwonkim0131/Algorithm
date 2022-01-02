// 1838. Frequency of the Most Frequent Element

// sol1
const maxFrequency = (nums, k) => {
  let lt = 0;
  let sum = 0;
  nums.sort((a, b) => a - b);
  let max = Math.max();

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (nums[rt] * (rt - lt + 1) - sum > k) {
      sum -= nums[lt++];
    }
    max = Math.max(rt - lt + 1, max);
  }

  return max;
};

// sol2
const maxFrequency2 = (nums, k) => {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let lt = 0,
    rt = 0,
    sum = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    //증가 시킨 값의 합이 현재 sum에 k를 더한 값 보다 크면 k가 모자란 것
    while (nums[rt] * (rt - lt + 1) > sum + k) {
      sum -= nums[lt];
      lt++;
    }
    answer = Math.max(answer, rt - lt + 1);
  }
  return answer;
};

const nums = [1, 4, 8, 13];
const k = 5;
console.log(maxFrequency(nums, k));
