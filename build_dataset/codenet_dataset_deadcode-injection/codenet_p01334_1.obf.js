var a0_0x5de5b8 = a0_0x264e;
function bomb(y, x) {
    var _0x2a1b64 = a0_0x264e;
    var Y = yx[y][x][0x1];
    var X = yx[y][x][0x0];
    if (ring[_0x2a1b64(0x0)](Y + ',' + X)) {
        if (_0x2a1b64(0x1) !== _0x2a1b64(0x2)) {
            var flag = !![];
            for (var k in ring) {
                if (obj[_0x2a1b64(0x0)](k))
                    flag = ![];
                obj[k] = !![];
            }
            if (flag)
                cnt++;
        } else {
            ring[Y + ',' + X] = !![];
            bomb(Y, X);
        }
    } else {
        if (_0x2a1b64(0x3) === 'yuPmc') {
            if (obj['hasOwnProperty'](k))
                flag = ![];
            obj[k] = !![];
        } else {
            ring[Y + ',' + X] = !![];
            bomb(Y, X);
        }
    }
}
function a0_0x264e(DjEGpi, key) {
    var stringArray = a0_0xba91();
    a0_0x264e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x264e(DjEGpi, key);
}
var input = require('fs')[a0_0x5de5b8(0x4)]('/dev/stdin', a0_0x5de5b8(0x5));
var arr = input[a0_0x5de5b8(0x6)]()[a0_0x5de5b8(0x7)]('\x0a');
while (!![]) {
    var n = arr[a0_0x5de5b8(0x8)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var tile = arr[a0_0x5de5b8(0x8)]()['split']('\x20')[a0_0x5de5b8(0x9)](Number);
        var t = [];
        for (var j = 0x0; j < n; j++)
            t[j] = [
                tile[a0_0x5de5b8(0x8)](),
                tile[a0_0x5de5b8(0x8)]()
            ];
        yx[a0_0x5de5b8(0xa)](t);
    }
    var obj = {};
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (obj[a0_0x5de5b8(0x0)](i + ',' + j))
                continue;
            var ring = {};
            ring[i + ',' + j] = !![];
            bomb(i, j);
        }
    }
    console[a0_0x5de5b8(0xb)](cnt);
}
function a0_0xba91() {
    var _0x14c07e = [
        'hasOwnProperty',
        'rryDP',
        'HpeOJ',
        'WsBUS',
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'push',
        'log'
    ];
    a0_0xba91 = function () {
        return _0x14c07e;
    };
    return a0_0xba91();
}