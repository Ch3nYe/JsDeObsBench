'use strict';
const Main = input => {
    const jdsfKi = {
        'wJfCw': function (callee, param1) {
            return callee(param1);
        },
        'xibZO': function (callee, param1) {
            return callee(param1);
        },
        'IgvAZ': function (x, y) {
            return x < y;
        },
        'sDDIK': function (x, y) {
            return x < y;
        }
    };
    let xs = input['trim']()['split']('\x0a');
    let N = jdsfKi['wJfCw'](Number, xs[0x0]['split']('\x20')[0x0]);
    let K = jdsfKi['xibZO'](Number, xs[0x0]['split']('\x20')[0x1]);
    let l = [];
    for (let i = 0x0; jdsfKi['IgvAZ'](i, N); i++) {
        l['push'](xs[0x1]['split']('\x20')[i]);
    }
    const compare = (b, a) => {
        return a - b;
    };
    l['sort'](compare);
    let ans = 0x0;
    for (let i = 0x0; jdsfKi['sDDIK'](i, K); i++) {
        ans += jdsfKi['wJfCw'](Number, l[i]);
    }
    console['log'](ans);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));