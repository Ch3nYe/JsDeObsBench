'use strict';
const main = input => {
    const acGyyM = {
        'yicNf': function (callee, param1) {
            return callee(param1);
        },
        'ZZotb': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x0a');
    const nums = input[0x0]['split']('\x20')['map'](i => parseInt(i));
    const K = acGyyM['yicNf'](parseInt, input[0x1]);
    nums['sort']((a, b) => a - b);
    let n = nums['pop']();
    n = acGyyM['ZZotb'](n, Math['pow'](0x2, K));
    nums['push'](n);
    console['log'](nums['reduce']((p, c) => p + c));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));