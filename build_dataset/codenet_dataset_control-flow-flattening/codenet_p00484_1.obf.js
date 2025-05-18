var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nk = arr['shift']()['split']('\x20')['map'](Number);
var n = nk[0x0];
var k = nk[0x1];
var N = [];
for (var i = 0x0; i < n; i++)
    N['push'](arr['shift']()['split']('\x20')['map'](Number));
var dp = [];
for (var i = 0x0; i <= 0xa; i++)
    dp[i] = [];
var DP = [];
for (var i = 0x0; i <= 0xa; i++)
    DP[i] = [];
N['forEach'](function (v) {
    var c = v[0x0];
    var g = v[0x1];
    dp[g]['push'](c);
});
dp['forEach'](function (v, i) {
    var iBTndy = {
        'AFMXa': function (x, y) {
            return x == y;
        },
        'IJope': function (x, y) {
            return x > y;
        },
        'HsQga': function (x, y) {
            return x - y;
        },
        'PzZhc': function (x, y) {
            return x + y;
        }
    };
    v['sort'](function (a, b) {
        return b - a;
    });
    v['forEach'](function (value, j) {
        if (iBTndy['AFMXa'](j, 0x0))
            DP[i][j] = dp[i][j];
        if (iBTndy['IJope'](j, 0x0)) {
            dp[i][j] += dp[i][iBTndy['HsQga'](j, 0x1)];
            DP[i][j] = dp[i][j] + iBTndy['PzZhc'](j, 0x1) * j;
        }
    });
});
var dp = [];
for (var i = 0x0; i <= n; i++)
    dp[i] = 0x0;
var bomb = function (cnt, start, sum) {
    var hlPZcQ = {
        'hnVfv': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'KYZoV': function (x, y) {
            return x + y;
        },
        'cJpGK': function (x, y) {
            return x + y;
        },
        'dfmou': function (x, y) {
            return x == y;
        }
    };
    dp[cnt] = Math['max'](dp[cnt], sum);
    if (hlPZcQ['dfmou'](sum, k))
        return;
    for (var i = start; i < DP['length']; i++) {
        DP[i]['forEach'](function (v, index) {
            hlPZcQ['hnVfv'](bomb, cnt + hlPZcQ['KYZoV'](index, 0x1), hlPZcQ['KYZoV'](i, 0x1), hlPZcQ['cJpGK'](sum, v));
        });
    }
};
bomb(0x0, 0x0, 0x0);
console['log'](dp[k]);