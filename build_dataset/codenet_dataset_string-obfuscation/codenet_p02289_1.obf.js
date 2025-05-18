var a0_0x527b2c = a0_0x1901;
(function (stringArrayFunction, comparisonValue) {
    var _0x27a984 = a0_0x1901;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x27a984(0x107)) / 0x1 * (-parseInt(_0x27a984(0x109)) / 0x2) + parseInt(_0x27a984(0x105)) / 0x3 + parseInt(_0x27a984(0x10e)) / 0x4 * (-parseInt(_0x27a984(0x111)) / 0x5) + parseInt(_0x27a984(0x106)) / 0x6 + -parseInt(_0x27a984(0x114)) / 0x7 + -parseInt(_0x27a984(0x10c)) / 0x8 + -parseInt(_0x27a984(0x103)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2142, 0x4c5f4));
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
function a0_0x1901(OSigpG, key) {
    var stringArray = a0_0x2142();
    a0_0x1901 = function (index, key) {
        index = index - 0x102;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1901(OSigpG, key);
}
line = require('fs')[a0_0x527b2c(0x108)](config[a0_0x527b2c(0x113)], a0_0x527b2c(0x10a))[a0_0x527b2c(0x112)](config[a0_0x527b2c(0x102)]);
function a0_0x2142() {
    var _0x528805 = [
        '5pdTOEk',
        'split',
        'input',
        '1114715DrtsME',
        'newline',
        '1945161JNulJt',
        'push',
        '613161xMITSz',
        '3179460JPJAFA',
        '1JZOnkW',
        'readFileSync',
        '287834kaBMmP',
        'ascii',
        'extract',
        '458504fdUNLG',
        'log',
        '530828OzaAzD',
        'pop',
        'sort'
    ];
    a0_0x2142 = function () {
        return _0x528805;
    };
    return a0_0x2142();
}
S = [];
for (i in line) {
    ary = line[i]['split']('\x20');
    if (ary[0x0] === 'insert')
        S[a0_0x527b2c(0x104)](parseInt(ary[0x1], 0xa));
    else if (ary[0x0] === a0_0x527b2c(0x10b)) {
        S[a0_0x527b2c(0x110)](function (a, b) {
            return a - b;
        });
        console[a0_0x527b2c(0x10d)](S[a0_0x527b2c(0x10f)]());
    }
}