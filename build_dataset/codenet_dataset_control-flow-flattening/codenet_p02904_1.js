function Main(arg) {
 
    var N = arg.split("\n")[0].split(" ")[0]-0;
    var K = arg.split("\n")[0].split(" ")[1]-0;
    var P = arg.split("\n")[1].split(" ").map(v => v-0);

    var ans = [];
    for (var i = 0; i < N - K + 1; i++){
        var tmp = P.slice(i, i + K);
        tmp.sort(compareNumbers);
        ans[i] = P.slice(0, i).concat(tmp).concat(P.slice(i + K)).toString();
    }

    var aa = new Set(ans);

    console.log(aa.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function compareNumbers(a, b) { //for sort
    return a - b;
}
