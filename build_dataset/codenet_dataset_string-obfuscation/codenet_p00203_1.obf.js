var a0_0x560353 = a0_0x72bb;
(function (stringArrayFunction, comparisonValue) {
    var _0x5c1523 = a0_0x72bb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5c1523(0x1a0)) / 0x1 * (-parseInt(_0x5c1523(0x19c)) / 0x2) + -parseInt(_0x5c1523(0x19b)) / 0x3 + -parseInt(_0x5c1523(0x199)) / 0x4 + parseInt(_0x5c1523(0x19d)) / 0x5 + -parseInt(_0x5c1523(0x197)) / 0x6 * (parseInt(_0x5c1523(0x19e)) / 0x7) + parseInt(_0x5c1523(0x1a1)) / 0x8 * (-parseInt(_0x5c1523(0x195)) / 0x9) + parseInt(_0x5c1523(0x19f)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x32c3, 0x25d9e));
function bomb(y, x) {
    var _0x10a065 = a0_0x72bb;
    if (yx[y][x] == 0x1)
        return;
    else if (yx[y][x] == 0x2) {
        var Y = y + 0x2;
        var X = x;
        if (Y >= h) {
            cnt++;
            return;
        }
        bomb(Y, X);
    } else if (yx[y][x] == 0x0) {
        var dx = [
            -0x1,
            0x0,
            0x1
        ];
        for (var i = 0x0; i < dx[_0x10a065(0x19a)]; i++) {
            var Y = y + 0x1;
            var X = x + dx[i];
            if (X < 0x0 || X >= w)
                continue;
            if (Y >= h) {
                cnt++;
                return;
            }
            if (yx[Y][X] == 0x2 && dx[i] != 0x0)
                continue;
            bomb(Y, X);
        }
    }
}
var input = require('fs')[a0_0x560353(0x196)](a0_0x560353(0x194), 'utf8');
function a0_0x72bb(GJEdnz, key) {
    var stringArray = a0_0x32c3();
    a0_0x72bb = function (index, key) {
        index = index - 0x191;
        var value = stringArray[index];
        return value;
    };
    return a0_0x72bb(GJEdnz, key);
}
var arr = input[a0_0x560353(0x191)]()[a0_0x560353(0x198)]('\x0a');
while (!![]) {
    var wh = arr['shift']()[a0_0x560353(0x198)]('\x20')['map'](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    if (w == 0x0 && h == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx[a0_0x560353(0x1a2)](arr['shift']()[a0_0x560353(0x198)]('\x20')[a0_0x560353(0x193)](Number));
    var cnt = 0x0;
    for (var i = 0x0; i < w; i++) {
        bomb(0x0, i);
    }
    console[a0_0x560353(0x192)](cnt);
}
function a0_0x32c3() {
    var _0xce96f8 = [
        '8991390sSYlTC',
        '11aCXXhK',
        '8utVrwV',
        'push',
        'trim',
        'log',
        'map',
        '/dev/stdin',
        '1216269eGYgZB',
        'readFileSync',
        '1810686WePicV',
        'split',
        '1087788uhWnBG',
        'length',
        '183090gseKKT',
        '8582mtgPsw',
        '364995BMuPSy',
        '7RPoSXb'
    ];
    a0_0x32c3 = function () {
        return _0xce96f8;
    };
    return a0_0x32c3();
}