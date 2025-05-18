var a0_0xe7fae1 = a0_0x3c81;
function a0_0x1535() {
    var _0x418045 = [
        '2149995iEgjLZ',
        'length',
        'utf8',
        '1022249mzNGKH',
        'log',
        '180jxvZXJ',
        '/dev/stdin',
        '1864751vmpKYh',
        '6906365UUPEWZ',
        '4TXdBvi',
        'trim',
        'sort',
        '85327CJhkFo',
        'split',
        '1666845dYXTTo',
        '8dejSqe',
        'forEach',
        '5377980ecORtz',
        '2qkkiQc',
        'readFileSync'
    ];
    a0_0x1535 = function () {
        return _0x418045;
    };
    return a0_0x1535();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x44a7d0 = a0_0x3c81;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x44a7d0(0xf9)) / 0x1 * (-parseInt(_0x44a7d0(0x108)) / 0x2) + -parseInt(_0x44a7d0(0x10a)) / 0x3 + parseInt(_0x44a7d0(0xff)) / 0x4 * (parseInt(_0x44a7d0(0xfe)) / 0x5) + -parseInt(_0x44a7d0(0x107)) / 0x6 + -parseInt(_0x44a7d0(0xfd)) / 0x7 + parseInt(_0x44a7d0(0x105)) / 0x8 * (parseInt(_0x44a7d0(0x104)) / 0x9) + parseInt(_0x44a7d0(0xfb)) / 0xa * (parseInt(_0x44a7d0(0x102)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1535, 0xcf445));
var input = require('fs')[a0_0xe7fae1(0x109)](a0_0xe7fae1(0xfc), a0_0xe7fae1(0xf8));
var Arr = input[a0_0xe7fae1(0x100)]()['split']('\x0a');
function a0_0x3c81(FlLqKd, key) {
    var stringArray = a0_0x1535();
    a0_0x3c81 = function (index, key) {
        index = index - 0xf8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c81(FlLqKd, key);
}
while (!![]) {
    if (Arr[a0_0xe7fae1(0x10b)] == 0x0)
        break;
    var n = Arr['shift']();
    var arr = Arr['shift']()[a0_0xe7fae1(0x103)]('\x20')['map'](Number);
    arr[a0_0xe7fae1(0x101)](function (a, b) {
        return a - b;
    });
    var sum = 0x0;
    var time = 0x0;
    arr[a0_0xe7fae1(0x106)](function (v) {
        sum += v + time;
        time += v;
    });
    console[a0_0xe7fae1(0xfa)](sum);
}