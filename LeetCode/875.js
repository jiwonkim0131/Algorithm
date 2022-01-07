//875. Koko Eating Bananas

const minEatingSpeed = (piles, h) => {
  //piles 오름차순 정렬
  piles.sort((a, b) => {
    return a - b;
  });

  let answer = 0;
  let lt = 1;
  let rt = piles[piles.length - 1];

  const canEat = (piles, speed) => {
    let count = 0;
    for (let i = 0; i < piles.length; i++) {
      count += Math.ceil(piles[i] / speed);
    }
    return count;
  };

  while (lt <= rt) {
    // mid  === bananas-per-hour eating speed of k
    let speed = parseInt((lt + rt) / 2);
    //최소 속도가 필요
    if (canEat(piles, speed) <= h) {
      answer = speed;
      rt = speed - 1;
    } else lt = speed + 1;
  }
  return answer;
};

const piles = [3, 6, 7, 11];
const h = 8;
console.log(minEatingSpeed(piles, h));
