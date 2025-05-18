var a0_0x2bc44c = a0_0x3978;
function a0_0x355f() {
    var _0x423120 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'length'
    ];
    a0_0x355f = function () {
        return _0x423120;
    };
    return a0_0x355f();
}
var input = require('fs')[a0_0x2bc44c(0x0)](a0_0x2bc44c(0x1), a0_0x2bc44c(0x2));
var Arr = input[a0_0x2bc44c(0x3)]()['split']('\x0a');
function a0_0x3978(eNoNvE, key) {
    var stringArray = a0_0x355f();
    a0_0x3978 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3978(eNoNvE, key);
}
for (var i = 0x0; i < Arr[a0_0x2bc44c(0x4)]; i++) {
    var n = Arr[i] - 0x0 + 0x1;
    var x = 0x1 / 0x2 * n * (n - 0x1);
    console['log'](x + 0x1);
}