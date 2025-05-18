function a0_0x3b1c(XzgwmZ, key) {
    var stringArray = a0_0x5056();
    a0_0x3b1c = function (index, key) {
        index = index - 0xef;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b1c(XzgwmZ, key);
}
var a0_0x26edf8 = a0_0x3b1c;
(function (stringArrayFunction, comparisonValue) {
    var _0x3dd51b = a0_0x3b1c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3dd51b(0xf7)) / 0x1 * (parseInt(_0x3dd51b(0xfd)) / 0x2) + parseInt(_0x3dd51b(0xef)) / 0x3 * (parseInt(_0x3dd51b(0xfc)) / 0x4) + parseInt(_0x3dd51b(0xf2)) / 0x5 * (parseInt(_0x3dd51b(0xf6)) / 0x6) + parseInt(_0x3dd51b(0x100)) / 0x7 * (-parseInt(_0x3dd51b(0xf9)) / 0x8) + -parseInt(_0x3dd51b(0xfa)) / 0x9 + -parseInt(_0x3dd51b(0xfe)) / 0xa + parseInt(_0x3dd51b(0xff)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5056, 0x52672));
var input = require('fs')[a0_0x26edf8(0xfb)]('/dev/stdin', a0_0x26edf8(0xf4));
function a0_0x5056() {
    var _0x16a053 = [
        '2fSFDmh',
        'log',
        '2072lzziOZ',
        '5459454laOXVw',
        'readFileSync',
        '60eRcsdC',
        '148992YBHlKW',
        '2176090yvGxrE',
        '11024871spkVZd',
        '7126xFuBtl',
        'map',
        'trim',
        '18195JsYjFv',
        'floor',
        'push',
        '25DYYBNw',
        'shift',
        'utf8',
        'split',
        '577386JMuwMv'
    ];
    a0_0x5056 = function () {
        return _0x16a053;
    };
    return a0_0x5056();
}
var Arr = input[a0_0x26edf8(0x102)]()[a0_0x26edf8(0xf5)]('\x0a');
while (!![]) {
    var nmp = Arr[a0_0x26edf8(0xf3)]()[a0_0x26edf8(0xf5)]('\x20')[a0_0x26edf8(0x101)](Number);
    if (nmp[0x0] == 0x0 && nmp[0x1] == 0x0 && nmp[0x2] == 0x0)
        break;
    var n = nmp[0x0];
    var m = nmp[0x1] - 0x1;
    var p = nmp[0x2];
    var arr = [];
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr[a0_0x26edf8(0xf3)]() - 0x0;
        arr[a0_0x26edf8(0xf1)](v);
        sum += v * 0x64;
    }
    sum = sum * (0x64 - p) / 0x64;
    var ans = 0x0;
    if (arr[m] != 0x0)
        ans = Math[a0_0x26edf8(0xf0)](sum / arr[m]);
    console[a0_0x26edf8(0xf8)](ans);
}