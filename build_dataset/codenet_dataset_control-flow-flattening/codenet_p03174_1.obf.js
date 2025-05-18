'use strict';
function Main(input) {
    const WZkAKV = {
        'WOXBV': function (x, y) {
            return x < y;
        },
        'ZNBmD': function (x, y) {
            return x > y;
        },
        'zTrBH': function (x, y) {
            return x & y;
        },
        'UnZvu': function (x, y) {
            return x + y;
        },
        'BilIr': function (x, y) {
            return x + y;
        },
        'lUaoG': function (x, y) {
            return x + y;
        },
        'uEPoO': function (x, y) {
            return x + y;
        },
        'fQDEp': function (x, y) {
            return x < y;
        },
        'CtvvS': function (x, y) {
            return x - y;
        },
        'ZoOPF': function (x, y) {
            return x % y;
        }
    };
    input = input['trim']()['split'](/\n/);
    const N = input['shift']() - 0x0;
    const M = Math['pow'](0x2, N);
    const K = WZkAKV['lUaoG'](Math['pow'](0xa, 0x9), 0x7);
    input = input['map'](str => str['split'](/\s+/)['map'](x => x === '1'));
    const Match = input;
    const dp = new Array(N)['fill'](0x0)['map']((x, j) => new Object());
    dp[-0x1] = { 0x0: 0x1 };
    const p = new Array(N)['fill'](0x0)['map']((x, i) => 0x1 << i);
    for (let i = -0x1; WZkAKV['fQDEp'](i, WZkAKV['CtvvS'](N, 0x1)); i++) {
        Object['keys'](dp[i])['forEach'](function (J) {
            J = J - 0x0;
            dp[i][J] %= K;
            for (let j = 0x0; WZkAKV['WOXBV'](j, N); j++) {
                if (WZkAKV['ZNBmD'](WZkAKV['zTrBH'](J, p[j]), 0x0))
                    continue;
                if (Match[WZkAKV['UnZvu'](i, 0x1)][j])
                    dp[WZkAKV['BilIr'](i, 0x1)][WZkAKV['lUaoG'](J, p[j])] = WZkAKV['uEPoO'](dp[i + 0x1][J + p[j]] || 0x0, dp[i][J]);
            }
        });
    }
    console['log'](WZkAKV['ZoOPF'](dp[N - 0x1][M - 0x1] || 0x0, K));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));