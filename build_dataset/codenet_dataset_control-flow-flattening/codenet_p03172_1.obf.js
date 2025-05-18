'use strict';
const mod = 0x3b9aca00 + 0x7;
function solve(N, K, A) {
    var fzRSdl = {
        'UIjaE': '4|3|1|0|2',
        'bxrWK': function (x, y) {
            return x - y;
        },
        'rnoOM': function (x, y) {
            return x >= y;
        },
        'HcpTZ': function (x, y) {
            return x === y;
        },
        'uZsgE': function (x, y) {
            return x >= y;
        },
        'hkCot': function (x, y) {
            return x - y;
        },
        'yVCYL': function (x, y) {
            return x + y;
        },
        'SEWQD': function (x, y) {
            return x % y;
        },
        'bNXBf': function (x, y) {
            return x % y;
        },
        'dryLJ': function (x, y) {
            return x % y;
        },
        'RtepE': function (x, y) {
            return x <= y;
        },
        'FpyFV': function (x, y) {
            return x % y;
        },
        'ByHTy': function (x, y) {
            return x - y;
        },
        'iTwBD': function (x, y) {
            return x + y;
        },
        'WVxaa': function (x, y) {
            return x >= y;
        },
        'Svraz': function (x, y) {
            return x % y;
        },
        'dIkzR': function (x, y) {
            return x % y;
        },
        'KorHK': function (x, y) {
            return x % y;
        },
        'RKGBz': function (x, y) {
            return x + y;
        }
    };
    var PNrXTx = fzRSdl['UIjaE']['split']('|');
    var NFDgdT = 0x0;
    while (!![]) {
        switch (PNrXTx[NFDgdT++]) {
        case '0':
            for (var i = fzRSdl['bxrWK'](N, 0x1); fzRSdl['rnoOM'](i, 0x0); i--) {
                for (var j = 0x0; j <= K; j++) {
                    if (fzRSdl['HcpTZ'](i, N - 0x1)) {
                        dp[j] = j <= A[i] ? 0x1 : 0x0;
                        prefix[i][j] = fzRSdl['uZsgE'](fzRSdl['hkCot'](j, 0x1), 0x0) ? fzRSdl['yVCYL'](fzRSdl['SEWQD'](prefix[i][fzRSdl['bxrWK'](j, 0x1)], mod), fzRSdl['bNXBf'](dp[j], mod)) : fzRSdl['dryLJ'](dp[j], mod);
                    } else {
                        dp[j] = fzRSdl['RtepE'](j, A[i]) ? fzRSdl['FpyFV'](prefix[fzRSdl['yVCYL'](i, 0x1)][j], mod) : fzRSdl['ByHTy'](fzRSdl['dryLJ'](prefix[fzRSdl['iTwBD'](i, 0x1)][j], mod), prefix[fzRSdl['iTwBD'](i, 0x1)][j - A[i] - 0x1] % mod);
                        prefix[i][j] = fzRSdl['WVxaa'](j - 0x1, 0x0) ? fzRSdl['dryLJ'](prefix[i][j - 0x1], mod) + fzRSdl['Svraz'](dp[j], mod) : fzRSdl['dIkzR'](dp[j], mod);
                    }
                }
            }
            continue;
        case '1':
            var prefix = new Array(N)['fill'](0x0)['map'](e => new Array(K + 0x1)['fill'](0x0));
            continue;
        case '2':
            return fzRSdl['KorHK'](dp[K], mod);
        case '3':
            var dp = new Array(fzRSdl['RKGBz'](K, 0x1))['fill'](0x0);
            continue;
        case '4':
            if (K === 0x0) {
                return 0x1;
            }
            continue;
        }
        break;
    }
}
function main(input) {
    var HOrezC = {
        'VExEo': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    var KSqTdy = '5|1|0|2|3|6|4'['split']('|');
    var ysLHNX = 0x0;
    while (!![]) {
        switch (KSqTdy[ysLHNX++]) {
        case '0':
            var N = NK[0x0];
            continue;
        case '1':
            var NK = lines[0x0]['split']('\x20')['map'](l => parseInt(l));
            continue;
        case '2':
            var K = NK[0x1];
            continue;
        case '3':
            var A = lines[0x1]['split']('\x20')['map'](l => parseInt(l));
            continue;
        case '4':
            console['log'](ans);
            continue;
        case '5':
            var lines = input['split']('\x0a');
            continue;
        case '6':
            var ans = HOrezC['VExEo'](solve, N, K, A);
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));