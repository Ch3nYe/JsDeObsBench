var a0_0x5e9e6f = a0_0x4408;
function a0_0x4408(Izuwfj, key) {
    var stringArray = a0_0x34fc();
    a0_0x4408 = function (index, key) {
        index = index - 0xff;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4408(Izuwfj, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4953ca = a0_0x4408;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4953ca(0xff)) / 0x1 * (-parseInt(_0x4953ca(0x113)) / 0x2) + -parseInt(_0x4953ca(0x10d)) / 0x3 * (parseInt(_0x4953ca(0x111)) / 0x4) + parseInt(_0x4953ca(0x100)) / 0x5 + -parseInt(_0x4953ca(0x11b)) / 0x6 * (-parseInt(_0x4953ca(0x108)) / 0x7) + parseInt(_0x4953ca(0x11a)) / 0x8 * (-parseInt(_0x4953ca(0x112)) / 0x9) + parseInt(_0x4953ca(0x107)) / 0xa * (-parseInt(_0x4953ca(0x116)) / 0xb) + -parseInt(_0x4953ca(0x10f)) / 0xc * (-parseInt(_0x4953ca(0x101)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x34fc, 0x9e6fd));
function a0_0x34fc() {
    var _0x3e5ea0 = [
        '451qQhzQT',
        'trim',
        'push',
        'log',
        '8gOhsEe',
        '3183018aoqCSD',
        'shift',
        '45433kSJRiy',
        '3987165yTcvYC',
        '13daSTrm',
        '01234567',
        'indexOf',
        'length',
        'concat',
        '/dev/stdin',
        '223950KTCazY',
        '7EFmTGQ',
        'map',
        'utf8',
        'forEach',
        'split',
        '3027561hVqWmD',
        'join',
        '28913628BYJzRK',
        'slice',
        '4VRQzaB',
        '5951727tQhSVN',
        '22LLNFGA',
        'readFileSync',
        'floor'
    ];
    a0_0x34fc = function () {
        return _0x3e5ea0;
    };
    return a0_0x34fc();
}
var input = require('fs')[a0_0x5e9e6f(0x114)](a0_0x5e9e6f(0x106), a0_0x5e9e6f(0x10a));
var Arr = input[a0_0x5e9e6f(0x117)]()[a0_0x5e9e6f(0x10c)]('\x0a');
var dy = [
    -0x1,
    0x0,
    0x0,
    0x1
];
var dx = [
    0x0,
    -0x1,
    0x1,
    0x0
];
Arr[a0_0x5e9e6f(0x10b)](function (v, I) {
    var _0x41a646 = a0_0x5e9e6f;
    var V = v['split']('\x20')[_0x41a646(0x109)](Number);
    var obj = {};
    var P = [[
            V,
            0x0
        ]];
    while (P[_0x41a646(0x104)] > 0x0) {
        var A = P[_0x41a646(0x11c)]();
        var arr = A[0x0];
        var cnt = A[0x1];
        if (arr[_0x41a646(0x10e)]('') == _0x41a646(0x102)) {
            console[_0x41a646(0x119)](cnt);
            break;
        }
        var index = arr[_0x41a646(0x103)](0x0);
        var y = Math[_0x41a646(0x115)](index / 0x4);
        var x = index % 0x4;
        var yx = [
            arr[_0x41a646(0x110)](0x0, 0x4),
            arr[_0x41a646(0x110)](0x4, 0x8)
        ];
        for (var i = 0x0; i < 0x4; i++) {
            var yy = y + dy[i];
            var xx = x + dx[i];
            if (yy < 0x0 || xx < 0x0 || yy >= 0x2 || xx >= 0x4)
                continue;
            yx[y][x] = yx[yy][xx];
            var card = yx[yy][xx];
            yx[yy][xx] = 0x0;
            var YX = yx[0x0][_0x41a646(0x105)](yx[0x1]);
            var str = YX[_0x41a646(0x10e)]('');
            if (obj['hasOwnProperty'](str) == ![]) {
                obj[str] = !![];
                P[_0x41a646(0x118)]([
                    YX,
                    cnt + 0x1
                ]);
            }
            yx[yy][xx] = card;
            yx[y][x] = 0x0;
        }
    }
});