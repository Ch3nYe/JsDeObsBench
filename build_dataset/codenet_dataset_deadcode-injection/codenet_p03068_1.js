var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]);
    var S = lines[1].split("");
    var K = Number(lines[2]);

    for (var i = 0; i < N; i++) {
        if (S[K - 1] !== S[i]) { S[i] = "*"; }
    }
    var result ="";
    for (var i = 0; i < N; i++) {
        result = result + S[i];
    }
    console.log(result);
});