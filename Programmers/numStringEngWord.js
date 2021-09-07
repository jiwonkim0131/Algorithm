//프로그래머스 - 숫자 문자열과 영단어

function solution(s) {
  var answer = '';
  let words = new Map();

  words.set('ze', 0);
  words.set('on', 1);
  words.set('tw', 2);
  words.set('th', 3);
  words.set('fo', 4);
  words.set('fi', 5);
  words.set('si', 6);
  words.set('se', 7);
  words.set('ei', 8);
  words.set('ni', 9);

  for (let i = 0; i < s.length; i++) {
    //숫자가 아니면
    if (isNaN(s[i])) {
      let temp = s.slice(i, i + 2);
      let change = words.get(temp);
      answer += change;
      console.log(answer);
      if (change === 1 || change === 2 || change === 6) {
        i += 2;
      } else if (change === 0 || change === 4 || change === 5 || change === 9) {
        i += 3;
      } else if (change === 3 || change === 7 || change === 8) {
        i += 4;
      }
    } else {
      answer += s[i]; //숫자면 그냥 더함
    }
  }

  return answer - '';
}
