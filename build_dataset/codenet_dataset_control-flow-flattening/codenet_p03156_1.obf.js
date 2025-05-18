'use strict';
const Main = input => {
    const gOTeUW = {
        'toIiV': function (callee, param1) {
            return callee(param1);
        },
        'hrylc': function (callee, param1) {
            return callee(param1);
        },
        'dDmdx': function (x, y) {
            return x < y;
        },
        'zgNWW': function (x, y) {
            return x <= y;
        }
    };
    let xs = input['trim']()['split']('\x0a');
    let N = gOTeUW['toIiV'](Number, xs[0x0]);
    let A = Number(xs[0x1]['split']('\x20')[0x0]);
    let B = gOTeUW['hrylc'](Number, xs[0x1]['split']('\x20')[0x1]);
    let P1 = [];
    let P2 = [];
    let P3 = [];
    let P = xs[0x2]['split']('\x20')['map'](v => parseInt(v, 0xa));
    for (let i = 0x0; gOTeUW['dDmdx'](i, N); i++) {
        if (gOTeUW['zgNWW'](P[i], A)) {
            P1['push'](P[i]);
        } else if (gOTeUW['zgNWW'](P[i], B)) {
            P2['push'](P[i]);
        } else {
            P3['push'](P[i]);
        }
    }
    let ans = Math['min'](P1['length'], P2['length'], P3['length']);
    console['log'](ans);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));