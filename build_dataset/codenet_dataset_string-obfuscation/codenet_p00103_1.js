var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

var inning = +lines.shift();

var out = 0;
var score = 0;
var runner = 0;

var line;
while (line = lines.shift()) {
    if (line == 'HIT') {
        runner++;
        if (runner > 3) {
            score++;
            runner--;
        }
    } else if (line == 'HOMERUN') {
        score += runner + 1;
        runner = 0;
    } else {
        out++;
        if (out == 3) {
            console.log(score);
            out = 0;
            score = 0;
            runner = 0;
            continue;
        }
    }
}