//프로그래머스 위클리 챌린지 01주차 (21.08.21)

function solution(price, money, count) {

    let answer = 0;
    let need = 0;


    for (let i = 1; i <= count; i++) {
        need += price * i
    }

    if (money - need >= 0) {
        return 0
    } else {
        answer = need - money;
    }

    return answer;
}