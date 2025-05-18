var a0_0x289d5f = a0_0x3e23;
var input = require('fs')[a0_0x289d5f(0x0)]('/dev/stdin', a0_0x289d5f(0x1));
var arr = input[a0_0x289d5f(0x2)]()[a0_0x289d5f(0x3)]('\x0a');
function a0_0x3e23(TWmJQn, key) {
    var stringArray = a0_0x840b();
    a0_0x3e23 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e23(TWmJQn, key);
}
function a0_0x840b() {
    var _0x2f04dd = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'shift',
        'log'
    ];
    a0_0x840b = function () {
        return _0x2f04dd;
    };
    return a0_0x840b();
}
var [a, b] = arr['shift']()[a0_0x289d5f(0x3)]('\x20')[a0_0x289d5f(0x4)](Number);
var n = arr[a0_0x289d5f(0x5)]() - 0x0;
var flag = 0x0;
while (n--) {
    var [s, f] = arr['shift']()[a0_0x289d5f(0x3)]('\x20')[a0_0x289d5f(0x4)](Number);
    if (f <= a || b <= s)
        continue;
    else
        flag = 0x1;
}
console[a0_0x289d5f(0x6)](flag);