var a0_0x4235f6 = a0_0x2cd5;
function a0_0x2cd5(iXIsEJ, key) {
    var stringArray = a0_0x4c1e();
    a0_0x2cd5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2cd5(iXIsEJ, key);
}
var input = require('fs')[a0_0x4235f6(0x0)](a0_0x4235f6(0x1), 'utf8');
function a0_0x4c1e() {
    var _0x532219 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'map'
    ];
    a0_0x4c1e = function () {
        return _0x532219;
    };
    return a0_0x4c1e();
}
var Arr = input[a0_0x4235f6(0x2)]()['split']('\x0a');
var N = Arr[a0_0x4235f6(0x3)]() - 0x0;
for (var i = 0x0; i < N; i++) {
    var arr = Arr[a0_0x4235f6(0x3)]()[a0_0x4235f6(0x4)]('\x20')[a0_0x4235f6(0x5)](Number);
    var x = arr[0x0];
    var y = arr[0x1];
    var b = arr[0x2];
    var p = arr[0x3];
    var A = x * b + y * p;
    while (b < 0x5)
        b++;
    while (p < 0x2)
        p++;
    var B = (x * b + y * p) * 0.8;
    console['log'](Math['min'](A, B));
}