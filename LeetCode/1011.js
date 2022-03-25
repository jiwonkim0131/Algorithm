//1011. Capacity To Ship Packages Within D Days

const shipWithinDays = (weights, days) => {
  let answer = 0;
  let lt = Math.max(...weights);
  let rt = weights.reduce((acc, cur) => acc + cur, 0);

  //capacity 기준으로 모두 shipping하는데 몇일이 걸리는 지 계산
  const calculateDay = (weights, capacity) => {
    let day = 1,
      total = 0;

    for (let n of weights) {
      total += n;
      if (total > capacity) {
        total = n; //이전 값부터 다시  total count
        day += 1;
      }
    }
    return day;
  };

  while (lt <= rt) {
    let capacity = Math.floor((lt + rt) / 2);
    //mid = capacity
    const day = calculateDay(weights, capacity); // mid일 때 걸리는 날짜 수
    if (day > days) {
      lt = capacity + 1;
    } else {
      answer = capacity;
      rt = capacity - 1;
    }
  }
  return answer;
};

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const days = 5;
console.log(shipWithinDays(weights, days));
