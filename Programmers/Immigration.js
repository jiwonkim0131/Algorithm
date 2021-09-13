//프로그래머스 입국심사 - 이진탐색

function solution(n, times) { 
    var answer = Number.MAX_SAFE_INTEGER;
    times.sort((a,b) => a-b);  //시간 오름차순 정렬
    
    let left = 1;
    let right = times[times.length-1]*n;  //최대 걸릴 수 있는 시간
    let mid = 0;
    
    while(left<=right){
        let count = 0;
        let mid = Math.floor((left+right)/2);  //중앙값

        for(let i=0; i<times.length; i++){
            count += parseInt(mid/times[i]); //각 심사대 별로 심사할 수 있는 수
        }
        
        
        if(count<n){
            left = mid+1;
        }else if(count>=n){

            answer = Math.min(mid, answer);
            right = mid-1;
        }
    }
        
    return answer;
}

//test case 
console.log(solution(7,[7,10])); //28