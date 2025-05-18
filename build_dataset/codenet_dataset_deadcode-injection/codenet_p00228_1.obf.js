var a0_0x488390 = a0_0x2c9e;
var input = require('fs')[a0_0x488390(0x0)](a0_0x488390(0x1), a0_0x488390(0x2));
var Arr = input['trim']()['split']('\x0a')[a0_0x488390(0x3)](Number);
function a0_0x2c9e(OUGtAY, key) {
    var stringArray = a0_0x936a();
    a0_0x2c9e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c9e(OUGtAY, key);
}
var SEG = [
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x0,
        0x0
    ][a0_0x488390(0x4)](),
    [
        0x1,
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1
    ][a0_0x488390(0x4)](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ][a0_0x488390(0x4)](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x0
    ][a0_0x488390(0x4)](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ][a0_0x488390(0x4)](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ][a0_0x488390(0x4)]()
];
var n = Arr[0x0];
var seg = [];
for (var i = 0x1; i < Arr[a0_0x488390(0x5)]; i++) {
    if (n == 0x0) {
        if (i == 0x0)
            continue;
        var arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        seg[a0_0x488390(0x6)](function (v) {
            var _0x13df76 = a0_0x2c9e;
            var V = SEG[v];
            var str = '';
            for (var i = 0x0; i < 0x7; i++) {
                str += V[i] == arr[i] ? '0' : '1';
            }
            console[_0x13df76(0x7)](str);
            arr = V[_0x13df76(0x8)]();
        });
        if (Arr[i] == -0x1)
            break;
        seg = [];
        n = Arr[i];
    } else {
        n--;
        seg[a0_0x488390(0x9)](Arr[i]);
    }
}
function a0_0x936a() {
    var _0xb90246 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'map',
        'reverse',
        'length',
        'forEach',
        'log',
        'slice',
        'push'
    ];
    a0_0x936a = function () {
        return _0xb90246;
    };
    return a0_0x936a();
}