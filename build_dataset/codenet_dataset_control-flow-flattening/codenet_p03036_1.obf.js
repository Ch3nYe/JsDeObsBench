'use strict';
(function (input) {
    const HwWWBf = {
        'xZCMU': function (x, y) {
            return x < y;
        },
        'TvwJi': function (x, y) {
            return x * y;
        }
    };
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    const r = input[0x0];
    const D = input[0x1];
    let x = input[0x2];
    let ans = new Array(0xa);
    for (let i = 0x0; HwWWBf['xZCMU'](i, 0xa); i++) {
        x = HwWWBf['TvwJi'](r, x) - D;
        ans[i] = x;
    }
    console['log'](ans['join']('\x0a'));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));