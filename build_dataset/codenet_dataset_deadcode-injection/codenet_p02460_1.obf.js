function a0_0x9c2d() {
    var _0x2be824 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'set',
        'has',
        'get',
        'log'
    ];
    a0_0x9c2d = function () {
        return _0x2be824;
    };
    return a0_0x9c2d();
}
var a0_0x487179 = a0_0xa436;
var input = require('fs')['readFileSync'](a0_0x487179(0x0), a0_0x487179(0x1));
var arr = input[a0_0x487179(0x2)]()[a0_0x487179(0x3)]('\x0a');
var q = arr[a0_0x487179(0x4)]() - 0x0;
var str = '';
var map = new Map();
for (var i = 0x0; i < q; i++) {
    var [a, b, c] = arr[i][a0_0x487179(0x3)]('\x20');
    if (a == '0')
        map[a0_0x487179(0x5)](b, c);
    else if (a == '1')
        str += (map[a0_0x487179(0x6)](b) ? map[a0_0x487179(0x7)](b) : '0') + '\x0a';
    else
        map['delete'](b);
}
function a0_0xa436(TUIWtc, key) {
    var stringArray = a0_0x9c2d();
    a0_0xa436 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa436(TUIWtc, key);
}
console[a0_0x487179(0x8)](str[a0_0x487179(0x2)]());