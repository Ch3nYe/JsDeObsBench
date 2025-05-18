'use strict';
var a0_0x1edf3f = a0_0x46bf;
const mod = 0x3b9aca00 + 0x7;
function solve(N, K, A) {
    var _0x16f9cc = a0_0x46bf;
    if (K === 0x0) {
        return 0x1;
    }
    var dp = new Array(K + 0x1)[_0x16f9cc(0x0)](0x0);
    var prefix = new Array(N)[_0x16f9cc(0x0)](0x0)['map'](e => new Array(K + 0x1)[_0x16f9cc(0x0)](0x0));
    for (var i = N - 0x1; i >= 0x0; i--) {
        for (var j = 0x0; j <= K; j++) {
            if (_0x16f9cc(0x1) !== _0x16f9cc(0x2)) {
                if (i === N - 0x1) {
                    if ('AiCFj' !== _0x16f9cc(0x3)) {
                        dp[j] = j <= A[i] ? 0x1 : 0x0;
                        prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
                    } else {
                        for (var j = 0x0; j <= K; j++) {
                            if (i === N - 0x1) {
                                dp[j] = j <= A[i] ? 0x1 : 0x0;
                                prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
                            } else {
                                dp[j] = j <= A[i] ? prefix[i + 0x1][j] % mod : prefix[i + 0x1][j] % mod - prefix[i + 0x1][j - A[i] - 0x1] % mod;
                                prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
                            }
                        }
                    }
                } else {
                    if (_0x16f9cc(0x4) !== _0x16f9cc(0x5)) {
                        dp[j] = j <= A[i] ? prefix[i + 0x1][j] % mod : prefix[i + 0x1][j] % mod - prefix[i + 0x1][j - A[i] - 0x1] % mod;
                        prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
                    } else {
                        dp[j] = j <= A[i] ? prefix[i + 0x1][j] % mod : prefix[i + 0x1][j] % mod - prefix[i + 0x1][j - A[i] - 0x1] % mod;
                        prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
                    }
                }
            } else {
                return 0x1;
            }
        }
    }
    return dp[K] % mod;
}
function a0_0x46bf(XyJNrw, key) {
    var stringArray = a0_0x3ce4();
    a0_0x46bf = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x46bf(XyJNrw, key);
}
function main(input) {
    var _0x4c3039 = a0_0x46bf;
    var lines = input[_0x4c3039(0x6)]('\x0a');
    var NK = lines[0x0][_0x4c3039(0x6)]('\x20')[_0x4c3039(0x7)](l => parseInt(l));
    var N = NK[0x0];
    var K = NK[0x1];
    var A = lines[0x1][_0x4c3039(0x6)]('\x20')[_0x4c3039(0x7)](l => parseInt(l));
    var ans = solve(N, K, A);
    console[_0x4c3039(0x8)](ans);
}
main(require('fs')[a0_0x1edf3f(0x9)](a0_0x1edf3f(0xa), 'utf8'));
function a0_0x3ce4() {
    var _0x5631f5 = [
        'fill',
        'ekZmj',
        'YEgSq',
        'OSKDf',
        'gPFje',
        'KQUJI',
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3ce4 = function () {
        return _0x5631f5;
    };
    return a0_0x3ce4();
}