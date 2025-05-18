var MAX_VALUE = 0x3e8;
var inputRaw = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var rows = inputRaw['trim']()['split']('\x0a');
var row1 = rows[0x0]['split']('\x20')['map'](Number);
var N = row1[0x0];
var W = row1[0x1];
var list = rows['slice'](0x1)['map'](_0x15eb61 => _0x15eb61['split']('\x20')['map'](Number));
var dp = Array['from']({ 'length': N + 0x1 }, _0x77107f => Array(N * MAX_VALUE + 0x1)['fill'](0x0));
dp[0x0] = Array(N * MAX_VALUE + 0x1)['fill'](Infinity);
dp[0x0][0x0] = 0x0;
function solve() {
    for (var _0x52637d = 0x0; _0x52637d < N; _0x52637d++) {
        for (var _0x4eb5be = 0x0; _0x4eb5be <= N * MAX_VALUE; _0x4eb5be++) {
            if (list[_0x52637d][0x1] <= _0x4eb5be) {
                var _0xfd7733 = dp[_0x52637d][_0x4eb5be - list[_0x52637d][0x1]] + list[_0x52637d][0x0];
                var _0x39dc4f = dp[_0x52637d][_0x4eb5be];
                dp[_0x52637d + 0x1][_0x4eb5be] = Math['min'](_0xfd7733, _0x39dc4f);
            } else {
                dp[_0x52637d + 0x1][_0x4eb5be] = dp[_0x52637d][_0x4eb5be];
            }
        }
    }
    var _0x4092e9 = 0x0;
    for (var _0x52637d = 0x0; _0x52637d <= N * MAX_VALUE; _0x52637d++)
        if (dp[N][_0x52637d] <= W)
            _0x4092e9 = _0x52637d;
    return _0x4092e9;
}
console['log'](solve());