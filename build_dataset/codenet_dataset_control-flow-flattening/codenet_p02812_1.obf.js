'use strict';
const Main = input => {
    const Cmwzoq = {
        'XowRH': function (x, y) {
            return x <= y;
        },
        'oDQlY': function (x, y) {
            return x - y;
        },
        'Miivv': function (x, y) {
            return x == y;
        },
        'pVeSf': function (x, y) {
            return x + y;
        },
        'gbztl': function (x, y) {
            return x + y;
        },
        'mzfMW': function (x, y) {
            return x + y;
        },
        'ewigh': 'ABC'
    };
    let xs = input['trim']()['split']('\x0a');
    let N = Number(xs[0x0]);
    let S = xs[0x1]['split']('');
    let ans = 0x0;
    for (let i = 0x0; Cmwzoq['XowRH'](i, Cmwzoq['oDQlY'](N, 0x3)); i++) {
        if (Cmwzoq['Miivv'](Cmwzoq['pVeSf'](Cmwzoq['gbztl'](S[i], S[Cmwzoq['mzfMW'](i, 0x1)]), S[i + 0x2]), Cmwzoq['ewigh'])) {
            ans++;
        }
    }
    console['log'](ans);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));