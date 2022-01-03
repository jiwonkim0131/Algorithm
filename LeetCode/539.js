//539. Minimum Time Difference

const timeToMin = t => {
  const [hour, minute] = t.split(':');
  return Math.floor(hour) * 60 + Math.floor(minute);
};

const findMinDifference = timePoints => {
  let answer = Number.MAX_SAFE_INTEGER;

  let minPoints = [];
  for (let i = 0; i < timePoints.length; i++) {
    //시간 => 분으로 변환한 배열
    minPoints.push(timeToMin(timePoints[i]));
  }

  //시간 순 정렬
  minPoints.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < minPoints.length - 1; i++) {
    answer = Math.min(answer, minPoints[i + 1] - minPoints[i]);
    if (answer == 0) return answer;
  }

  //여기가 point! 시계는 원형이라는 사실을 잊지 말자
  return Math.min(answer, 1440 + minPoints[0] - minPoints[minPoints.length - 1]);
};

const timePoints = ['23:59', '00:00'];
console.log(findMinDifference(timePoints));
