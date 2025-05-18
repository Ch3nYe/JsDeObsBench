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
N['forEach'](function (_0x14fd30) {
    var _0x5f1d86 = _0x14fd30[0x0];
    var _0x591a88 = _0x14fd30[0x1];
    dp[_0x591a88]['push'](_0x5f1d86);
});
dp['forEach'](function (_0x4e3943, _0x93c415) {
    _0x4e3943['sort'](function (_0x1de05f, _0x57692e) {
        return _0x57692e - _0x1de05f;
    });
    _0x4e3943['forEach'](function (_0x2c7b23, _0x4cec8a) {
        if (_0x4cec8a == 0x0)
            DP[_0x93c415][_0x4cec8a] = dp[_0x93c415][_0x4cec8a];
        if (_0x4cec8a > 0x0) {
            dp[_0x93c415][_0x4cec8a] += dp[_0x93c415][_0x4cec8a - 0x1];
            DP[_0x93c415][_0x4cec8a] = dp[_0x93c415][_0x4cec8a] + (_0x4cec8a + 0x1) * _0x4cec8a;
        }
    });
});
var dp = [];
for (var i = 0x0; i <= n; i++)
    dp[i] = 0x0;
var bomb = function (_0x22282f, _0x4f3b5e, _0x5c150e) {
    dp[_0x22282f] = Math['max'](dp[_0x22282f], _0x5c150e);
    if (_0x5c150e == k)
        return;
    for (var _0x23bff5 = _0x4f3b5e; _0x23bff5 < DP['length']; _0x23bff5++) {
        DP[_0x23bff5]['forEach'](function (_0x4f2eae, _0x455d69) {
            bomb(_0x22282f + (_0x455d69 + 0x1), _0x23bff5 + 0x1, _0x5c150e + _0x4f2eae);
        });
    }
};
bomb(0x0, 0x0, 0x0);
console['log'](dp[k]);