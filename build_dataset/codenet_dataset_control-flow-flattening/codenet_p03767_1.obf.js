'use strict';
function Main(input) {
    const uogAlO = {
        'DTHuW': function (x, y) {
            return x < y;
        },
        'qAWKF': function (x, y) {
            return x * y;
        }
    };
    const params = input['trim']()['split']('\x0a');
    const N = Number(params[0x0]['trim']());
    const sortedA = params[0x1]['trim']()['split']('\x20')['map'](Number)['sort']((a, b) => b - a);
    let total = 0x0;
    for (let i = 0x0; uogAlO['DTHuW'](i, N); i++) {
        total += sortedA[uogAlO['qAWKF'](i, 0x2) + 0x1];
    }
    console['log'](total);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));