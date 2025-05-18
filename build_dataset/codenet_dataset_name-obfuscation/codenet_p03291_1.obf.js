var line;
var S;
var MOD = Math['pow'](0xa, 0x9) + 0x7;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x5bcfe2) {
    line = _0x5bcfe2;
});
rl['on']('close', function () {
    S = line['split']('');
    dp = Array(S['length'] + 0x1);
    for (var _0x300dd4 = 0x0; _0x300dd4 <= S['length']; _0x300dd4++) {
        dp[_0x300dd4] = Array(0x3 + 0x1)['fill'](0x0);
    }
    for (var _0x300dd4 = S['length']; _0x300dd4 >= 0x0; _0x300dd4--) {
        for (var _0x1bd0bd = 0x3; _0x1bd0bd >= 0x0; _0x1bd0bd--) {
            if (_0x300dd4 === S['length']) {
                dp[_0x300dd4][_0x1bd0bd] = _0x1bd0bd === 0x3 ? 0x1 : 0x0;
            } else {
                dp[_0x300dd4][_0x1bd0bd] = dp[_0x300dd4 + 0x1][_0x1bd0bd] * (S[_0x300dd4] === '?' ? 0x3 : 0x1);
                if (_0x1bd0bd < 0x3 && (S[_0x300dd4] === '?' || S[_0x300dd4] === 'ABC'[_0x1bd0bd])) {
                    dp[_0x300dd4][_0x1bd0bd] += dp[_0x300dd4 + 0x1][_0x1bd0bd + 0x1];
                }
                dp[_0x300dd4][_0x1bd0bd] %= MOD;
            }
        }
    }
    console['log'](dp[0x0][0x0]);
});