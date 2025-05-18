var a0_0x125517 = a0_0x64f6;
(function (stringArrayFunction, comparisonValue) {
    var _0x351b25 = a0_0x64f6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x351b25(0xb3)) / 0x1 + -parseInt(_0x351b25(0xb5)) / 0x2 * (-parseInt(_0x351b25(0xb0)) / 0x3) + -parseInt(_0x351b25(0xba)) / 0x4 + -parseInt(_0x351b25(0xb4)) / 0x5 + -parseInt(_0x351b25(0xb6)) / 0x6 * (-parseInt(_0x351b25(0xae)) / 0x7) + -parseInt(_0x351b25(0xbb)) / 0x8 + -parseInt(_0x351b25(0xb1)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x568a, 0xa7442));
function a0_0x64f6(fQynLj, key) {
    var stringArray = a0_0x568a();
    a0_0x64f6 = function (index, key) {
        index = index - 0xae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x64f6(fQynLj, key);
}
var input = require('fs')[a0_0x125517(0xbf)](a0_0x125517(0xaf), a0_0x125517(0xbe));
var arr = input[a0_0x125517(0xc0)]()[a0_0x125517(0xc1)]('\x0a');
function a0_0x568a() {
    var _0x4fa0fc = [
        'readFileSync',
        'trim',
        'split',
        '238tILqxG',
        '/dev/stdin',
        '375GuFfvG',
        '7919847QWMWzL',
        'log',
        '890167xomebT',
        '2067375QDNzzj',
        '14660KEszqA',
        '206556edlBzB',
        'shift',
        'join',
        'length',
        '94880xHAAVK',
        '7796808aXOYom',
        'map',
        'push',
        'utf8'
    ];
    a0_0x568a = function () {
        return _0x4fa0fc;
    };
    return a0_0x568a();
}
var n = arr[a0_0x125517(0xb7)]() - 0x0;
var a = arr[a0_0x125517(0xb7)]()[a0_0x125517(0xc1)]('\x20')[a0_0x125517(0xbc)](Number);
var b = [];
var memo = '';
for (var i = 0x0; i < a[a0_0x125517(0xb9)]; i++) {
    if (a[i] !== memo)
        b[a0_0x125517(0xbd)](a[i]);
    memo = a[i];
}
console[a0_0x125517(0xb2)](b[a0_0x125517(0xb8)]('\x20'));