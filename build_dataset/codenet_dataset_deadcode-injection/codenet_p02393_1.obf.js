function a0_0x1f32() {
    var _0x31b423 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        '%d\x20%d\x20%d'
    ];
    a0_0x1f32 = function () {
        return _0x31b423;
    };
    return a0_0x1f32();
}
var a0_0x582a84 = a0_0x3fd5;
var input = require('fs')[a0_0x582a84(0x0)](a0_0x582a84(0x1), a0_0x582a84(0x2));
function a0_0x3fd5(RYUrXW, key) {
    var stringArray = a0_0x1f32();
    a0_0x3fd5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3fd5(RYUrXW, key);
}
var cnt, i, j;
input = input[a0_0x582a84(0x3)]('\x20');
for (cnt = 0x0; cnt < 0x3; cnt++) {
    for (i = 0x0; i < 0x3; i++) {
        if (input[i] > input[i + 0x1]) {
            j = input[i];
            input[i] = input[i + 0x1];
            input[i + 0x1] = j;
        }
    }
}
console['log'](a0_0x582a84(0x4), input[0x0], input[0x1], input[0x2]);