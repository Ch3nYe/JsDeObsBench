var a0_0x23b0c8 = a0_0x28b6;
var input = require('fs')[a0_0x23b0c8(0x0)](a0_0x23b0c8(0x1), a0_0x23b0c8(0x2));
function a0_0x28b6(oWQfqZ, key) {
    var stringArray = a0_0x39ed();
    a0_0x28b6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28b6(oWQfqZ, key);
}
var [w, h, c] = input[a0_0x23b0c8(0x3)]()[a0_0x23b0c8(0x4)]('\x20')['map'](Number);
var max = 0x1;
for (var i = 0x1; i <= 0x3e8; i++) {
    if (w % i == 0x0 && h % i == 0x0)
        max = i;
}
console['log'](w * h / (max * max) * c);
function a0_0x39ed() {
    var _0x3c4049 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split'
    ];
    a0_0x39ed = function () {
        return _0x3c4049;
    };
    return a0_0x39ed();
}