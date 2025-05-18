function a0_0x7b67(kOaLvd, key) {
    var stringArray = a0_0x3bc6();
    a0_0x7b67 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7b67(kOaLvd, key);
}
var a0_0x575024 = a0_0x7b67;
function a0_0x3bc6() {
    var _0x3be1b4 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'push',
        'log',
        'join'
    ];
    a0_0x3bc6 = function () {
        return _0x3be1b4;
    };
    return a0_0x3bc6();
}
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
var input = require('fs')['readFileSync'](a0_0x575024(0x0), a0_0x575024(0x1));
var Arr = input[a0_0x575024(0x2)]()['split']('\x0a');
var AL = Arr[a0_0x575024(0x3)]();
for (var i = 0x0; i < AL; i++) {
    Arr[a0_0x575024(0x3)]();
    var yx = [];
    for (var j = 0x0; j < 0x8; j++) {
        var line = Arr[a0_0x575024(0x3)]()[a0_0x575024(0x4)]('')[a0_0x575024(0x5)](Number);
        yx[a0_0x575024(0x6)](line);
    }
    var X = Arr[a0_0x575024(0x3)]() - 0x0 - 0x1;
    var Y = Arr[a0_0x575024(0x3)]() - 0x0 - 0x1;
    if (yx[Y][X] == 0x1) {
        yx[Y][X] = 0x0;
        bomb(Y, X);
    }
    console['log']('Data\x20' + (i + 0x1) + ':');
    for (var j = 0x0; j < 0x8; j++)
        console[a0_0x575024(0x7)](yx[j][a0_0x575024(0x8)](''));
}