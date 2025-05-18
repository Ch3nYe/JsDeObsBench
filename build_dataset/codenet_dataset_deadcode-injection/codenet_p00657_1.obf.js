var a0_0x955df2 = a0_0x148e;
var input = require('fs')['readFileSync'](a0_0x955df2(0x0), 'utf8');
function a0_0x4204() {
    var _0x56ee45 = [
        '/dev/stdin',
        'split',
        'log',
        'yes'
    ];
    a0_0x4204 = function () {
        return _0x56ee45;
    };
    return a0_0x4204();
}
var Arr = input['trim']()[a0_0x955df2(0x1)]('\x0a');
function a0_0x148e(LrgEEe, key) {
    var stringArray = a0_0x4204();
    a0_0x148e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x148e(LrgEEe, key);
}
while (!![]) {
    var rc = Arr['shift']()[a0_0x955df2(0x1)]('\x20')['map'](Number);
    var r = rc[0x0];
    var c = rc[0x1];
    if (r == 0x0 && c == 0x0)
        break;
    console[a0_0x955df2(0x2)](r % 0x2 == 0x1 && c % 0x2 == 0x1 ? 'no' : a0_0x955df2(0x3));
}