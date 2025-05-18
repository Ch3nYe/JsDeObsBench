'use strict';
function main(s) {
    const Kaiavf = {
        'fQmNQ': function (x, y) {
            return x - y;
        }
    };
    const houses = s['split']('\x0a')[0x1]['split']('\x20')['map'](n => Number(n));
    const min = Math['min'](...houses);
    const max = Math['max'](...houses);
    const answer = Kaiavf['fQmNQ'](max, min);
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));