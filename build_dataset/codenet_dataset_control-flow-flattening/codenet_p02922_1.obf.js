'use strict';
const Main = input => {
    const wPpbSW = {
        'HjwtZ': function (x, y) {
            return x < y;
        },
        'PxcnX': function (x, y) {
            return x * y;
        },
        'HcUKk': function (x, y) {
            return x - y;
        }
    };
    let xs = input['trim']()['split']('\x20')['map'](v => parseInt(v, 0xa));
    let a = xs[0x0];
    let b = xs[0x1];
    let ans = 0x1;
    if (a >= b) {
        ans = 0x1;
    } else {
        for (let i = 0x1; wPpbSW['HjwtZ'](wPpbSW['PxcnX'](wPpbSW['HcUKk'](a, 0x1), i) + 0x1, b); i++) {
            ans += 0x1;
        }
    }
    console['log'](ans);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));