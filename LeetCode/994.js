// leet code Q.994

const orangesRotting = grid => {
  let queue = [];
  let minutes = 0;
  let fresh = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) fresh += 1;
      if (grid[i][j] == 2) queue.push([i, j]);
    }
  }

  while (queue.length !== 0 && fresh) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let nqueue = [];
    while (queue.length !== 0) {
      let [curx, cury] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = curx + dx[i];
        let ny = cury + dy[i];
        if (ny >= 0 && nx >= 0 && ny < grid[0].length && nx < grid.length) {
          if (grid[nx][ny] === 1) {
            grid[nx][ny] = 2;
            fresh -= 1;
            nqueue.push([nx, ny]);
          }
        }
      }
    }
    minutes += 1;
    queue = nqueue;
  }

  return fresh === 0 ? minutes : -1;
};

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));
