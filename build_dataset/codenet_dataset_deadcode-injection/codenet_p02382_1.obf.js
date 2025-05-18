var a0_0x46c007 = a0_0x1ee8;
var input = require('fs')[a0_0x46c007(0x0)](a0_0x46c007(0x1), a0_0x46c007(0x2));
function a0_0xc6f2() {
    var _0x9dd77a = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'abs',
        'pow',
        'toFixed',
        'log'
    ];
    a0_0xc6f2 = function () {
        return _0x9dd77a;
    };
    return a0_0xc6f2();
}
var Arr = input['trim']()[a0_0x46c007(0x3)]('\x0a');
var n = Arr[0x0] - 0x0;
var x = Arr[0x1][a0_0x46c007(0x3)]('\x20')[a0_0x46c007(0x4)](Number);
var y = Arr[0x2]['split']('\x20')[a0_0x46c007(0x4)](Number);
var sum1 = 0x0;
var sum2 = 0x0;
var sum3 = 0x0;
var max = 0x0;
for (var i = 0x0; i < n; i++) {
    var a = Math[a0_0x46c007(0x5)](x[i] - y[i]);
    sum1 += a;
    sum2 += Math[a0_0x46c007(0x6)](a, 0x2);
    sum3 += Math[a0_0x46c007(0x6)](a, 0x3);
    max = Math['max'](max, a);
}
function a0_0x1ee8(ypwwnp, key) {
    var stringArray = a0_0xc6f2();
    a0_0x1ee8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ee8(ypwwnp, key);
}
console['log'](sum1[a0_0x46c007(0x7)](0x6));
console[a0_0x46c007(0x8)](Math['sqrt'](sum2)[a0_0x46c007(0x7)](0x6));
console[a0_0x46c007(0x8)](Math[a0_0x46c007(0x6)](sum3, 0x1 / 0x3)[a0_0x46c007(0x7)](0x6));
console['log'](max['toFixed'](0x6));