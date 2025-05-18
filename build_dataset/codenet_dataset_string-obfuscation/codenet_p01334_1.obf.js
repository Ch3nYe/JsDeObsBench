var a0_0x2b1ec9 = a0_0xa45d;
function a0_0xa45d(urnCfK, key) {
    var stringArray = a0_0xf41b();
    a0_0xa45d = function (index, key) {
        index = index - 0xc5;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa45d(urnCfK, key);
}
function a0_0xf41b() {
    var _0x21919b = [
        '21968892qndrNn',
        'shift',
        '1583183gmdCyZ',
        '8mLmPfs',
        '2731353wNTZfU',
        '1637175tEhICM',
        'log',
        '2ElAAyG',
        'split',
        'map',
        '/dev/stdin',
        '1690628pgpJes',
        'push',
        'hasOwnProperty',
        'trim',
        '1644972VvCaDy',
        '783574DtDtgM'
    ];
    a0_0xf41b = function () {
        return _0x21919b;
    };
    return a0_0xf41b();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x69cdcd = a0_0xa45d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x69cdcd(0xc5)) / 0x1 + -parseInt(_0x69cdcd(0xcd)) / 0x2 * (parseInt(_0x69cdcd(0xca)) / 0x3) + -parseInt(_0x69cdcd(0xd1)) / 0x4 + -parseInt(_0x69cdcd(0xcb)) / 0x5 + parseInt(_0x69cdcd(0xd5)) / 0x6 + parseInt(_0x69cdcd(0xc8)) / 0x7 * (parseInt(_0x69cdcd(0xc9)) / 0x8) + parseInt(_0x69cdcd(0xc6)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xf41b, 0x79632));
function bomb(y, x) {
    var _0xd26fef = a0_0xa45d;
    var Y = yx[y][x][0x1];
    var X = yx[y][x][0x0];
    if (ring[_0xd26fef(0xd3)](Y + ',' + X)) {
        var flag = !![];
        for (var k in ring) {
            if (obj[_0xd26fef(0xd3)](k))
                flag = ![];
            obj[k] = !![];
        }
        if (flag)
            cnt++;
    } else {
        ring[Y + ',' + X] = !![];
        bomb(Y, X);
    }
}
var input = require('fs')['readFileSync'](a0_0x2b1ec9(0xd0), 'utf8');
var arr = input[a0_0x2b1ec9(0xd4)]()['split']('\x0a');
while (!![]) {
    var n = arr[a0_0x2b1ec9(0xc7)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var tile = arr[a0_0x2b1ec9(0xc7)]()[a0_0x2b1ec9(0xce)]('\x20')[a0_0x2b1ec9(0xcf)](Number);
        var t = [];
        for (var j = 0x0; j < n; j++)
            t[j] = [
                tile[a0_0x2b1ec9(0xc7)](),
                tile[a0_0x2b1ec9(0xc7)]()
            ];
        yx[a0_0x2b1ec9(0xd2)](t);
    }
    var obj = {};
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (obj['hasOwnProperty'](i + ',' + j))
                continue;
            var ring = {};
            ring[i + ',' + j] = !![];
            bomb(i, j);
        }
    }
    console[a0_0x2b1ec9(0xcc)](cnt);
}