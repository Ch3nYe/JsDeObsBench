var a0_0xbca732 = a0_0x322d;
inp = require('fs')[a0_0xbca732(0x0)](a0_0xbca732(0x1), a0_0xbca732(0x2))['split']('\x0a');
l = inp[a0_0xbca732(0x3)]()[a0_0xbca732(0x4)]('\x20');
A = l[0x0] * 0x1;
B = l[0x1] * 0x1;
function a0_0x2a28() {
    var _0xc85a1e = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'split',
        'log'
    ];
    a0_0x2a28 = function () {
        return _0xc85a1e;
    };
    return a0_0x2a28();
}
X = l[0x2] * 0x1;
function a0_0x322d(VgoXeq, key) {
    var stringArray = a0_0x2a28();
    a0_0x322d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x322d(VgoXeq, key);
}
console[a0_0xbca732(0x5)](A + B > X && A < X ? 'YES' : 'NO');