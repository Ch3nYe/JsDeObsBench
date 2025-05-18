'use strict';
const getGcd = (a, b) => {
    const tUwOgA = {
        'hXOud': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'mcDRR': function (x, y) {
            return x % y;
        }
    };
    return a ? tUwOgA['hXOud'](getGcd, tUwOgA['mcDRR'](b, a), a) : b;
};
const main = arg => {
    const gGeHLG = {
        'yoRwk': function (callee, param1) {
            return callee(param1);
        },
        'QbeAJ': 'IMPOSSIBLE',
        'YTPHZ': function (x, y) {
            return x < y;
        },
        'Wfpys': function (x, y) {
            return x + y;
        },
        'JCCSa': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'WbYOy': function (x, y) {
            return x === y;
        },
        'gQslD': function (x, y) {
            return x % y;
        },
        'dfmhO': 'POSSIBLE'
    };
    arg = arg['trim']()['split']('\x0a');
    const N = gGeHLG['yoRwk'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const K = parseInt(arg[0x0]['split']('\x20')[0x1]);
    let A = arg[0x1]['split']('\x20')['map'](n => parseInt(n))['sort']((a, b) => b - a);
    const max = A[0x0];
    let gcd = Infinity;
    if (max < K) {
        console['log'](gGeHLG['QbeAJ']);
        return;
    }
    for (let i = 0x0; gGeHLG['YTPHZ'](i, N); i++) {
        for (let j = gGeHLG['Wfpys'](i, 0x1); gGeHLG['YTPHZ'](j, N); j++) {
            gcd = Math['min'](gcd, gGeHLG['JCCSa'](getGcd, A[i], A[j]));
        }
    }
    console['log'](gGeHLG['WbYOy'](gGeHLG['gQslD'](K, gcd), 0x0) ? gGeHLG['dfmhO'] : 'IMPOSSIBLE');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));