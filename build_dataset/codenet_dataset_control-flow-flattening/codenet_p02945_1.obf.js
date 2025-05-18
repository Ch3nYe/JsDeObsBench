'use strict';
const main = input => {
    const cyQuUC = {
        'IYpLu': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'LaDsh': function (x, y) {
            return x + y;
        },
        'yZOGo': function (x, y) {
            return x - y;
        },
        'kCDKM': function (x, y) {
            return x * y;
        }
    };
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const A = parseInt(args[0x0][0x0], 0xa);
    const B = cyQuUC['IYpLu'](parseInt, args[0x0][0x1], 0xa);
    console['log'](cyQuUC['LaDsh'](Math['max'](A + B, cyQuUC['yZOGo'](A, B), cyQuUC['kCDKM'](A, B)), 0x0));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));