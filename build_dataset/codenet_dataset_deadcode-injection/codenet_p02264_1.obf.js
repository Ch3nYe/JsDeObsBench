function a0_0x2c44(UtnEkt, key) {
    var stringArray = a0_0x21b3();
    a0_0x2c44 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c44(UtnEkt, key);
}
var a0_0x7b2bc0 = a0_0x2c44;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x7b2bc0(0x0));
var Arr = input[a0_0x7b2bc0(0x1)]()['split']('\x0a');
function a0_0x21b3() {
    var _0x3189d1 = [
        'utf8',
        'trim',
        'split',
        'shift',
        'length',
        'log',
        'push'
    ];
    a0_0x21b3 = function () {
        return _0x3189d1;
    };
    return a0_0x21b3();
}
var t = Arr[0x0][a0_0x7b2bc0(0x2)]('\x20')[0x1] - 0x0;
Arr[a0_0x7b2bc0(0x3)]();
var T = 0x0;
while (Arr[a0_0x7b2bc0(0x4)] != 0x0) {
    var arr = Arr[0x0][a0_0x7b2bc0(0x2)]('\x20');
    Arr[a0_0x7b2bc0(0x3)]();
    var a = arr[0x0];
    var b = arr[0x1] - 0x0;
    if (b - t <= 0x0) {
        console[a0_0x7b2bc0(0x5)](a + '\x20' + (T + b));
        T += b;
    } else {
        Arr[a0_0x7b2bc0(0x6)](a + '\x20' + (b - t));
        T += t;
    }
}