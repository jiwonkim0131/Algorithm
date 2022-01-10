// leet code Q.448
const findDisappearedNumbers = nums => {
  const answer = [];
  const count = Array(nums.length).fill(0);

  nums.forEach(i => (count[i - 1] += 1));

  count.forEach((_, i) => {
    if (count[i] === 0) {
      answer.push(i + 1);
    }
  });
  return answer;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
