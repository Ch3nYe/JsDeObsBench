function a0_0x3624() {
    var _0x265385 = [
        'shift',
        '162zNwPNi',
        '2308LlUDvn',
        '39170lSOXUH',
        '48zRwrKL',
        'floor',
        'utf8',
        '9cEsKhV',
        '649euRNGu',
        '567161WPpxLB',
        '13phtOXR',
        'map',
        'readFileSync',
        'push',
        '2261292jHlxBa',
        'trim',
        '3579636bDrlMY',
        '5085JqfGFw',
        'log',
        '4537376juVsEm',
        '/dev/stdin',
        '11443PKhrMT',
        'apply'
    ];
    a0_0x3624 = function () {
        return _0x265385;
    };
    return a0_0x3624();
}
var a0_0x56f303 = a0_0x4eed;
(function (stringArrayFunction, comparisonValue) {
    var _0x444bce = a0_0x4eed;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x444bce(0x81)) / 0x1 * (parseInt(_0x444bce(0x84)) / 0x2) + parseInt(_0x444bce(0x7a)) / 0x3 + parseInt(_0x444bce(0x85)) / 0x4 * (parseInt(_0x444bce(0x7d)) / 0x5) + -parseInt(_0x444bce(0x87)) / 0x6 * (parseInt(_0x444bce(0x8c)) / 0x7) + -parseInt(_0x444bce(0x7f)) / 0x8 * (-parseInt(_0x444bce(0x8a)) / 0x9) + -parseInt(_0x444bce(0x86)) / 0xa * (-parseInt(_0x444bce(0x8b)) / 0xb) + parseInt(_0x444bce(0x7c)) / 0xc * (parseInt(_0x444bce(0x8d)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3624, 0xd2784));
function F1(m, b, c) {
    var _0x18964e = a0_0x4eed;
    var sum = 0x0;
    for (var i = 0x0; i < Y; i++) {
        sum += Math[_0x18964e(0x88)](m * b);
        m -= c;
    }
    return m + sum;
}
function F2(m, b, c) {
    for (var i = 0x0; i < Y; i++) {
        m += Math['floor'](m * b) - c;
    }
    return m;
}
var input = require('fs')[a0_0x56f303(0x8f)](a0_0x56f303(0x80), a0_0x56f303(0x89));
var Arr = input[a0_0x56f303(0x7b)]()['split']('\x0a');
function a0_0x4eed(vvuhia, key) {
    var stringArray = a0_0x3624();
    a0_0x4eed = function (index, key) {
        index = index - 0x7a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4eed(vvuhia, key);
}
var M = Arr['shift']() - 0x0;
for (var i = 0x0; i < M; i++) {
    var money = Arr[a0_0x56f303(0x83)]() - 0x0;
    var Y = Arr[a0_0x56f303(0x83)]() - 0x0;
    var N = Arr[a0_0x56f303(0x83)]() - 0x0;
    var arr = [];
    for (var j = 0x0; j < N; j++) {
        var D = Arr['shift']()['split']('\x20')[a0_0x56f303(0x8e)](Number);
        if (D[0x0] == 0x0)
            arr[a0_0x56f303(0x90)](F1(money, D[0x1], D[0x2]));
        if (D[0x0] == 0x1)
            arr['push'](F2(money, D[0x1], D[0x2]));
    }
    console[a0_0x56f303(0x7e)](Math['max'][a0_0x56f303(0x82)](null, arr));
}