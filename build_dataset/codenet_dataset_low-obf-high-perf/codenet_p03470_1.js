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
    var N = Number(lines[0]); lines.shift();
    var D = lines.map(i => Number(i));

    D = D.filter((value, index, array) => {
        return (array.indexOf(value) === index)
    })

    console.log(D.length)

});