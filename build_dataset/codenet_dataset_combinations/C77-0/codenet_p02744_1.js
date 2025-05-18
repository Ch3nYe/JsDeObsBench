// inputに入力データ全体が入る
function Main(input) {
    var N = input[0]-0;
    var list = ["a","b","c","d","e","f","g","h","i","j", "k"];
    var ans = {0:[], 1:["a"]};
    for(var i=2;i<=N;i++){
        ans[i] = [];
        var preAns = ans[i-1];
        var nowAns = ans[i];
        preAns.forEach(preans=>{
            var max = "a";
            preans.split("").forEach(v=>{
                max = max<v?v:max;
            });
            var endflg = false;
            for(var i=0;i<list.length-1;i++){
                nowAns.push(preans + list[i]);
                
                if(endflg) break;
                if(max == list[i])endflg=true;
            }
        });
        
    }
    console.log(ans[N].join("\n"));
}



Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));

