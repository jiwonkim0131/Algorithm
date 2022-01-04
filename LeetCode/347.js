const topKFrequent = (nums, k) => {
  const nH = new Map();
  const answer = [];

  for (let x of nums) {
    nH.set(x, (nH.get(x) || 0) + 1);
  }

  const countedNums = Array.from(nH.entries()).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    answer.push(countedNums[i][0]);
  }
  return answer;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k));
