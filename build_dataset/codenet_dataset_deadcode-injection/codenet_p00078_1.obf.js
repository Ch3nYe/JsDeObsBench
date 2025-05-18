var a0_0x18e8e5 = a0_0x484f;
function a0_0x1ff2() {
    var _0x357d45 = [
        'slice',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'map',
        'length',
        'floor',
        'log',
        'join',
        'replace'
    ];
    a0_0x1ff2 = function () {
        return _0x357d45;
    };
    return a0_0x1ff2();
}
function bomb(y, x) {
    var _0x350b1d = a0_0x484f;
    if (N == max)
        return;
    if (x < 0x0)
        x = n - 0x1;
    if (y < 0x0)
        y = n - 0x1;
    if (x >= n)
        x = 0x0;
    if (y >= n)
        y = 0x0;
    if (yx[y][x] != -0x1) {
        bomb(y + 0x1, x - 0x1);
    } else {
        yx[y][x] = ('\x20\x20\x20' + N)[_0x350b1d(0x0)](-0x4);
        N++;
        bomb(y + 0x1, x + 0x1);
    }
}
var input = require('fs')[a0_0x18e8e5(0x1)](a0_0x18e8e5(0x2), a0_0x18e8e5(0x3));
function a0_0x484f(nZnfXf, key) {
    var stringArray = a0_0x1ff2();
    a0_0x484f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x484f(nZnfXf, key);
}
var Arr = input[a0_0x18e8e5(0x4)]()['split']('\x0a')[a0_0x18e8e5(0x5)](Number);
for (var i = 0x0; i < Arr[a0_0x18e8e5(0x6)]; i++) {
    var n = Arr[i];
    var max = n * n + 0x1;
    if (n == 0x0)
        break;
    var yx = [];
    for (var j = 0x0; j < n; j++) {
        yx[j] = [];
        for (var k = 0x0; k < n; k++) {
            yx[j][k] = -0x1;
        }
    }
    var N = 0x1;
    bomb(Math[a0_0x18e8e5(0x7)](n / 0x2) + 0x1, Math['floor'](n / 0x2));
    console[a0_0x18e8e5(0x8)](yx[a0_0x18e8e5(0x9)]('\x0a')[a0_0x18e8e5(0xa)](/\,/g, ''));
}