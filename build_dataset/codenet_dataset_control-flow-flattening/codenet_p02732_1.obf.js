'use strict';
const combi = function (n) {
    const slMtXq = {
        'nCEzg': function (x, y) {
            return x * y;
        }
    };
    return slMtXq['nCEzg'](n, n - 0x1) / 0x2;
};
const main = arg => {
    const KcvICy = {
        'jjcXG': function (callee, param1) {
            return callee(param1);
        },
        'HACbp': function (x, y) {
            return x < y;
        },
        'KaPWI': function (x, y) {
            return x < y;
        },
        'RETbn': function (callee, param1) {
            return callee(param1);
        },
        'DLcyb': function (x, y) {
            return x < y;
        },
        'sIvlk': function (x, y) {
            return x - y;
        }
    };
    const input = arg['trim']()['split']('\x0a');
    const N = KcvICy['jjcXG'](parseInt, input[0x0]['split']('\x20')[0x0]);
    const A = input[0x1]['split']('\x20')['map'](n => parseInt(n));
    let m = {};
    for (let i = 0x0; KcvICy['HACbp'](i, A['length']); i++) {
        if (!m[A[i]])
            m[A[i]] = 0x1;
        else
            m[A[i]]++;
    }
    let orgCnt = 0x0;
    let keys = Object['keys'](m);
    for (let i = 0x0; KcvICy['KaPWI'](i, keys['length']); i++) {
        orgCnt = orgCnt + KcvICy['RETbn'](combi, m[keys[i]]);
    }
    for (let i = 0x0; KcvICy['DLcyb'](i, A['length']); i++) {
        let num = m[A[i]];
        const diff = KcvICy['jjcXG'](combi, num) - KcvICy['jjcXG'](combi, KcvICy['sIvlk'](num, 0x1));
        console['log'](orgCnt - diff);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));