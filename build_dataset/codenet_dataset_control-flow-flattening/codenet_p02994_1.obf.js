'use strict';
function main(stdin) {
    const pKleba = {
        'aXXSL': function (x, y) {
            return x < y;
        },
        'BXzIr': function (x, y) {
            return x + y;
        },
        'vfsoI': function (x, y) {
            return x - y;
        }
    };
    const input = stdin['split']('\x20')['map'](v => parseInt(v, 0xa));
    const N = input[0x0];
    const L = input[0x1];
    let sum = 0x0;
    let min = Infinity;
    for (let i = L; pKleba['aXXSL'](i, pKleba['BXzIr'](L, N)); ++i) {
        sum += i;
        if (pKleba['aXXSL'](Math['abs'](i), Math['abs'](min)))
            min = i;
    }
    console['log'](pKleba['vfsoI'](sum, min));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));