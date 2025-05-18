function a0_0x25c7() {
    var _0x31ae8e = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'length',
        'log',
        'toString'
    ];
    a0_0x25c7 = function () {
        return _0x31ae8e;
    };
    return a0_0x25c7();
}
var a0_0x5224ac = a0_0x1af9;
var input = require('fs')[a0_0x5224ac(0x0)](a0_0x5224ac(0x1), a0_0x5224ac(0x2));
function a0_0x1af9(PfdXxE, key) {
    var stringArray = a0_0x25c7();
    a0_0x1af9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1af9(PfdXxE, key);
}
var Arr = input[a0_0x5224ac(0x3)]()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr[a0_0x5224ac(0x4)]; i++) {
    if (Arr[i] == -0x1)
        break;
    console[a0_0x5224ac(0x5)](Arr[i][a0_0x5224ac(0x6)](0x4));
}