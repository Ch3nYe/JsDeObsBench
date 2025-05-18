var a0_0x52ece5 = a0_0x3914;
function a0_0x3914(NUKIfb, key) {
    var stringArray = a0_0x3d63();
    a0_0x3914 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3914(NUKIfb, key);
}
function bomb(a, b, i) {
    var _0xff4039 = a0_0x3914;
    if (i == n) {
        min = Math[_0xff4039(0x0)](min, Math[_0xff4039(0x1)](a - b));
        return;
    }
    bomb(a + arr[i], b, i + 0x1);
    bomb(a, b + arr[i], i + 0x1);
}
var input = require('fs')['readFileSync'](a0_0x52ece5(0x2), 'utf8');
var Arr = input['trim']()['split']('\x0a');
function a0_0x3d63() {
    var _0x4fa841 = [
        'min',
        'abs',
        '/dev/stdin',
        'shift',
        'split',
        'map',
        'log'
    ];
    a0_0x3d63 = function () {
        return _0x4fa841;
    };
    return a0_0x3d63();
}
while (!![]) {
    var n = Arr[a0_0x52ece5(0x3)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()[a0_0x52ece5(0x4)]('\x20')[a0_0x52ece5(0x5)](Number);
    var min = Infinity;
    bomb(0x0, 0x0, 0x0);
    console[a0_0x52ece5(0x6)](min);
}