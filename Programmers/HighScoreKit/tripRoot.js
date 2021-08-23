function solution(tickets) {
    let answer = [];
    let n = tickets.length;

    //항공권 사용 여부 체크용 배열
    let ch = Array.from({
        length: n
    }, () => 0)

    //티켓 정렬
    tickets.sort();

    function DFS(departure, cnt, root) {
        //티켓을 모두 사용했고, 첫 번째 경로일 경우(이미 정렬한 상태에서 탐색했기 때문에)
        if (cnt === tickets.length && answer.length === 0) {
            //answer에 root를 복사한다(여기서 주의해야함, 그냥 할당하면 안됨)
            answer = root.slice(0, tickets.length + 1);
            return;
        } else {
            for (let i = 0; i < tickets.length; i++) {
                //사용하지 않은 항공권일 경우
                if (ch[i] === 0) {
                    if (tickets[i][0] === departure) {
                        ch[i] = 1;
                        root.push(tickets[i][1]);
                        DFS(tickets[i][1], cnt + 1, root);
                        ch[i] = 0;
                        root.pop();
                    }
                }
            }
        }

    }

    DFS("ICN", 0, ["ICN"]);

    return answer;
}


//test case1
// let tickets = [
//     ["ICN", "JFK"],
//     ["HND", "IAD"],
//     ["JFK", "HND"]
// ];


//test case2
let tickets = [
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"]

];


console.log(solution(tickets));