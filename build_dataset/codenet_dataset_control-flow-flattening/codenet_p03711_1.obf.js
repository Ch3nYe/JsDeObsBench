'use strict';
const main = input => {
    const fauDcp = {
        'etffK': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'XYCxo': 'Yes'
    };
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const x = parseInt(args[0x0][0x0], 0xa);
    const y = fauDcp['etffK'](parseInt, args[0x0][0x1], 0xa);
    const group1 = [
        0x1,
        0x3,
        0x5,
        0x7,
        0x8,
        0xa,
        0xc
    ];
    const group2 = [
        0x4,
        0x6,
        0x9,
        0xb
    ];
    if (group1['includes'](x) && group1['includes'](y))
        console['log']('Yes');
    else if (group2['includes'](x) && group2['includes'](y))
        console['log'](fauDcp['XYCxo']);
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));