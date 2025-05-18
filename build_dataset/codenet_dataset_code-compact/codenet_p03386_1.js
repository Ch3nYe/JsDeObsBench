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
    var A = Number(lines[0].split(" ")[0])
    var B = Number(lines[0].split(" ")[1])
    var K = Number(lines[0].split(" ")[2])

    var ans = "";
    for (var i = A; i <= B; i++) {
        if (i < A + K) { ans += i.toString() }
        else if (i > B - K) { ans += i.toString() }
    }
    for (var i = 0; i < ans.length; i++) {
        console.log(ans[i])
    }
});