'use strict';
function Main(INPUT) {
    const gZbyTG = {
        'eTVJf': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'RbtGK': function (x, y) {
            return x >= y;
        },
        'eqrec': function (x, y) {
            return x + y;
        },
        'iDzFv': 'error'
    };
    const input = INPUT['split']('\x0a')[0x0]['split']('\x20');
    const A = parseInt(input[0x0], 0xa);
    const B = gZbyTG['eTVJf'](parseInt, input[0x1], 0xa);
    console['log'](gZbyTG['RbtGK'](gZbyTG['eqrec'](A, B), 0xa) ? gZbyTG['iDzFv'] : gZbyTG['eqrec'](A, B));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));