function a0_0x4200(TKkhIt, key) {
    var stringArray = a0_0x2f3d();
    a0_0x4200 = function (index, key) {
        index = index - 0x16c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4200(TKkhIt, key);
}
var a0_0x30f315 = a0_0x4200;
(function (stringArrayFunction, comparisonValue) {
    var _0x572e4f = a0_0x4200;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x572e4f(0x16c)) / 0x1 * (parseInt(_0x572e4f(0x17d)) / 0x2) + -parseInt(_0x572e4f(0x176)) / 0x3 + -parseInt(_0x572e4f(0x16f)) / 0x4 * (parseInt(_0x572e4f(0x175)) / 0x5) + -parseInt(_0x572e4f(0x172)) / 0x6 + parseInt(_0x572e4f(0x17a)) / 0x7 + -parseInt(_0x572e4f(0x179)) / 0x8 + -parseInt(_0x572e4f(0x170)) / 0x9 * (-parseInt(_0x572e4f(0x174)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f3d, 0x35701));
function a0_0x2f3d() {
    var _0x1b0622 = [
        'trim',
        '14ywpVvI',
        '42803RyNWYC',
        'map',
        '/dev/stdin',
        '777916gOkxpC',
        '3227139WMhAXG',
        'shift',
        '662178VOMJxw',
        'split',
        '30XWnZkc',
        '10MmFrfR',
        '599964XxOhcR',
        'readFileSync',
        'log',
        '1358872vqWxaq',
        '2183699DTYnnY',
        '0\x200'
    ];
    a0_0x2f3d = function () {
        return _0x1b0622;
    };
    return a0_0x2f3d();
}
function bomb(y, x) {
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
                color = 'bad';
        }
    }
}
var input = require('fs')[a0_0x30f315(0x177)](a0_0x30f315(0x16e), 'utf8');
var arr = input[a0_0x30f315(0x17c)]()[a0_0x30f315(0x173)]('\x0a');
while (!![]) {
    var wh = arr[a0_0x30f315(0x171)]();
    if (wh == a0_0x30f315(0x17b))
        break;
    wh = wh[a0_0x30f315(0x173)]('\x20')[a0_0x30f315(0x16d)](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx['push'](arr[a0_0x30f315(0x171)]()[a0_0x30f315(0x173)](''));
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
    console[a0_0x30f315(0x178)](ans[0x0] + '\x20' + ans[0x1]);
}