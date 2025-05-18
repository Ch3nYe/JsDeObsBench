var a0_0x443662 = a0_0x2d2b;
var line;
var S;
var MOD = Math[a0_0x443662(0x0)](0xa, 0x9) + 0x7;
var readline = require(a0_0x443662(0x1));
var rl = readline[a0_0x443662(0x2)]({
    'input': process[a0_0x443662(0x3)],
    'output': process['stdout']
});
rl['on'](a0_0x443662(0x4), function (x) {
    line = x;
});
function a0_0x2d2b(NZBHaL, key) {
    var stringArray = a0_0x2124();
    a0_0x2d2b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d2b(NZBHaL, key);
}
function a0_0x2124() {
    var _0x291b67 = [
        'pow',
        'readline',
        'createInterface',
        'stdin',
        'line',
        'close',
        'split',
        'length',
        'fill',
        'xaxfy',
        'rQnlj',
        'ABC',
        'log'
    ];
    a0_0x2124 = function () {
        return _0x291b67;
    };
    return a0_0x2124();
}
rl['on'](a0_0x443662(0x5), function () {
    var _0x258306 = a0_0x2d2b;
    S = line[_0x258306(0x6)]('');
    dp = Array(S[_0x258306(0x7)] + 0x1);
    for (var i = 0x0; i <= S['length']; i++) {
        dp[i] = Array(0x3 + 0x1)[_0x258306(0x8)](0x0);
    }
    for (var i = S[_0x258306(0x7)]; i >= 0x0; i--) {
        for (var j = 0x3; j >= 0x0; j--) {
            if (i === S['length']) {
                dp[i][j] = j === 0x3 ? 0x1 : 0x0;
            } else {
                if (_0x258306(0x9) === _0x258306(0xa)) {
                    dp[i][j] = j === 0x3 ? 0x1 : 0x0;
                } else {
                    dp[i][j] = dp[i + 0x1][j] * (S[i] === '?' ? 0x3 : 0x1);
                    if (j < 0x3 && (S[i] === '?' || S[i] === _0x258306(0xb)[j])) {
                        dp[i][j] += dp[i + 0x1][j + 0x1];
                    }
                    dp[i][j] %= MOD;
                }
            }
        }
    }
    console[_0x258306(0xc)](dp[0x0][0x0]);
});