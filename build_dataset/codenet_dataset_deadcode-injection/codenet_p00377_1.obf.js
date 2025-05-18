var a0_0xde3210 = a0_0x33ba;
var input = require('fs')[a0_0xde3210(0x0)](a0_0xde3210(0x1), 'utf8');
function a0_0x33ba(DjkCzd, key) {
    var stringArray = a0_0x1ca7();
    a0_0x33ba = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x33ba(DjkCzd, key);
}
var arr = input[a0_0xde3210(0x2)]()['split']('\x0a');
var [n, c] = arr[0x0][a0_0xde3210(0x3)]('\x20')[a0_0xde3210(0x4)](Number);
var p = arr[0x1]['split']('\x20')['map'](Number);
var sum = p[a0_0xde3210(0x5)]((a, b) => a + b);
var x = sum % (n + 0x1) == 0x0 ? 0x0 : 0x1;
console[a0_0xde3210(0x6)](Math[a0_0xde3210(0x7)](sum / (n + 0x1)) + x);
function a0_0x1ca7() {
    var _0x18161e = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'map',
        'reduce',
        'log',
        'floor'
    ];
    a0_0x1ca7 = function () {
        return _0x18161e;
    };
    return a0_0x1ca7();
}