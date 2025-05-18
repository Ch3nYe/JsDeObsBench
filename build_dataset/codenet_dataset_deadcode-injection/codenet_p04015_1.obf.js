function a0_0x59a2(pFCmrR, key) {
    var stringArray = a0_0x47b3();
    a0_0x59a2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59a2(pFCmrR, key);
}
var a0_0x1549d8 = a0_0x59a2;
function main(input) {
    var _0x1f438a = a0_0x59a2;
    input = input[_0x1f438a(0x0)]('\x0a');
    var tmp = input[0x0][_0x1f438a(0x0)]('\x20');
    var N = Number(tmp[0x0]);
    var A = Number(tmp[0x1]);
    var x = [0x0];
    x = x[_0x1f438a(0x1)](input[0x1][_0x1f438a(0x0)]('\x20')[_0x1f438a(0x2)](Number));
    var dp = new Array(N + 0x1);
    for (var i = 0x0; i <= N; ++i) {
        if (_0x1f438a(0x3) !== 'IjlOD') {
            dp[i] = new Array(N + 0x1);
            for (var j = 0x0; j <= N; ++j) {
                dp[i][j] = new Array(A * N + 0x1)[_0x1f438a(0x4)](0x0);
            }
        } else {
            dp[i][j][k] = dp[i - 0x1][j][k] + dp[i - 0x1][j - 0x1][k - x[i]];
        }
    }
    for (var i = 0x0; i < N; ++i)
        dp[i][0x0][0x0] = 0x1;
    for (var i = 0x1; i <= N; ++i) {
        for (var j = 0x1; j <= i; ++j) {
            for (var k = 0x1; k <= A * N; ++k) {
                if (k < x[i]) {
                    dp[i][j][k] = dp[i - 0x1][j][k];
                } else {
                    dp[i][j][k] = dp[i - 0x1][j][k] + dp[i - 0x1][j - 0x1][k - x[i]];
                }
            }
        }
    }
    var ans = 0x0;
    for (var j = 0x1; j <= N; ++j) {
        if ('MnwNT' === _0x1f438a(0x5)) {
            dp[i] = new Array(N + 0x1);
            for (var j = 0x0; j <= N; ++j) {
                dp[i][j] = new Array(A * N + 0x1)['fill'](0x0);
            }
        } else {
            ans += dp[N][j][j * A];
        }
    }
    console['log'](ans);
}
main(require('fs')[a0_0x1549d8(0x6)](a0_0x1549d8(0x7), a0_0x1549d8(0x8)));
function a0_0x47b3() {
    var _0x92a334 = [
        'split',
        'concat',
        'map',
        'mTIwG',
        'fill',
        'dFbUe',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x47b3 = function () {
        return _0x92a334;
    };
    return a0_0x47b3();
}