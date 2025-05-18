var a0_0x1db9bd = a0_0x59f3;
(function (stringArrayFunction, comparisonValue) {
    var _0x296824 = a0_0x59f3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x296824(0xf5)) / 0x1 * (-parseInt(_0x296824(0xf2)) / 0x2) + parseInt(_0x296824(0xf4)) / 0x3 * (parseInt(_0x296824(0xed)) / 0x4) + -parseInt(_0x296824(0xfe)) / 0x5 + parseInt(_0x296824(0xf0)) / 0x6 + parseInt(_0x296824(0xef)) / 0x7 * (parseInt(_0x296824(0xf3)) / 0x8) + parseInt(_0x296824(0xf7)) / 0x9 * (-parseInt(_0x296824(0xfa)) / 0xa) + -parseInt(_0x296824(0xf9)) / 0xb * (parseInt(_0x296824(0xf6)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x548d, 0x4c752));
function a0_0x548d() {
    var _0x14e322 = [
        'trim',
        '31757wvcREd',
        '815510jjqqQz',
        '/dev/stdin',
        'log',
        'indexOf',
        '2917955NLymNc',
        'shift',
        'map',
        '2140FbEadQ',
        'split',
        '1913394erWvCm',
        '1747350CkWuLl',
        'readFileSync',
        '4ZkmYBY',
        '8nuSrPh',
        '2814lQYtQr',
        '95977XBACDK',
        '1164xsQOvX',
        '9KszkIh'
    ];
    a0_0x548d = function () {
        return _0x14e322;
    };
    return a0_0x548d();
}
function bomb(y, x) {
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
        if (yy < 0x0 || yy >= H || xx < 0x0 || xx >= W)
            continue;
        if (yx[yy][xx] == '.') {
            cnt++;
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
function a0_0x59f3(VvGUHo, key) {
    var stringArray = a0_0x548d();
    a0_0x59f3 = function (index, key) {
        index = index - 0xec;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59f3(VvGUHo, key);
}
var input = require('fs')[a0_0x1db9bd(0xf1)](a0_0x1db9bd(0xfb), 'utf8');
var Arr = input[a0_0x1db9bd(0xf8)]()[a0_0x1db9bd(0xee)]('\x0a');
while (!![]) {
    var WH = Arr[a0_0x1db9bd(0xff)]()[a0_0x1db9bd(0xee)]('\x20')[a0_0x1db9bd(0xec)](Number);
    var W = WH[0x0];
    var H = WH[0x1];
    if (W == 0x0 && H == 0x0)
        break;
    var yx = [];
    var Y, X;
    for (var i = 0x0; i < H; i++) {
        var arr = Arr[a0_0x1db9bd(0xff)]()[a0_0x1db9bd(0xee)]('');
        if (arr[a0_0x1db9bd(0xfd)]('@') != -0x1) {
            Y = i;
            X = arr['indexOf']('@');
        }
        yx['push'](arr);
    }
    var cnt = 0x1;
    bomb(Y, X);
    console[a0_0x1db9bd(0xfc)](cnt);
}