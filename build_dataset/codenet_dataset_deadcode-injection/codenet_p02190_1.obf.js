function a0_0x2b29(HRhvjT, key) {
    var stringArray = a0_0x2791();
    a0_0x2b29 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b29(HRhvjT, key);
}
var a0_0xad45e1 = a0_0x2b29;
var input = require('fs')[a0_0xad45e1(0x0)](a0_0xad45e1(0x1), a0_0xad45e1(0x2));
var arr = input[a0_0xad45e1(0x3)]()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr[a0_0xad45e1(0x4)]()[a0_0xad45e1(0x5)]('\x20')[a0_0xad45e1(0x6)](Number);
var s = new Set();
function a0_0x2791() {
    var _0x215c0c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'add',
        'log',
        'size'
    ];
    a0_0x2791 = function () {
        return _0x215c0c;
    };
    return a0_0x2791();
}
a['forEach'](v => s[a0_0xad45e1(0x7)](v));
console[a0_0xad45e1(0x8)](s[a0_0xad45e1(0x9)]);