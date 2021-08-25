//프로그래머스 고득점키트 단어 변환 (BFS)

//begin에서 target으로 변환하는 가장 짧은 과정을 찾는다.
//0. 만약 words에 target이 없으면 변환 불가, return 0
//1. 큐에 begin을 넣고 시작
//2. words에서 target과 한글자 차이나는 단어들을 고른다.
//3. 그 단어들을 다시 비교해서 한글자 차이나는 단어들을 찾는다.
//4. 한 단계가 지날 때 마다 depth 카운트 해준다.
//4. 만약 그 과정에서 target을 발견하면 return depth.

function comp(a, b) {
    let cnt = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            cnt++;
        }
        if (cnt > 1) return false;
    }
    return true;
}


function solution(begin, target, words) {

    let queue = [begin];
    let cnt = 0;
    let ch = Array.from({
        length: words.length
    }, () => 0);

    if (words.includes(target) === false) return 0;

    while (queue.length) {
        let num = queue.shift();
        for (let i = 0; i < words.length; i++) {
            if (ch[i] === 0 && comp(num, words[i]) === true) {
                ch[i] = 1;
                queue.push(words[i])
            }
        }
        cnt++;
        if (queue.includes(target)) return cnt;

    }

}


//test case
let begin = "hit"
let target = "cog"
let words = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(solution(begin, target, words)); //4