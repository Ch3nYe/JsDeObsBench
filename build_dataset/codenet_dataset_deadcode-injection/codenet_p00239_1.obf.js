var a0_0x449116 = a0_0x49b5;
function a0_0x49b5(HteOcP, key) {
    var stringArray = a0_0x2348();
    a0_0x49b5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x49b5(HteOcP, key);
}
var input = require('fs')[a0_0x449116(0x0)](a0_0x449116(0x1), a0_0x449116(0x2));
var Arr = input[a0_0x449116(0x3)]()[a0_0x449116(0x4)]('\x0a');
function a0_0x2348() {
    var _0x5ccbe3 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'push',
        'map',
        'forEach',
        'log',
        'length',
        'join'
    ];
    a0_0x2348 = function () {
        return _0x5ccbe3;
    };
    return a0_0x2348();
}
while (!![]) {
    var N = Arr[a0_0x449116(0x5)]() - 0x0;
    if (N == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        var ipqr = Arr[a0_0x449116(0x5)]()[a0_0x449116(0x4)]('\x20')['map'](Number);
        arr[a0_0x449116(0x6)](ipqr);
    }
    var PQRC = Arr[a0_0x449116(0x5)]()[a0_0x449116(0x4)]('\x20')[a0_0x449116(0x7)](Number);
    var result = [];
    arr[a0_0x449116(0x8)](function (v) {
        var _0x432261 = a0_0x49b5;
        var bad = 0x0;
        if (PQRC[0x0] < v[0x1])
            bad++;
        if (PQRC[0x1] < v[0x2])
            bad++;
        if (PQRC[0x2] < v[0x3])
            bad++;
        if (PQRC[0x3] < 0x4 * (v[0x1] + v[0x3]) + 0x9 * v[0x2])
            bad++;
        if (bad == 0x0)
            result[_0x432261(0x6)](v[0x0]);
    });
    console[a0_0x449116(0x9)](result[a0_0x449116(0xa)] == 0x0 ? 'NA' : result[a0_0x449116(0xb)]('\x0a'));
}