var lines = []; var result = 0;
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
    var a = lines[1].split(" ").map(value => Number(value));

    for (var i = 0; i < N; i++) {
        if (i < a[i]) {
            if (a[a[i] - 1] === i + 1) { result++; }
        }
    }
    console.log(result);
});