'use strict';
const fact = n => {
    const meRZTC = {
        'NDeMS': function (x, y) {
            return x === y;
        },
        'UlawS': function (callee, param1) {
            return callee(param1);
        }
    };
    if (meRZTC['NDeMS'](n, 0x1))
        0x1;
    return n + meRZTC['UlawS'](fact, n - 0x1);
};
function Main(input) {
    const acQDLg = {
        'SftLn': function (x, y) {
            return x < y;
        },
        'eQnKE': function (x, y) {
            return x > y;
        },
        'iGVft': function (x, y) {
            return x - y;
        },
        'hJcnG': function (x, y) {
            return x < y;
        },
        'nPPyS': function (x, y) {
            return x + y;
        },
        'geldr': function (x, y) {
            return x / y;
        },
        'FVERi': function (x, y) {
            return x * y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const array = input[0x0]['split']('\x20')['map'](s => parseInt(s));
    const N = array[0x0];
    const K = array[0x1];
    let A = input[0x1]['split']('\x20')['map'](s => parseInt(s));
    let dp = {};
    for (let i = 0x0; acQDLg['SftLn'](i, N); ++i) {
        const a = A[i];
        if (dp[a])
            continue;
        let tmp = 0x0;
        for (let j = a; acQDLg['eQnKE'](j, 0x0); --j) {
            tmp += j;
        }
        dp[a] = tmp;
    }
    let result = 0x0;
    for (let i = 0x0; acQDLg['SftLn'](i, N - acQDLg['iGVft'](K, 0x1)); ++i) {
        let total = 0x0;
        for (let j = i; acQDLg['hJcnG'](j, acQDLg['nPPyS'](i, K)); ++j) {
            total += acQDLg['geldr'](acQDLg['FVERi'](dp[A[j]], 0x1), A[j]);
        }
        result = Math['max'](total, result);
    }
    console['log'](result['toFixed'](0xc));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));