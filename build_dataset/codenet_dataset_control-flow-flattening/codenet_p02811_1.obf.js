'use strict';
const main = arg => {
    const sIxgHF = {
        'zJVfl': function (callee, param1) {
            return callee(param1);
        },
        'calyd': function (x, y) {
            return x >= y;
        },
        'adixQ': function (x, y) {
            return x * y;
        },
        'WUFOK': 'Yes'
    };
    arg = arg['trim']()['split']('\x0a');
    const K = sIxgHF['zJVfl'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const X = parseInt(arg[0x0]['split']('\x20')[0x1]);
    console['log'](sIxgHF['calyd'](sIxgHF['adixQ'](0x1f4, K), X) ? sIxgHF['WUFOK'] : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));