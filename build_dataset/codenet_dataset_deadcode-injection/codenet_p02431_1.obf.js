var a0_0xb4837f = a0_0x297f;
var input = require('fs')['readFileSync'](a0_0xb4837f(0x0), a0_0xb4837f(0x1));
var arr = input[a0_0xb4837f(0x2)]()[a0_0xb4837f(0x3)]('\x0a');
var Q = arr[0x0] - 0x0;
var a = [];
var s = '';
function a0_0x297f(mrNtvS, key) {
    var stringArray = a0_0x88b4();
    a0_0x297f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x297f(mrNtvS, key);
}
for (var i = 0x1; i <= Q; i++) {
    var q = arr[i][a0_0xb4837f(0x3)]('\x20');
    if (q[0x0] == '0')
        a[a0_0xb4837f(0x4)](q[0x1] - 0x0);
    else if (q[0x0] == '1')
        s += a[q[0x1]] - 0x0 + '\x0a';
    else
        a['pop']();
}
function a0_0x88b4() {
    var _0x2fce3f = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'push',
        'log'
    ];
    a0_0x88b4 = function () {
        return _0x2fce3f;
    };
    return a0_0x88b4();
}
console[a0_0xb4837f(0x5)](s['trim']());