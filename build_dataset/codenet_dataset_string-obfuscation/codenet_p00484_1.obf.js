var a0_0xd98f28 = a0_0x1f37;
(function (stringArrayFunction, comparisonValue) {
    var _0x47e7d8 = a0_0x1f37;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x47e7d8(0x14f)) / 0x1 * (parseInt(_0x47e7d8(0x14b)) / 0x2) + -parseInt(_0x47e7d8(0x158)) / 0x3 * (-parseInt(_0x47e7d8(0x149)) / 0x4) + parseInt(_0x47e7d8(0x14a)) / 0x5 * (-parseInt(_0x47e7d8(0x154)) / 0x6) + parseInt(_0x47e7d8(0x151)) / 0x7 + -parseInt(_0x47e7d8(0x153)) / 0x8 + -parseInt(_0x47e7d8(0x157)) / 0x9 + -parseInt(_0x47e7d8(0x15b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1704, 0xce14c));
var input = require('fs')[a0_0xd98f28(0x14e)](a0_0xd98f28(0x14c), 'utf8');
var arr = input[a0_0xd98f28(0x159)]()['split']('\x0a');
var nk = arr['shift']()[a0_0xd98f28(0x14d)]('\x20')[a0_0xd98f28(0x156)](Number);
var n = nk[0x0];
var k = nk[0x1];
var N = [];
for (var i = 0x0; i < n; i++)
    N[a0_0xd98f28(0x152)](arr[a0_0xd98f28(0x150)]()[a0_0xd98f28(0x14d)]('\x20')[a0_0xd98f28(0x156)](Number));
var dp = [];
function a0_0x1704() {
    var _0x49cede = [
        'map',
        '7659954lFAJdi',
        '1205466neIXzU',
        'trim',
        'max',
        '5327910DZBimC',
        'forEach',
        '8unvrum',
        '1423165TPwyen',
        '118ZdBQtS',
        '/dev/stdin',
        'split',
        'readFileSync',
        '13321FOwPke',
        'shift',
        '11756206SVADos',
        'push',
        '3774160slynxb',
        '12nyqdFY',
        'log'
    ];
    a0_0x1704 = function () {
        return _0x49cede;
    };
    return a0_0x1704();
}
for (var i = 0x0; i <= 0xa; i++)
    dp[i] = [];
var DP = [];
for (var i = 0x0; i <= 0xa; i++)
    DP[i] = [];
N['forEach'](function (v) {
    var _0x50fd9b = a0_0xd98f28;
    var c = v[0x0];
    var g = v[0x1];
    dp[g][_0x50fd9b(0x152)](c);
});
dp[a0_0xd98f28(0x148)](function (v, i) {
    v['sort'](function (a, b) {
        return b - a;
    });
    v['forEach'](function (value, j) {
        if (j == 0x0)
            DP[i][j] = dp[i][j];
        if (j > 0x0) {
            dp[i][j] += dp[i][j - 0x1];
            DP[i][j] = dp[i][j] + (j + 0x1) * j;
        }
    });
});
var dp = [];
function a0_0x1f37(UiThCI, key) {
    var stringArray = a0_0x1704();
    a0_0x1f37 = function (index, key) {
        index = index - 0x148;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f37(UiThCI, key);
}
for (var i = 0x0; i <= n; i++)
    dp[i] = 0x0;
var bomb = function (cnt, start, sum) {
    var _0x4d0137 = a0_0xd98f28;
    dp[cnt] = Math[_0x4d0137(0x15a)](dp[cnt], sum);
    if (sum == k)
        return;
    for (var i = start; i < DP['length']; i++) {
        DP[i][_0x4d0137(0x148)](function (v, index) {
            bomb(cnt + (index + 0x1), i + 0x1, sum + v);
        });
    }
};
bomb(0x0, 0x0, 0x0);
console[a0_0xd98f28(0x155)](dp[k]);