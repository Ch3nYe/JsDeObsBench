'use strict';
const main = arg => {
    const fJDYOb = {
        'lgVFW': function (callee, param1) {
            return callee(param1);
        },
        'fAnxL': function (x, y) {
            return x >= y;
        },
        'nhCrv': 'Yes'
    };
    arg = arg['trim']()['split']('\x0a');
    const N = fJDYOb['lgVFW'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    console['log'](fJDYOb['fAnxL'](N, 0x1e) ? fJDYOb['nhCrv'] : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));