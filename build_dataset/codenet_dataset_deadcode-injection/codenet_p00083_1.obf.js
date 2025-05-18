function a0_0x28ba(kqExBV, key) {
    var stringArray = a0_0x347d();
    a0_0x28ba = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28ba(kqExBV, key);
}
function a0_0x347d() {
    var _0x23a674 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'pre-meiji',
        'taisho',
        'showa',
        'heisei',
        'log'
    ];
    a0_0x347d = function () {
        return _0x23a674;
    };
    return a0_0x347d();
}
var a0_0x2822d4 = a0_0x28ba;
var input = require('fs')[a0_0x2822d4(0x0)]('/dev/stdin', a0_0x2822d4(0x1))[a0_0x2822d4(0x2)]();
var lines = input[a0_0x2822d4(0x3)]('\x0a');
var line;
while (line = lines[a0_0x2822d4(0x4)]()) {
    var arr = line[a0_0x2822d4(0x3)]('\x20')[a0_0x2822d4(0x5)](function (n) {
        return +n;
    });
    var year = arr[0x0];
    var month = arr[0x1];
    var day = arr[0x2];
    var era = '';
    var today = new Date(year, month - 0x1, day);
    if (today < new Date(0x74c, 0x8, 0x8)) {
        era = a0_0x2822d4(0x6);
    } else if (today < new Date(0x778, 0x6, 0x1e)) {
        era = 'meiji';
        year -= 0x74b;
    } else if (today < new Date(0x786, 0xb, 0x19)) {
        era = a0_0x2822d4(0x7);
        year -= 0x777;
    } else if (today < new Date(0x7c5, 0x0, 0x8)) {
        era = a0_0x2822d4(0x8);
        year -= 0x785;
    } else {
        era = a0_0x2822d4(0x9);
        year -= 0x7c4;
    }
    if (era == 'pre-meiji') {
        console[a0_0x2822d4(0xa)](a0_0x2822d4(0x6));
        continue;
    }
    console['log'](era, year, month, day);
}