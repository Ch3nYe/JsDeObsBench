function a0_0x1a59() {
    var _0x1a7dc7 = [
        'trim',
        'split',
        'map',
        'push',
        'mmYQy',
        'LPRJn',
        'max',
        'log'
    ];
    a0_0x1a59 = function () {
        return _0x1a7dc7;
    };
    return a0_0x1a59();
}
function Main(input) {
    var _0x59820c = a0_0x6fea;
    input = input[_0x59820c(0x0)]()[_0x59820c(0x1)]('\x0a')[_0x59820c(0x2)](function (x) {
        var _0x2e203a = a0_0x6fea;
        return x[_0x2e203a(0x1)]('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var T = parseInt(input[0x0][0x1], 0xa);
    var arr_AB = [];
    for (var i = 0x0; i < N; i++) {
        arr_AB[_0x59820c(0x3)](input[i + 0x1]['map'](e => parseInt(e, 0xa)));
    }
    arr_AB['sort']((a, b) => a[0x0] - b[0x0]);
    var dp = [];
    var Ai, Bi;
    dp[_0x59820c(0x3)](Array['from']({ 'length': T }, () => [
        0x0,
        0x0
    ]));
    for (var i = 0x0; i < N; i++) {
        dp[_0x59820c(0x3)]([]);
        Ai = arr_AB[i][0x0];
        Bi = arr_AB[i][0x1];
        for (var j = 0x0; j < T; j++) {
            dp[i + 0x1][_0x59820c(0x3)]([
                0x0,
                0x0
            ]);
            if (Ai <= j) {
                if (_0x59820c(0x4) !== 'mmYQy') {
                    dp[i + 0x1][j][0x0] = dp[i][j][0x0];
                } else {
                    dp[i + 0x1][j][0x0] = Math['max'](dp[i][j][0x0], dp[i][j - Ai][0x0] + Bi);
                }
            } else {
                if (_0x59820c(0x5) === _0x59820c(0x5)) {
                    dp[i + 0x1][j][0x0] = dp[i][j][0x0];
                } else {
                    return x[_0x59820c(0x1)]('\x20');
                }
            }
            dp[i + 0x1][j][0x1] = Math[_0x59820c(0x6)](dp[i][j][0x1], dp[i][j][0x0] + Bi);
        }
    }
    console[_0x59820c(0x7)](dp[N][T - 0x1][0x1]);
}
function a0_0x6fea(NHETxy, key) {
    var stringArray = a0_0x1a59();
    a0_0x6fea = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6fea(NHETxy, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));