function Main(inp) {
    var input = inp.split('\n')[0].split(' ').map(function(n) {
        return Number(n);
    });
    var start = Math.max(input[0], input[2]);
    var end = Math.min(input[1], input[3]);
    var overlap = Math.max(0, end - start);
    console.log(overlap);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));