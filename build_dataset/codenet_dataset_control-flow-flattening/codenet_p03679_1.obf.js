'use strict';
const main = INPUT => {
    const kPeWym = {
        'JqGSO': function (x, y) {
            return x - y;
        },
        'yyrCk': 'delicious',
        'KuhWD': function (x, y) {
            return x < y;
        },
        'YPJRU': function (x, y) {
            return x - y;
        },
        'FjrSK': function (x, y) {
            return x <= y;
        },
        'omxCi': 'safe',
        'SwFGg': 'dangerous'
    };
    const input = INPUT['split']('\x0a')[0x0];
    const [X, A, B] = input['split']('\x20')['map'](n => Number(n));
    if (kPeWym['JqGSO'](A, B) >= 0x0) {
        console['log'](kPeWym['yyrCk']);
    } else if (kPeWym['KuhWD'](kPeWym['YPJRU'](A, B), 0x0) && kPeWym['FjrSK'](Math['abs'](kPeWym['YPJRU'](A, B)), X)) {
        console['log'](kPeWym['omxCi']);
    } else {
        console['log'](kPeWym['SwFGg']);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));