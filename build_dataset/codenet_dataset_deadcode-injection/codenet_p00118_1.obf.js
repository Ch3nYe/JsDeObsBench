function a0_0x353e() {
    var _0x17229a = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'log'
    ];
    a0_0x353e = function () {
        return _0x17229a;
    };
    return a0_0x353e();
}
var a0_0x42b4d5 = a0_0x4bf2;
function a0_0x4bf2(ovtbAm, key) {
    var stringArray = a0_0x353e();
    a0_0x4bf2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4bf2(ovtbAm, key);
}
function bomb(y, x, v) {
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < 0x4; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= n[0x0] || xx < 0x0 || xx >= n[0x1])
            continue;
        if (v == yx[yy][xx]) {
            yx[yy][xx] = 0x0;
            bomb(yy, xx, v);
        }
    }
}
var input = require('fs')[a0_0x42b4d5(0x0)](a0_0x42b4d5(0x1), 'utf8');
var Arr = input[a0_0x42b4d5(0x2)]()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x42b4d5(0x3)]()[a0_0x42b4d5(0x4)]('\x20')['map'](Number);
    if (n[0x0] == 0x0 && n[0x1] == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n[0x0]; i++) {
        var arr = Arr[a0_0x42b4d5(0x3)]()['split']('');
        yx['push'](arr);
    }
    var cnt = 0x0;
    for (var i = 0x0; i < n[0x0]; i++) {
        for (var j = 0x0; j < n[0x1]; j++) {
            var v = yx[i][j];
            if (v == '@' || v == '#' || v == '*') {
                cnt++;
                yx[i][j] = 0x0;
                bomb(i, j, v);
            }
        }
    }
    console[a0_0x42b4d5(0x5)](cnt);
}