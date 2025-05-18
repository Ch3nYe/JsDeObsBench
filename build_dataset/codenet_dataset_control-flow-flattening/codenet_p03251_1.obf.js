'use strict';
const main = input => {
    const NHzlQG = {
        'SEOQr': function (x, y) {
            return x + y;
        },
        'QzFZA': function (x, y) {
            return x >= y;
        },
        'eNRTY': 'No\x20War'
    };
    const num = input[0x0]['split']('\x20')['map'](val => parseInt(val)), N = num[0x0], M = num[0x1], X = num[0x2], Y = num[0x3], x = input[0x1]['split']('\x20')['map'](val => parseInt(val)), y = input[0x2]['split']('\x20')['map'](val => parseInt(val));
    const xMax = Math['max'](...x), yMin = Math['min'](...y);
    let ans = 0x0;
    for (let z = NHzlQG['SEOQr'](X, 0x1); z <= Y; z++) {
        if (xMax < z && NHzlQG['QzFZA'](yMin, z)) {
            ans = 0x1;
            break;
        }
    }
    console['log'](ans == 0x1 ? NHzlQG['eNRTY'] : 'War');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));