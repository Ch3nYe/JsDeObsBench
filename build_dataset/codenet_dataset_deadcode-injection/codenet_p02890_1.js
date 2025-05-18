function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
    var A = arg.split("\n")[1].split(" ").map(v=>v-0);
 
    var tmp = new Set(A);
    var ans = [];

    ans.push(N);

    for (var K = 2; K <= N; K++){
        if (tmp.size < K) {
            ans.push(0);
        }
        else {
            ans.push(Math.floor(tmp.size / K));
        }
    }

    console.log(ans.join("\n").toString());

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));