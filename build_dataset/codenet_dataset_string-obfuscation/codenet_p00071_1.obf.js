var a0_0x2cfd16 = a0_0x305c;
function a0_0x305c(dMHWWQ, key) {
    var stringArray = a0_0x5f3c();
    a0_0x305c = function (index, key) {
        index = index - 0x96;
        var value = stringArray[index];
        return value;
    };
    return a0_0x305c(dMHWWQ, key);
}
function a0_0x5f3c() {
    var _0x2eca4d = [
        'map',
        'trim',
        '3304EMgwqC',
        'utf8',
        '3CGPRDq',
        'readFileSync',
        '4eBhYuP',
        '11OLZdDm',
        'shift',
        '20504vuNZFJ',
        '20471796uwsdOV',
        'join',
        'split',
        '5PvvPZB',
        '8766441pHzvIa',
        '1182652ZdAhpR',
        '/dev/stdin',
        '182489nfYiUG',
        '10643600lAkSnG',
        '5124246BprPnI',
        'log'
    ];
    a0_0x5f3c = function () {
        return _0x2eca4d;
    };
    return a0_0x5f3c();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x385360 = a0_0x305c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x385360(0x9c)) / 0x1 * (-parseInt(_0x385360(0xa6)) / 0x2) + -parseInt(_0x385360(0xa4)) / 0x3 * (-parseInt(_0x385360(0x9a)) / 0x4) + -parseInt(_0x385360(0x98)) / 0x5 * (parseInt(_0x385360(0x9e)) / 0x6) + parseInt(_0x385360(0xa2)) / 0x7 * (parseInt(_0x385360(0xa9)) / 0x8) + -parseInt(_0x385360(0x99)) / 0x9 + -parseInt(_0x385360(0x9d)) / 0xa + parseInt(_0x385360(0xa7)) / 0xb * (parseInt(_0x385360(0xaa)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5f3c, 0xa6f86));
function bomb(y, x) {
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    for (var i = 0x0; i < 0x4; i++) {
        for (var j = 0x1; j <= 0x3; j++) {
            var yy = y + dy[i] * j;
            var xx = x + dx[i] * j;
            if (yy < 0x0 || yy >= 0x8 || xx < 0x0 || xx >= 0x8)
                continue;
            if (yx[yy][xx] == 0x1) {
                yx[yy][xx] = 0x0;
                bomb(yy, xx);
            }
        }
    }
}
var input = require('fs')[a0_0x2cfd16(0xa5)](a0_0x2cfd16(0x9b), a0_0x2cfd16(0xa3));
var Arr = input[a0_0x2cfd16(0xa1)]()[a0_0x2cfd16(0x97)]('\x0a');
var AL = Arr[a0_0x2cfd16(0xa8)]();
for (var i = 0x0; i < AL; i++) {
    Arr[a0_0x2cfd16(0xa8)]();
    var yx = [];
    for (var j = 0x0; j < 0x8; j++) {
        var line = Arr[a0_0x2cfd16(0xa8)]()[a0_0x2cfd16(0x97)]('')[a0_0x2cfd16(0xa0)](Number);
        yx['push'](line);
    }
    var X = Arr['shift']() - 0x0 - 0x1;
    var Y = Arr[a0_0x2cfd16(0xa8)]() - 0x0 - 0x1;
    if (yx[Y][X] == 0x1) {
        yx[Y][X] = 0x0;
        bomb(Y, X);
    }
    console[a0_0x2cfd16(0x9f)]('Data\x20' + (i + 0x1) + ':');
    for (var j = 0x0; j < 0x8; j++)
        console['log'](yx[j][a0_0x2cfd16(0x96)](''));
}