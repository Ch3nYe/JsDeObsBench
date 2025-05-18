var a0_0x2a2112 = a0_0x2aa1;
function a0_0x1ddc() {
    var _0x35ce50 = [
        'push',
        '977049HRJbWZ',
        '422274yaghWg',
        'shift',
        '/dev/stdin',
        'split',
        'readFileSync',
        '1096565UoZlBL',
        '580412vhEihf',
        '18MMOvtw',
        'utf8',
        'map',
        '4NaqfmC',
        '1748952oeUVqi',
        '656324PvaYcX',
        '5217816TQSGiI'
    ];
    a0_0x1ddc = function () {
        return _0x35ce50;
    };
    return a0_0x1ddc();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x38676c = a0_0x2aa1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x38676c(0x108)) / 0x1 + -parseInt(_0x38676c(0x104)) / 0x2 + -parseInt(_0x38676c(0x107)) / 0x3 + parseInt(_0x38676c(0x112)) / 0x4 * (-parseInt(_0x38676c(0x10d)) / 0x5) + parseInt(_0x38676c(0x113)) / 0x6 + -parseInt(_0x38676c(0x10e)) / 0x7 + -parseInt(_0x38676c(0x105)) / 0x8 * (-parseInt(_0x38676c(0x10f)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1ddc, 0x351fe));
function a0_0x2aa1(fEwiCd, key) {
    var stringArray = a0_0x1ddc();
    a0_0x2aa1 = function (index, key) {
        index = index - 0x104;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2aa1(fEwiCd, key);
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
var input = require('fs')[a0_0x2a2112(0x10c)](a0_0x2a2112(0x10a), a0_0x2a2112(0x110));
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x2a2112(0x109)]()[a0_0x2a2112(0x10b)]('\x20')[a0_0x2a2112(0x111)](Number);
    if (n[0x0] == 0x0 && n[0x1] == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n[0x0]; i++) {
        var arr = Arr[a0_0x2a2112(0x109)]()[a0_0x2a2112(0x10b)]('');
        yx[a0_0x2a2112(0x106)](arr);
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
    console['log'](cnt);
}