var a0_0x5f2624 = a0_0x8efd;
(function (stringArrayFunction, comparisonValue) {
    var _0x5f2d8d = a0_0x8efd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5f2d8d(0x101)) / 0x1 + parseInt(_0x5f2d8d(0x102)) / 0x2 * (-parseInt(_0x5f2d8d(0xf7)) / 0x3) + -parseInt(_0x5f2d8d(0xf2)) / 0x4 + -parseInt(_0x5f2d8d(0x100)) / 0x5 * (-parseInt(_0x5f2d8d(0xf8)) / 0x6) + -parseInt(_0x5f2d8d(0xfb)) / 0x7 + -parseInt(_0x5f2d8d(0xfa)) / 0x8 + parseInt(_0x5f2d8d(0xfd)) / 0x9 * (parseInt(_0x5f2d8d(0xf9)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2a9d, 0x735cc));
var input = require('fs')[a0_0x5f2624(0xf5)](a0_0x5f2624(0xff), a0_0x5f2624(0xf4));
var arr = input['trim']()[a0_0x5f2624(0xfc)]('\x0a')[a0_0x5f2624(0xf3)](Number);
var n = arr['shift']();
var a = arr['shift']();
var cnt = 0x1;
var max = 0x1;
var memo = 0x0;
arr[a0_0x5f2624(0xfe)](v => {
    if (a > v) {
        if (memo == 0x1)
            cnt = 0x2;
        else
            cnt++;
        memo = -0x1;
    } else if (a < v) {
        if (memo == -0x1)
            cnt = 0x2;
        else
            cnt++;
        memo = 0x1;
    }
    max = Math['max'](max, cnt);
    a = v;
});
function a0_0x8efd(mHOjZE, key) {
    var stringArray = a0_0x2a9d();
    a0_0x8efd = function (index, key) {
        index = index - 0xf2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8efd(mHOjZE, key);
}
function a0_0x2a9d() {
    var _0x85fae1 = [
        '4710ukIklJ',
        '10BXGDWg',
        '4941184OVAqyR',
        '4092305OETGmH',
        'split',
        '29790513CMxcuo',
        'forEach',
        '/dev/stdin',
        '730ojLiUU',
        '803052zcjgxP',
        '235078TEnjGo',
        '1906688nGzrlH',
        'map',
        'utf8',
        'readFileSync',
        'log',
        '12Sldqrh'
    ];
    a0_0x2a9d = function () {
        return _0x85fae1;
    };
    return a0_0x2a9d();
}
console[a0_0x5f2624(0xf6)](max);