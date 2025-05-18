var a0_0x5b7f32 = a0_0x17d4;
(function (stringArrayFunction, comparisonValue) {
    var _0x114c36 = a0_0x17d4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x114c36(0x1a8)) / 0x1 + -parseInt(_0x114c36(0x1a4)) / 0x2 * (parseInt(_0x114c36(0x1a6)) / 0x3) + -parseInt(_0x114c36(0x1a1)) / 0x4 * (parseInt(_0x114c36(0x1b0)) / 0x5) + -parseInt(_0x114c36(0x1ac)) / 0x6 * (parseInt(_0x114c36(0x1b1)) / 0x7) + parseInt(_0x114c36(0x1af)) / 0x8 + -parseInt(_0x114c36(0x1a7)) / 0x9 * (parseInt(_0x114c36(0x1b2)) / 0xa) + parseInt(_0x114c36(0x1a9)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x168a, 0xb042a));
function a0_0x168a() {
    var _0x3fe675 = [
        'readFileSync',
        '/dev/stdin',
        '92xDgOlm',
        'min',
        'max',
        '1706vBdxXN',
        'shift',
        '603ezmmUx',
        '9auzTkm',
        '1097231wTMofz',
        '29101424FqksyC',
        'push',
        'utf8',
        '4438194BKuRkT',
        'log',
        'split',
        '10326392ssPzsV',
        '194695rZQhrC',
        '7MtCShR',
        '3104410xfDCAr'
    ];
    a0_0x168a = function () {
        return _0x3fe675;
    };
    return a0_0x168a();
}
function seach(y, x) {
    var _0x48969a = a0_0x17d4;
    if (yx[y][x] == '*')
        return 0x0;
    var dy = [
        -0x1,
        -0x1,
        0x0
    ];
    var dx = [
        -0x1,
        0x0,
        -0x1
    ];
    var min = n;
    for (var i = 0x0; i < 0x3; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= n || xx < 0x0 || xx >= n)
            return 0x1;
        min = Math[_0x48969a(0x1a2)](min, yx[yy][xx]);
    }
    return min + 0x1;
}
var input = require('fs')[a0_0x5b7f32(0x1b3)](a0_0x5b7f32(0x1b4), a0_0x5b7f32(0x1ab));
function a0_0x17d4(GmMwKP, key) {
    var stringArray = a0_0x168a();
    a0_0x17d4 = function (index, key) {
        index = index - 0x1a1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x17d4(GmMwKP, key);
}
var Arr = input['trim']()[a0_0x5b7f32(0x1ae)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x5b7f32(0x1a5)]() - 0x0;
    if (n == 0x0)
        break;
    var max = 0x0;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var str = Arr[a0_0x5b7f32(0x1a5)]();
        yx[a0_0x5b7f32(0x1aa)](str[a0_0x5b7f32(0x1ae)](''));
    }
    for (var y = 0x0; y < n; y++) {
        for (var x = 0x0; x < n; x++) {
            yx[y][x] = seach(y, x);
            max = Math[a0_0x5b7f32(0x1a3)](max, yx[y][x]);
        }
    }
    console[a0_0x5b7f32(0x1ad)](max);
}