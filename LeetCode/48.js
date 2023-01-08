// [230108] feat: Problem Solving - LeetCode Q.48

const rotate = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < i; k++) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[k][i];
      matrix[k][i] = temp;
    }
  }
  return matrix.map(row => row.reverse());
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));
