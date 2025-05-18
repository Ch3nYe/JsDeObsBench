var a0_0x583d02 = a0_0x3e0d;
var input = require('fs')[a0_0x583d02(0x0)](a0_0x583d02(0x1), a0_0x583d02(0x2))[a0_0x583d02(0x3)]();
var lines = input[a0_0x583d02(0x4)]('\x0a');
function a0_0x3e0d(TjqDer, key) {
    var stringArray = a0_0x3652();
    a0_0x3e0d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e0d(TjqDer, key);
}
var inning = +lines['shift']();
function a0_0x3652() {
    var _0x7b9155 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'HIT',
        'HOMERUN'
    ];
    a0_0x3652 = function () {
        return _0x7b9155;
    };
    return a0_0x3652();
}
var out = 0x0;
var score = 0x0;
var runner = 0x0;
var line;
while (line = lines['shift']()) {
    if (line == a0_0x583d02(0x5)) {
        runner++;
        if (runner > 0x3) {
            score++;
            runner--;
        }
    } else if (line == a0_0x583d02(0x6)) {
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