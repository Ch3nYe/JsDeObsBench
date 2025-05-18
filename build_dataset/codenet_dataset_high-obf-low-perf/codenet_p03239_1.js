var lines = []; var result = Infinity;
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0]);
    var T = Number(lines[0].split(" ")[1]);

    lines.shift();

    var array = lines.map(value => value.split(" ").map(value => Number(value)));

    for (var i of array) {
        if (i[1] <= T) { result = Math.min(result, i[0]); }
    }
    result !== Infinity ? console.log(result): console.log("TLE");
});