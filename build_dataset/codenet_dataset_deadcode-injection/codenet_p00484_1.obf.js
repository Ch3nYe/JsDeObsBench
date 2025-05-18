var a0_0x256a6e = a0_0x5825;
var input = require('fs')[a0_0x256a6e(0x0)](a0_0x256a6e(0x1), a0_0x256a6e(0x2));
var arr = input[a0_0x256a6e(0x3)]()['split']('\x0a');
var nk = arr[a0_0x256a6e(0x4)]()[a0_0x256a6e(0x5)]('\x20')[a0_0x256a6e(0x6)](Number);
var n = nk[0x0];
var k = nk[0x1];
var N = [];
function a0_0x27ed() {
    var _0x556962 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'forEach',
        'sort',
        'zmTJg',
        'max',
        'length',
        'nGhdF'
    ];
    a0_0x27ed = function () {
        return _0x556962;
    };
    return a0_0x27ed();
}
for (var i = 0x0; i < n; i++)
    N['push'](arr['shift']()[a0_0x256a6e(0x5)]('\x20')[a0_0x256a6e(0x6)](Number));
var dp = [];
for (var i = 0x0; i <= 0xa; i++)
    dp[i] = [];
var DP = [];
function a0_0x5825(WMjYbF, key) {
    var stringArray = a0_0x27ed();
    a0_0x5825 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5825(WMjYbF, key);
}
for (var i = 0x0; i <= 0xa; i++)
    DP[i] = [];
N[a0_0x256a6e(0x7)](function (v) {
    var c = v[0x0];
    var g = v[0x1];
    dp[g]['push'](c);
});
dp['forEach'](function (v, i) {
    var _0x3e0981 = a0_0x5825;
    v[_0x3e0981(0x8)](function (a, b) {
        return b - a;
    });
    v[_0x3e0981(0x7)](function (value, j) {
        var _0x2a7f0a = a0_0x5825;
        if (j == 0x0)
            DP[i][j] = dp[i][j];
        if (j > 0x0) {
            if ('ZrsSv' !== _0x2a7f0a(0x9)) {
                dp[i][j] += dp[i][j - 0x1];
                DP[i][j] = dp[i][j] + (j + 0x1) * j;
            } else {
                v['sort'](function (a, b) {
                    return b - a;
                });
                v[_0x2a7f0a(0x7)](function (value, j) {
                    if (j == 0x0)
                        DP[i][j] = dp[i][j];
                    if (j > 0x0) {
                        dp[i][j] += dp[i][j - 0x1];
                        DP[i][j] = dp[i][j] + (j + 0x1) * j;
                    }
                });
            }
        }
    });
});
var dp = [];
for (var i = 0x0; i <= n; i++)
    dp[i] = 0x0;
var bomb = function (cnt, start, sum) {
    var _0x10ceb0 = a0_0x5825;
    dp[cnt] = Math[_0x10ceb0(0xa)](dp[cnt], sum);
    if (sum == k)
        return;
    for (var i = start; i < DP[_0x10ceb0(0xb)]; i++) {
        if ('jyNhN' !== _0x10ceb0(0xc)) {
            DP[i][_0x10ceb0(0x7)](function (v, index) {
                bomb(cnt + (index + 0x1), i + 0x1, sum + v);
            });
        } else {
            dp[cnt] = Math['max'](dp[cnt], sum);
            if (sum == k)
                return;
            for (var i = start; i < DP[_0x10ceb0(0xb)]; i++) {
                DP[i]['forEach'](function (v, index) {
                    bomb(cnt + (index + 0x1), i + 0x1, sum + v);
                });
            }
        }
    }
};
bomb(0x0, 0x0, 0x0);
console['log'](dp[k]);