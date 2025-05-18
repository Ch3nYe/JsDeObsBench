'use strict';
var a0_0x1f747c = a0_0x4ecc;
(function (stringArrayFunction, comparisonValue) {
    var _0xa82d74 = a0_0x4ecc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xa82d74(0x1a9)) / 0x1 * (parseInt(_0xa82d74(0x1b2)) / 0x2) + -parseInt(_0xa82d74(0x1ae)) / 0x3 + -parseInt(_0xa82d74(0x1ad)) / 0x4 * (-parseInt(_0xa82d74(0x1ac)) / 0x5) + -parseInt(_0xa82d74(0x1b5)) / 0x6 + parseInt(_0xa82d74(0x1b4)) / 0x7 * (parseInt(_0xa82d74(0x1b7)) / 0x8) + -parseInt(_0xa82d74(0x1a8)) / 0x9 + -parseInt(_0xa82d74(0x1a7)) / 0xa * (-parseInt(_0xa82d74(0x1b8)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25c4, 0xee91c));
function a0_0x25c4() {
    var _0x51e371 = [
        '40kUlTKR',
        '4480089EgNpvF',
        'split',
        'map',
        'utf8',
        '92762ecufLM',
        'fill',
        '785092fAjRxH',
        '4754460ZnrCIc',
        '/dev/stdin',
        '8EquJyC',
        '11IDZdOP',
        '36657420wXbHJL',
        '13875210TYXXru',
        '15fyZRhK',
        'log',
        'readFileSync',
        '165515AajcjR'
    ];
    a0_0x25c4 = function () {
        return _0x51e371;
    };
    return a0_0x25c4();
}
function a0_0x4ecc(kJiwBz, key) {
    var stringArray = a0_0x25c4();
    a0_0x4ecc = function (index, key) {
        index = index - 0x1a7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ecc(kJiwBz, key);
}
const mod = 0x3b9aca00 + 0x7;
function solve(N, K, A) {
    var _0x9ef342 = a0_0x4ecc;
    if (K === 0x0) {
        return 0x1;
    }
    var dp = new Array(K + 0x1)[_0x9ef342(0x1b3)](0x0);
    var prefix = new Array(N)[_0x9ef342(0x1b3)](0x0)[_0x9ef342(0x1b0)](e => new Array(K + 0x1)[_0x9ef342(0x1b3)](0x0));
    for (var i = N - 0x1; i >= 0x0; i--) {
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
    return dp[K] % mod;
}
function main(input) {
    var _0x1f91c4 = a0_0x4ecc;
    var lines = input[_0x1f91c4(0x1af)]('\x0a');
    var NK = lines[0x0][_0x1f91c4(0x1af)]('\x20')[_0x1f91c4(0x1b0)](l => parseInt(l));
    var N = NK[0x0];
    var K = NK[0x1];
    var A = lines[0x1][_0x1f91c4(0x1af)]('\x20')[_0x1f91c4(0x1b0)](l => parseInt(l));
    var ans = solve(N, K, A);
    console[_0x1f91c4(0x1aa)](ans);
}
main(require('fs')[a0_0x1f747c(0x1ab)](a0_0x1f747c(0x1b6), a0_0x1f747c(0x1b1)));