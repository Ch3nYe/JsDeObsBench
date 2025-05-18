'use strict';
const main = arg => {
    const RoZfcl = {
        'HaAcP': function (x, y) {
            return x - y;
        },
        'iOkJX': function (x, y) {
            return x >= y;
        },
        'LKFXR': 'YES'
    };
    arg = arg['trim']()['split']('\x0a');
    const S = arg[0x0]['split']('');
    const win = S['filter'](n => n === 'o')['length'];
    const rest = RoZfcl['HaAcP'](0xf, S['length']);
    console['log'](RoZfcl['iOkJX'](rest + win, 0x8) ? RoZfcl['LKFXR'] : 'NO');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));