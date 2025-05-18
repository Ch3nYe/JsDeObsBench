var a0_0x5cc0e9 = a0_0xa1ca;
var input = require('fs')[a0_0x5cc0e9(0x0)](a0_0x5cc0e9(0x1), a0_0x5cc0e9(0x2));
var inputArray = input['split']('\x20');
var a = inputArray[0x0];
function a0_0x2d44() {
    var _0x5e4556 = [
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2d44 = function () {
        return _0x5e4556;
    };
    return a0_0x2d44();
}
var b = inputArray[0x1];
var c = inputArray[0x2];
function a0_0xa1ca(DFxdFT, key) {
    var stringArray = a0_0x2d44();
    a0_0xa1ca = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa1ca(DFxdFT, key);
}
var d = inputArray[0x3];
var result = a * b > c * d ? a * b : c * d;
console['log'](result);