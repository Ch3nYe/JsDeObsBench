var a0_0x539b49 = a0_0x1611;
function a0_0x1611(jTerUd, key) {
    var stringArray = a0_0x50b6();
    a0_0x1611 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1611(jTerUd, key);
}
function a0_0x50b6() {
    var _0x302493 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'log'
    ];
    a0_0x50b6 = function () {
        return _0x302493;
    };
    return a0_0x50b6();
}
var input = require('fs')['readFileSync'](a0_0x539b49(0x0), a0_0x539b49(0x1));
var Arr = input[a0_0x539b49(0x2)]()['split']('\x0a')['map'](Number);
var n = Arr[a0_0x539b49(0x3)]();
var sum = 0x0;
for (var i = 0x0; i < n; i++) {
    sum += Arr[i];
}
console[a0_0x539b49(0x4)](Math['floor'](sum / n));