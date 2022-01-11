//56. Merge Intervals

const merge = intervals => {
  const answer = [];

  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  answer.push(intervals[0]);

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= answer[answer.length - 1][1]) {
      const [prevStart, prevEnd] = answer.pop();
      answer.push([prevStart, Math.max(end, prevEnd)]);
    } else answer.push([start, end]);
  }

  return answer;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
