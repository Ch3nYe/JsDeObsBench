// inputに入力データ全体が入る
function Main(input) {
    var N = input[0].split(" ")[0]-0;
    var M = input[0].split(" ")[1]-0;
    var list = {};
    for(var i=1;i<=M;i++){
        var a = input[i].split(" ")[0]-0;
        var b = input[i].split(" ")[1]-0;
        list[a] = list[a]||{};
        list[b] = list[b]||{};
        list[a][b] = i;
        list[b][a] = i;
    }
    
    var ans = 0;
    for(var i=1;i<=M;i++){
        if(check(list, i)!=N)ans++;
    }
    
    console.log(ans);
}


function check(list, i){
    var stack = [1];
    var checked = {};
    while(stack.length>0){
        var now = stack.splice(0,1)[0];
        if(checked[now]) continue;
        checked[now] = true;
        var next = Object.keys(list[now]);
        next.forEach(nxt=>{
            if(list[now][nxt]!=i){
                stack.push(nxt);
            }
        });
    }
    return Object.keys(checked).length;
}


Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));

