//프로그래머스 - 소수 찾기

//순열 구하는 함수
function getPermutation(nums, m) { //배열, 구할 갯수
    let answer = [];
    let tmp = [];
    let n = nums.length;

    let ch = Array.from({
        length: n
    }, () => 0);

    function DFS(L) {
        if (L === m) {
            answer.push(tmp.slice())
        } else {
            for (let i = 0; i < n; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    tmp.push(nums[i]);
                    DFS(L + 1)
                    tmp.pop();
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer;
}

//소수인지 판별하는 함수
function isPrime(num){
    if(num<2){  //1은 소수 아님
        return false;
    }else{
        for(let i=2; i<=Math.sqrt(num); i++){  //2부터 제곱근까지 비교
            if(num%i===0){
                return false;
            }else{
                return true;
            }
        }
    }
}


function solution(numbers) {

    let num_list = [ ];
    let answer = new Set();

    //1. 숫자를 한자리 씩 분리한다.
    for(let i =0; i<numbers.length; i++){
        num_list.push(numbers.slice(i,1));
    }

    //2.분리한 숫자들로 만들 수 있는 숫자 조합을 찾는다.
    //3. 해당 숫자가 소수인지 판별한다.
    //4. 소수이면 정답 set에 넣는다(중복X 이므로 set 이용)

    for(let i = 1; i<num_list.length; i++){
        let tmp_nums = getPermutation(num_list, i);

        for(let i = 0; i<tmp_nums.length; i++){
            
            let num = tmp_nums[0].join('') - 0;  //숫자로 연결 후 변환

            if(isPrime(num)){
                answer.add(num);
            }

        }
    }

    return answer.size;
}