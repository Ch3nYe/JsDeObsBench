var readline = require('readline');
var lines = []; var result = 0;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0]);
    var M = Number(lines[0].split(" ")[1]);
    var X = lines[1].split(" ").map(value => Number(value));

    X.sort((a, b) => a - b);

    var sum = Array(M).fill(0);
    for (var i = 1; i < M; i++) { sum[i] = X[i] - X[i - 1]; }

    sum.sort((a, b) => b - a);

    for (var i = N - 1; i < M; i++) { result += sum[i] }
    
    console.log(result);
});
