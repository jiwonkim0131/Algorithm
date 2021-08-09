//프로그래머스 위클리 챌린지 02주차 (21.08.09)

function getGrade(tot) {
    if (tot >= 90) {
        return "A";
    } else if (tot >= 80 && tot < 90) {
        return "B";
    } else if (tot >= 70 && tot < 80) {
        return "C";
    } else if (tot >= 50 && tot < 70) {
        return "D";
    } else {
        return "F";
    }
}

function solution(scores) {
    var answer = "";
    let n = scores.length;
    let sh = new Map();
    let myScore = 0;
    let sum = 0;
    let cnt = 0;
    let tmp = [];

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            sh.set(scores[j][i], sh.get(scores[j][i]) + 1 || 1);
            if (j === i) myScore = scores[j][i]; //자신이 평가한 점수 저장
        } //학생 1명에 대한 모든 점수 저장 완료


        tmp = [...sh]; //map -> 객체 변경
        tmp.sort((a, b) => (a[0] - b[0]))

        if (tmp[0][0] === myScore && tmp[0][1] === 1) { //최소 점수가 자신이 평가한 점수랑 같고, 1개라면
            tmp.splice(0, 1);
        } else if (
            tmp[tmp.length - 1][0] === myScore && //최고 점수가 자신이 평가한 점수랑 같고, 1개라면
            tmp[tmp.length - 1][1] === 1
        ) {
            tmp.splice(tmp.length - 1, 1);
        }

        for (let i = 0; i < tmp.length; i++) {
            for (let j = 0; j < tmp[i][1]; j++) {
                sum += tmp[i][0]; //점수 누적합
                cnt++;
            }
        }

        sum = parseInt(sum / cnt);
        answer += getGrade(sum);
        sh.clear(); //map 초기화
        myScore = 0;
        sum = 0;
        cnt = 0;
        tmp = [];

    } //end of while

    return answer;
}


//test case  
console.log(
    solution2([
        [100, 90, 98, 88, 65],
        [50, 45, 99, 85, 77],
        [47, 88, 95, 80, 67],
        [61, 57, 100, 80, 65],
        [24, 90, 94, 75, 65]
    ])
); //FBABD

console.log(solution([
    [
        [50, 90],
        [50, 87]
    ]
])) //DA

console.log(solution([
    [70, 49, 90],
    [68, 50, 38],
    [73, 31, 100]
])) //CFD