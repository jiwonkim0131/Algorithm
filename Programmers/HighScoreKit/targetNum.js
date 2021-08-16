// 210816 프로그래머스 코딩테스트 고득점키트 타켓넘버(DFS/BFS)
function solution(numbers, target) {
    let answer = 0;
    
    function DFS(L, sum) {  
        if (L === numbers.length) {  //level이 numbers의 갯수와 같아지면, 숫자를 모두 사용한것
            if (sum === target) {   // 그 때의 총합을 확인하여, target number와 같으면
                answer += 1;        //정답으로 카운트 한다.
            }
        } else {  //아직 사용할 숫자가 남아있다면
            DFS(L + 1, sum + numbers[L])   //다음 숫자를 더하거나
            DFS(L + 1, sum - numbers[L])   //다음 숫자를 빼거나 하면서 반복한다

        }
    }

    DFS(0, 0) // 0레벨, 총합 0에서 시작한다.
    return answer;
}

//test case
// let numbers = [1, 1, 1, 1, 1];
// let target = 3;
// console.log(solution(numbers, target));