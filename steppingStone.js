//프로그래머스 징검다리 건너기 - 이분탐색
//징검다리는 1번 건너면 점점 가라 앉는 다고 생각한다.
//결국 주어진 stones에서 밟을 수 있는 최소/최대 수 사이에 정답이 있을 것
//lt,rt를 설정하고 범위를 좁혀가며 비교한다
//슬라이딩 윈도우로도 풀어보기

function solution(stones, k) {
    let answer = 0;

    // lt, rt
    let lt = 1;
    let rt = 200000000;    //rt는 입력 수의 최대로 설정한다 (주어진 stones의 최대값을 찾기 위해 Math.max()를 쓰는 순간 시간초과 발생)


    while (lt <= rt) {   //이분 탐색

        let cnt = 0;
        let mid = Math.floor((lt + rt) / 2);
        let tmp = 0;

        for (let i = 0; i < stones.length; i++) {
            if (stones[i] - mid <= 0) {  //mid를 뺀 값이 음수라면 -> 건널 수 없게 되는 돌
                cnt++;   //음수 구간 카운트
            } else {    
                cnt = 0;  //양수 구간 등장 시 초기화
            }

            if (cnt >= k) {  //여기서 가지치기 -> cnt가 이미 k보다 크거나 같다면 반복 정지 (lt변경 후 재탐색 해야함)
                break;
            }
        }

        if (cnt >= k) {      //cnt가 k보다 크거나 같다면,
            answer = mid;    //정답은 keep 해두고
            rt = mid - 1;   //rt 범위를 좁혀서 다시 탐색
        } else {
            lt = mid + 1;   //cnt가 k보다 작다면 lt 키워서 재탐색
        }
    }

    return answer;
}

//test case
let stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
console.log(solution(stones, 3));  //3