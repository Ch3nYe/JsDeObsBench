function a0_0x589f() {
    var _0x41b4cb = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'reduce',
        'push',
        'sort',
        'log'
    ];
    a0_0x589f = function () {
        return _0x41b4cb;
    };
    return a0_0x589f();
}
function a0_0x5e6a(fBUulw, key) {
    var stringArray = a0_0x589f();
    a0_0x5e6a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e6a(fBUulw, key);
}
var a0_0x2d7183 = a0_0x5e6a;
var input = require('fs')['readFileSync'](a0_0x2d7183(0x0), a0_0x2d7183(0x1));
var Arr = input[a0_0x2d7183(0x2)]()[a0_0x2d7183(0x3)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x2d7183(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var S = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x2d7183(0x4)]()[a0_0x2d7183(0x3)]('\x20')[a0_0x2d7183(0x5)](Number);
        var sum = arr[a0_0x2d7183(0x6)](function (a, b) {
            return a + b;
        });
        S[a0_0x2d7183(0x7)](sum);
    }
    S[a0_0x2d7183(0x8)](function (a, b) {
        return b - a;
    });
    console[a0_0x2d7183(0x9)](S[0x0] + '\x20' + S[S['length'] - 0x1]);
}