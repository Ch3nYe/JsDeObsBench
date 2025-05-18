function a0_0x16d9(gLJOEe, key) {
    var stringArray = a0_0xc456();
    a0_0x16d9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16d9(gLJOEe, key);
}
var a0_0x3d945f = a0_0x16d9;
function bomb(y, x) {
    var _0x39604f = a0_0x16d9;
    cnt++;
    var dx = [
        0x0,
        -0x1,
        0x1,
        0x0
    ];
    var dy = [
        -0x1,
        0x0,
        0x0,
        0x1
    ];
    for (var i = 0x0; i < 0x4; i++) {
        var X = x + dx[i];
        var Y = y + dy[i];
        if (Y >= h || Y < 0x0 || X >= w || X < 0x0)
            continue;
        if (yx[Y][X] == 'S')
            continue;
        else if (yx[Y][X] == '.') {
            yx[Y][X] = 'S';
            bomb(Y, X);
        } else {
            if (color == '' || color == yx[Y][X])
                color = yx[Y][X];
            else
                color = _0x39604f(0x0);
        }
    }
}
function a0_0xc456() {
    var _0x4664ed = [
        'bad',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        '0\x200',
        'map',
        'push',
        'log'
    ];
    a0_0xc456 = function () {
        return _0x4664ed;
    };
    return a0_0xc456();
}
var input = require('fs')['readFileSync'](a0_0x3d945f(0x1), a0_0x3d945f(0x2));
var arr = input[a0_0x3d945f(0x3)]()[a0_0x3d945f(0x4)]('\x0a');
while (!![]) {
    var wh = arr[a0_0x3d945f(0x5)]();
    if (wh == a0_0x3d945f(0x6))
        break;
    wh = wh[a0_0x3d945f(0x4)]('\x20')[a0_0x3d945f(0x7)](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx[a0_0x3d945f(0x8)](arr[a0_0x3d945f(0x5)]()[a0_0x3d945f(0x4)](''));
    var ans = [
        0x0,
        0x0
    ];
    for (var y = 0x0; y < h; y++) {
        for (var x = 0x0; x < w; x++) {
            var color = '';
            var cnt = 0x0;
            if (yx[y][x] == '.') {
                yx[y][x] = 'S';
                bomb(y, x);
            }
            if (color == 'B')
                ans[0x0] += cnt;
            else if (color == 'W')
                ans[0x1] += cnt;
        }
    }
    console[a0_0x3d945f(0x9)](ans[0x0] + '\x20' + ans[0x1]);
}