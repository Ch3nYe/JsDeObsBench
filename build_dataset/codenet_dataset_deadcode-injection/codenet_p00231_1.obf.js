var a0_0x215468 = a0_0x5851;
var input = require('fs')[a0_0x215468(0x0)](a0_0x215468(0x1), 'utf8');
var Arr = input[a0_0x215468(0x2)]()['split']('\x0a');
while (!![]) {
    var N = Arr[a0_0x215468(0x3)]() - 0x0;
    if (N == 0x0)
        break;
    var plus = {};
    var minus = {};
    var pm = [];
    for (var i = 0x0; i < N; i++) {
        var arr = Arr['shift']()[a0_0x215468(0x4)]('\x20')[a0_0x215468(0x5)](Number);
        var m = arr[0x0];
        var a = arr[0x1];
        var b = arr[0x2] - 0.001 * N;
        plus[a] = m;
        minus[b] = m;
        pm[a0_0x215468(0x6)](a);
        pm[a0_0x215468(0x6)](b);
    }
    pm[a0_0x215468(0x7)](function (a, b) {
        return a - b;
    });
    var flag = 'OK';
    var sum = 0x0;
    for (var i = 0x0; i < pm[a0_0x215468(0x8)]; i++) {
        var v = pm[i];
        if (plus['hasOwnProperty'](v))
            sum += plus[v];
        if (minus['hasOwnProperty'](v))
            sum -= minus[v];
        if (sum > 0x96) {
            flag = 'NG';
            break;
        }
    }
    console[a0_0x215468(0x9)](flag);
}
function a0_0x5851(OgxZYi, key) {
    var stringArray = a0_0x2749();
    a0_0x5851 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5851(OgxZYi, key);
}
function a0_0x2749() {
    var _0x368b7e = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'map',
        'push',
        'sort',
        'length',
        'log'
    ];
    a0_0x2749 = function () {
        return _0x368b7e;
    };
    return a0_0x2749();
}