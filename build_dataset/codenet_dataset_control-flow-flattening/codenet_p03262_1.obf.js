'use strict';
const main = input => {
    const HeOOuy = {
        'tfspV': function (x, y) {
            return x - y;
        },
        'LbCec': function (x, y) {
            return x >= y;
        },
        'ukkrI': function (x, y) {
            return x - y;
        },
        'WbWAG': function (x, y) {
            return x !== y;
        },
        'GYJWu': function (x, y) {
            return x % y;
        }
    };
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]['split']('\x20')[0x0]);
    const X = parseInt(input[0x0]['split']('\x20')[0x1]);
    const arr = input[0x1]['split']('\x20')['map'](v => parseInt(v))['sort']((a, b) => a - b);
    let mostNear = 0x174876e800;
    arr['forEach'](v => {
        let dist = Math['abs'](HeOOuy['tfspV'](X, v));
        if (dist < mostNear) {
            mostNear = dist;
        }
    });
    for (let i = mostNear; HeOOuy['LbCec'](i, 0x0); i--) {
        for (let v of arr) {
            let diff = Math['abs'](HeOOuy['ukkrI'](v, X));
            if (HeOOuy['WbWAG'](HeOOuy['GYJWu'](diff, mostNear), 0x0)) {
                break;
            }
            console['log'](i);
            return;
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));