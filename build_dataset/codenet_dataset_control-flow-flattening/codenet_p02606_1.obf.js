'use strict';
const main = arg => {
    const hiABZT = {
        'rCrYn': function (callee, param1) {
            return callee(param1);
        },
        'bRxsm': function (callee, param1) {
            return callee(param1);
        },
        'fGvUC': function (x, y) {
            return x <= y;
        },
        'Axvhy': function (x, y) {
            return x % y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const L = hiABZT['rCrYn'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const R = hiABZT['bRxsm'](parseInt, arg[0x0]['split']('\x20')[0x1]);
    const d = hiABZT['rCrYn'](parseInt, arg[0x0]['split']('\x20')[0x2]);
    let answer = 0x0;
    for (let i = L; hiABZT['fGvUC'](i, R); i++) {
        if (hiABZT['Axvhy'](i, d) === 0x0)
            answer++;
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));