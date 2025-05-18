var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var inning = +lines['shift']();
var out = 0x0;
var score = 0x0;
var runner = 0x0;
var line;
while (line = lines['shift']()) {
    if (line == 'HIT') {
        runner++;
        if (runner > 0x3) {
            score++;
            runner--;
        }
    } else if (line == 'HOMERUN') {
        score += runner + 0x1;
        runner = 0x0;
    } else {
        out++;
        if (out == 0x3) {
            console['log'](score);
            out = 0x0;
            score = 0x0;
            runner = 0x0;
            continue;
        }
    }
}