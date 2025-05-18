function a0_0x1b4d(AkobHu, key) {
    var stringArray = a0_0x2e80();
    a0_0x1b4d = function (index, key) {
        index = index - 0x68;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b4d(AkobHu, key);
}
var a0_0xca0e17 = a0_0x1b4d;
(function (stringArrayFunction, comparisonValue) {
    var _0x26bd08 = a0_0x1b4d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x26bd08(0x6b)) / 0x1 * (parseInt(_0x26bd08(0x71)) / 0x2) + -parseInt(_0x26bd08(0x72)) / 0x3 * (parseInt(_0x26bd08(0x79)) / 0x4) + -parseInt(_0x26bd08(0x69)) / 0x5 + parseInt(_0x26bd08(0x74)) / 0x6 + -parseInt(_0x26bd08(0x73)) / 0x7 * (-parseInt(_0x26bd08(0x75)) / 0x8) + parseInt(_0x26bd08(0x70)) / 0x9 * (-parseInt(_0x26bd08(0x77)) / 0xa) + parseInt(_0x26bd08(0x76)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2e80, 0xcdf64));
var input = require('fs')[a0_0xca0e17(0x6a)](a0_0xca0e17(0x6f), a0_0xca0e17(0x6e));
var [h, a, b] = input[a0_0xca0e17(0x6c)]()[a0_0xca0e17(0x6d)]('\x20')[a0_0xca0e17(0x78)](Number);
function a0_0x2e80() {
    var _0x1738b0 = [
        '129MvSBUT',
        '7AyeKIJ',
        '1223034TPHmmR',
        '12339256nFGpZt',
        '45169916QZfUek',
        '8606970mRYJxG',
        'map',
        '130148zreYSh',
        'log',
        '7876365nQPgfF',
        'readFileSync',
        '1173921ZOweGu',
        'trim',
        'split',
        'utf8',
        '/dev/stdin',
        '9VgaCkg',
        '2ZHiSzc'
    ];
    a0_0x2e80 = function () {
        return _0x1738b0;
    };
    return a0_0x2e80();
}
var cnt = 0x0;
for (var i = a; i <= b; i++) {
    if (h % i == 0x0)
        cnt++;
}
console[a0_0xca0e17(0x68)](cnt);