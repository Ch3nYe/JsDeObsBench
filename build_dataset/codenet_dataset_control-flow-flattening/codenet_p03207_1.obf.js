'use strict';
const main = input => {
    const AvgOso = {
        'XFxfn': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'Yhzgn': function (x, y) {
            return x / y;
        },
        'yqtRX': function (x, y) {
            return x < y;
        }
    };
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const N = AvgOso['XFxfn'](parseInt, args[0x0][0x0], 0xa);
    const p = args['slice'](0x1, N + 0x1)['map'](arg => parseInt(arg[0x0], 0xa))['sort']((a, b) => b - a);
    let sum = AvgOso['Yhzgn'](p[0x0], 0x2);
    for (let i = 0x1; AvgOso['yqtRX'](i, N); i++) {
        sum += p[i];
    }
    console['log'](sum);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));