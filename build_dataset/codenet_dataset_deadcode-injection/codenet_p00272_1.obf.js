var a0_0x473124 = a0_0x26af;
function a0_0x4201() {
    var _0x282e06 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x4201 = function () {
        return _0x282e06;
    };
    return a0_0x4201();
}
var input = require('fs')[a0_0x473124(0x0)]('/dev/stdin', a0_0x473124(0x1));
function a0_0x26af(hHddTv, key) {
    var stringArray = a0_0x4201();
    a0_0x26af = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x26af(hHddTv, key);
}
var Arr = input[a0_0x473124(0x2)]()[a0_0x473124(0x3)]('\x0a');
for (var i = 0x0; i < 0x4; i++) {
    var arr = Arr[i][a0_0x473124(0x3)]('\x20')[a0_0x473124(0x4)](Number);
    if (arr[0x0] == 0x1)
        console[a0_0x473124(0x5)](arr[0x1] * 0x1770);
    if (arr[0x0] == 0x2)
        console['log'](arr[0x1] * 0xfa0);
    if (arr[0x0] == 0x3)
        console['log'](arr[0x1] * 0xbb8);
    if (arr[0x0] == 0x4)
        console[a0_0x473124(0x5)](arr[0x1] * 0x7d0);
}