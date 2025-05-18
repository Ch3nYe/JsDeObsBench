'use strict';
const main = arg => {
    const KnEwUY = {
        'AeOnn': function (callee, param1) {
            return callee(param1);
        },
        'sWKHw': function (x, y) {
            return x <= y;
        },
        'Hoqbn': function (x, y) {
            return x * y;
        },
        'sPrJU': function (x, y) {
            return x === y;
        },
        'qXbtP': function (x, y) {
            return x === y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const A = KnEwUY['AeOnn'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const B = parseInt(arg[0x0]['split']('\x20')[0x1]);
    for (let i = 0x1; KnEwUY['sWKHw'](i, 0x2710); i++) {
        const temp1 = Math['floor'](KnEwUY['Hoqbn'](i, 0.08));
        const temp2 = Math['floor'](i * 0.1);
        if (KnEwUY['sPrJU'](temp1, A) && KnEwUY['qXbtP'](temp2, B)) {
            console['log'](i);
            return;
        }
    }
    console['log'](-0x1);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));