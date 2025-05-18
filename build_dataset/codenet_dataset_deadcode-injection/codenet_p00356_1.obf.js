var a0_0x5e8102 = a0_0x248e;
function a0_0x1190() {
    var _0x2152cb = [
        '/dev/stdin',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x1190 = function () {
        return _0x2152cb;
    };
    return a0_0x1190();
}
function a0_0x248e(MmDKZW, key) {
    var stringArray = a0_0x1190();
    a0_0x248e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x248e(MmDKZW, key);
}
var input = require('fs')['readFileSync'](a0_0x5e8102(0x0), 'utf8');
var [x, y] = input[a0_0x5e8102(0x1)]()[a0_0x5e8102(0x2)]('\x20')[a0_0x5e8102(0x3)](Number);
var cnt = 0x0;
for (var i = 0x0; i <= x; i++) {
    if (y * i * 0x2 / (x * 0x2) % 0x1 === 0x0)
        cnt++;
}
console[a0_0x5e8102(0x4)](x + 0x1 + y + 0x1 - cnt);