function a0_0xe660() {
    var _0x431f54 = [
        '1981kGQHsV',
        'split',
        '132355imiYLd',
        '5453808JwLRLD',
        '7266hEsIlG',
        'readFileSync',
        '280725lFvXSy',
        '/dev/stdin',
        'utf8',
        '172194lOayrY',
        '869445miyqTn',
        'trim',
        'log',
        '422532dCbKRm'
    ];
    a0_0xe660 = function () {
        return _0x431f54;
    };
    return a0_0xe660();
}
function a0_0x6104(WIbNXT, key) {
    var stringArray = a0_0xe660();
    a0_0x6104 = function (index, key) {
        index = index - 0xff;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6104(WIbNXT, key);
}
var a0_0x5f4f5c = a0_0x6104;
(function (stringArrayFunction, comparisonValue) {
    var _0x5d1d6d = a0_0x6104;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5d1d6d(0x10a)) / 0x1 + -parseInt(_0x5d1d6d(0xff)) / 0x2 + -parseInt(_0x5d1d6d(0x100)) / 0x3 + -parseInt(_0x5d1d6d(0x103)) / 0x4 + parseInt(_0x5d1d6d(0x106)) / 0x5 + parseInt(_0x5d1d6d(0x108)) / 0x6 * (parseInt(_0x5d1d6d(0x104)) / 0x7) + parseInt(_0x5d1d6d(0x107)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xe660, 0x46780));
var input = require('fs')[a0_0x5f4f5c(0x109)](a0_0x5f4f5c(0x10b), a0_0x5f4f5c(0x10c));
var [a, b] = input[a0_0x5f4f5c(0x101)]()[a0_0x5f4f5c(0x105)]('\x20')['map'](Number);
console[a0_0x5f4f5c(0x102)](Math['ceil'](b / a));