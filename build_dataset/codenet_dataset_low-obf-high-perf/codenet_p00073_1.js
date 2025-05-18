var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

while (true) {
    var x = +lines.shift();
    var h = +lines.shift();
    if (x + h == 0)
        break;

    console.log(((x * x) + (x * Math.sqrt(4 * h * h + x * x))).toFixed(6));
}