// 프로그래머스 - 게임 맵 최단거리

//BFS
//1. 거리 갱신용 배열 생성 -> 1로 초기화하거나 마지막에 정답에 +1해줘야 함
//2. 이동가능 좌표를 저장할 큐 생성
//3. 캐릭터 이동용 dx, dy 배열 생성 (위 왼 아래 오른쪽 순)
//4. 만약 마지막 지점의 거리값이 1이면 도달할 수 없는 경우이므로 -1 return.

function solution(maps) {

    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    //시작 좌표는 항상 (0,0)
    let queue = [
        [0, 0]
    ];
    let n = maps.length;
    let m = maps[0].length;
    let dist = Array.from(Array(n), () => Array(m).fill(0)); //nxm 크기의 거리 체크용 배열 생성


    while (queue.length) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (maps[nx][ny] === 1 && dist[nx][ny] === 0) {
                    dist[nx][ny] = dist[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }

    }

    //전부 탐색 후 도착 좌표의 값 확인
    if (dist[n - 1][m - 1] === 0) {
        return -1;
    } else {
        return dist[n - 1][m - 1] + 1;
    }
}

//test case  11
console.log(solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
]))

//test case -1
console.log(solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
]))