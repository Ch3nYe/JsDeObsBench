var a0_0x284d47 = a0_0x1cb6;
(function (stringArrayFunction, comparisonValue) {
    var _0x380e5d = a0_0x1cb6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x380e5d(0x85)) / 0x1 * (-parseInt(_0x380e5d(0x92)) / 0x2) + -parseInt(_0x380e5d(0x86)) / 0x3 + parseInt(_0x380e5d(0x8c)) / 0x4 + -parseInt(_0x380e5d(0x89)) / 0x5 * (parseInt(_0x380e5d(0x8d)) / 0x6) + -parseInt(_0x380e5d(0x94)) / 0x7 + parseInt(_0x380e5d(0x81)) / 0x8 * (parseInt(_0x380e5d(0x80)) / 0x9) + -parseInt(_0x380e5d(0x84)) / 0xa * (-parseInt(_0x380e5d(0x82)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4a22, 0xbda95));
function bomb(y, x) {
    var dy = [
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    for (var i = 0x0; i < 0x8; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= H || xx < 0x0 || xx >= W)
            continue;
        if (yx[yy][xx] == 'a') {
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
function a0_0x4a22() {
    var _0x11b73e = [
        'log',
        'utf8',
        '274uuTGau',
        'readFileSync',
        '10586254TUrAuf',
        '13059117nhYvSl',
        '8APAcAD',
        '209VbzgIi',
        'push',
        '10250TWgrDc',
        '9157yJVuYo',
        '2439606TVtBaR',
        'trim',
        'shift',
        '5mNHDYs',
        'replace',
        '/dev/stdin',
        '1754360TcLjVd',
        '367260XTZTrL',
        'map',
        'split'
    ];
    a0_0x4a22 = function () {
        return _0x11b73e;
    };
    return a0_0x4a22();
}
var input = require('fs')[a0_0x284d47(0x93)](a0_0x284d47(0x8b), a0_0x284d47(0x91));
var Arr = input[a0_0x284d47(0x87)]()[a0_0x284d47(0x8f)]('\x0a');
function a0_0x1cb6(FKciFz, key) {
    var stringArray = a0_0x4a22();
    a0_0x1cb6 = function (index, key) {
        index = index - 0x80;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1cb6(FKciFz, key);
}
while (!![]) {
    var WH = Arr[a0_0x284d47(0x88)]()[a0_0x284d47(0x8f)]('\x20')[a0_0x284d47(0x8e)](Number);
    var W = WH[0x0];
    var H = WH[0x1];
    if (W == 0x0 && H == 0x0)
        break;
    var yx = [];
    var Y, X;
    for (var i = 0x0; i < H; i++) {
        var str = Arr['shift']();
        str = str[a0_0x284d47(0x8a)](/1/g, 'a');
        var arr = str[a0_0x284d47(0x8f)]('\x20');
        yx[a0_0x284d47(0x83)](arr);
    }
    var cnt = 0x0;
    for (var i = 0x0; i < H; i++) {
        for (var j = 0x0; j < W; j++) {
            if (yx[i][j] == 'a') {
                cnt++;
                yx[i][j] = cnt;
                bomb(i, j);
            }
        }
    }
    console[a0_0x284d47(0x90)](cnt);
}