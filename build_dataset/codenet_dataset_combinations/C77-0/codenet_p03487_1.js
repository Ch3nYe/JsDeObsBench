var lines = [];
var result = 0;
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

    a.sort((a, b) => a - b);

    var counter = Array(N).fill(0);
    var j = 0;

    counter[0] = [a[0], 1];
    for (var i = 1; i < N; i++) {
        if (a[i] !== a[i - 1]) { j++; counter[j] = [a[i], 1] }
        else { var cnt = counter[j][1] + 1; counter[j] = [a[i], cnt]; }
    }

    for (var i = 0; i < counter.length; i++) {

        if (counter[i][0] === counter[i][1]) { continue; }
        else {
            if (counter[i] === 0) { continue; }
            else {
                result += Math.min(counter[i][1], Math.abs((counter[i][0] - counter[i][1])));
            }
        }
    }
    console.log(result);
});