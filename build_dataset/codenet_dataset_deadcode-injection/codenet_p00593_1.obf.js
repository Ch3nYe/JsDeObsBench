var a0_0x433d28 = a0_0x263b;
function bomb(y, x, cnt, f) {
    var _0x2a7434 = a0_0x263b;
    yx[y][x] = (_0x2a7434(0x0) + cnt)[_0x2a7434(0x1)](-0x3);
    if (y == n - 0x1 && x == n - 0x1)
        return;
    else if (y == n - 0x1 && f == -0x1)
        bomb(y, x + 0x1, cnt + 0x1, 0x1);
    else if (y == n - 0x1 && f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (x == n - 0x1 && f == 0x1)
        bomb(y + 0x1, x, cnt + 0x1, -0x1);
    else if (x == n - 0x1 && f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
    else if (y == 0x0 && f == 0x1)
        bomb(y, x + 0x1, cnt + 0x1, -0x1);
    else if (y == 0x0 && f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
    else if (x == 0x0 && f == -0x1)
        bomb(y + 0x1, x, cnt + 0x1, 0x1);
    else if (x == 0x0 && f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
}
function a0_0x263b(VFejgX, key) {
    var stringArray = a0_0x4a0a();
    a0_0x263b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x263b(VFejgX, key);
}
var input = require('fs')[a0_0x433d28(0x2)]('/dev/stdin', a0_0x433d28(0x3));
var Arr = input[a0_0x433d28(0x4)]()[a0_0x433d28(0x5)]('\x0a');
var I = 0x1;
while (!![]) {
    var n = Arr[a0_0x433d28(0x6)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = [];
        for (var j = 0x0; j < n; j++) {
            yx[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0, 0x1, 0x1);
    console['log'](a0_0x433d28(0x7) + I + ':');
    I++;
    console[a0_0x433d28(0x8)](yx[a0_0x433d28(0x9)]('\x0a')[a0_0x433d28(0xa)](/\,/g, ''));
}
function a0_0x4a0a() {
    var _0x253f3f = [
        '\x20\x20\x20',
        'slice',
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'Case\x20',
        'log',
        'join',
        'replace'
    ];
    a0_0x4a0a = function () {
        return _0x253f3f;
    };
    return a0_0x4a0a();
}