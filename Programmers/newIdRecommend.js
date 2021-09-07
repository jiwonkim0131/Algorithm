//프로그래머스 - 신규 아이디 추천
function solution(new_id) {
    var answer = '';
    var regExp = /[~!@#$%^&*()=+[{]}:?,<>\/]/gi;


    //1단계 : 소문자 변환
    new_id = new_id.toLowerCase();


    //2단계 : 특수문자 제거
    new_id = new_id.replace(regExp, "");

    //3단계 : 마침표 두개 이상이면 하나로 치환
    new_id = new_id.replace(/../g, '.');

    //4단계 : 처음과 끝에 마침표가 있다면 제거
    if (new_id[0] === '.') {
        new_id = new_id.substr(1, new_id.length)
    } else if (new_id[new_id.length - 1] === '.') {
        new_id = new_id.substr(new_id.length - 1, new_id.length)
    }


    //5단계 : new_id가 빈문자열이라면 id에 a 대입
    //6단계
    if (new_id.length === 0) {
        new_id += 'a';
    } else if (new_id.length >= 16) {
        new_id = new_id.substr(0, 16);
    }


    //7단계
    while (new_id.length = < 3) {
        new_id += new_id[new_id.length - 1]
    }

    return answer;
}