function a0_0x2046() {
    var _0x5ac568 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'map',
        'reduce'
    ];
    a0_0x2046 = function () {
        return _0x5ac568;
    };
    return a0_0x2046();
}
var a0_0x5c5d01 = a0_0x18c5;
var input = require('fs')[a0_0x5c5d01(0x0)](a0_0x5c5d01(0x1), a0_0x5c5d01(0x2));
var Arr = input['trim']()['split']('\x0a');
function a0_0x18c5(mklOGD, key) {
    var stringArray = a0_0x2046();
    a0_0x18c5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18c5(mklOGD, key);
}
while (!![]) {
    var K = Arr[a0_0x5c5d01(0x3)]() - 0x0;
    if (K == 0x0)
        break;
    var arr = Arr[a0_0x5c5d01(0x3)]()['split']('\x20')[a0_0x5c5d01(0x4)](Number);
    var sum = arr[a0_0x5c5d01(0x5)](function (a, b) {
        return a + b;
    });
    console['log'](sum / (K - 0x1));
}