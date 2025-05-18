var a0_0x84c34d = a0_0x2fc8;
var input = require('fs')[a0_0x84c34d(0x0)](a0_0x84c34d(0x1), a0_0x84c34d(0x2));
var [n, k] = input[a0_0x84c34d(0x3)]()[a0_0x84c34d(0x4)]('\x20')['map'](Number);
function a0_0x2fc8(Ymtjij, key) {
    var stringArray = a0_0x56bb();
    a0_0x2fc8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fc8(Ymtjij, key);
}
var takasa = 0x0;
var w = 0x0;
var cnt = 0x0;
while (!![]) {
    if (n == 0x0)
        break;
    n--;
    cnt++;
    if (w <= k * cnt) {
        takasa++;
        w += cnt;
        cnt = 0x0;
    }
}
console[a0_0x84c34d(0x5)](takasa);
function a0_0x56bb() {
    var _0x258b70 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'log'
    ];
    a0_0x56bb = function () {
        return _0x258b70;
    };
    return a0_0x56bb();
}