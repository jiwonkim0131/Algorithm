//DFS  0과 1로 만들 수 있는 이진수 조합 구하기

const findDifferentBinaryString = nums => {
  let n = nums[0].length;
  let tmp = [];
  let flag = false;
  let answer = '';

  const DFS = L => {
    if (flag) return;
    if (L === n) {
      if (!nums.includes(tmp.join(''))) {
        answer = tmp.join('');
        flag = true;
      }
    } else {
      for (let i = 0; i <= 1; i++) {
        tmp.push(i);
        DFS(L + 1);
        tmp.pop();
      }
    }
  };

  DFS(0);
  return answer;
};

const nums = ['00', '01'];
console.log(findDifferentBinaryString(nums));
