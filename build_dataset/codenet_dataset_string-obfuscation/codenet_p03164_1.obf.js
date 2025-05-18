var a0_0x4474b7 = a0_0x5447;
(function (stringArrayFunction, comparisonValue) {
    var _0x176a12 = a0_0x5447;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x176a12(0x111)) / 0x1 * (parseInt(_0x176a12(0x113)) / 0x2) + -parseInt(_0x176a12(0x112)) / 0x3 * (parseInt(_0x176a12(0x117)) / 0x4) + -parseInt(_0x176a12(0x10d)) / 0x5 * (parseInt(_0x176a12(0x110)) / 0x6) + -parseInt(_0x176a12(0x10b)) / 0x7 * (parseInt(_0x176a12(0x116)) / 0x8) + parseInt(_0x176a12(0x114)) / 0x9 + -parseInt(_0x176a12(0x109)) / 0xa * (parseInt(_0x176a12(0x11a)) / 0xb) + parseInt(_0x176a12(0x108)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4cbe, 0x82f19));
var MAX_VALUE = 0x3e8;
var inputRaw = require('fs')[a0_0x4474b7(0x11c)]('/dev/stdin', a0_0x4474b7(0x118));
var rows = inputRaw[a0_0x4474b7(0x119)]()[a0_0x4474b7(0x11b)]('\x0a');
var row1 = rows[0x0][a0_0x4474b7(0x11b)]('\x20')[a0_0x4474b7(0x10c)](Number);
var N = row1[0x0];
var W = row1[0x1];
var list = rows[a0_0x4474b7(0x10a)](0x1)[a0_0x4474b7(0x10c)](r => r[a0_0x4474b7(0x11b)]('\x20')[a0_0x4474b7(0x10c)](Number));
var dp = Array[a0_0x4474b7(0x10e)]({ 'length': N + 0x1 }, _ => Array(N * MAX_VALUE + 0x1)['fill'](0x0));
function a0_0x4cbe() {
    var _0x1b7f26 = [
        'map',
        '103240nMhasU',
        'from',
        'min',
        '42TyQVdx',
        '215762kCVEXb',
        '3bZwrSi',
        '2yZQfnY',
        '5678460OlZwXb',
        'log',
        '8MXKklH',
        '555136bJuKWP',
        'utf8',
        'trim',
        '11zuftwN',
        'split',
        'readFileSync',
        'fill',
        '15278892BWdDBt',
        '8191130SbEENZ',
        'slice',
        '3368155NGltZi'
    ];
    a0_0x4cbe = function () {
        return _0x1b7f26;
    };
    return a0_0x4cbe();
}
dp[0x0] = Array(N * MAX_VALUE + 0x1)[a0_0x4474b7(0x11d)](Infinity);
function a0_0x5447(KAxUuv, key) {
    var stringArray = a0_0x4cbe();
    a0_0x5447 = function (index, key) {
        index = index - 0x108;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5447(KAxUuv, key);
}
dp[0x0][0x0] = 0x0;
function solve() {
    var _0x48e226 = a0_0x4474b7;
    for (var i = 0x0; i < N; i++) {
        for (var j = 0x0; j <= N * MAX_VALUE; j++) {
            if (list[i][0x1] <= j) {
                var a = dp[i][j - list[i][0x1]] + list[i][0x0];
                var b = dp[i][j];
                dp[i + 0x1][j] = Math[_0x48e226(0x10f)](a, b);
            } else {
                dp[i + 0x1][j] = dp[i][j];
            }
        }
    }
    var result = 0x0;
    for (var i = 0x0; i <= N * MAX_VALUE; i++)
        if (dp[N][i] <= W)
            result = i;
    return result;
}
console[a0_0x4474b7(0x115)](solve());