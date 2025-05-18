'use strict';
function main(input) {
    const Youzji = {
        'jyTSx': function (x, y) {
            return x < y;
        },
        'QHHeX': function (x, y) {
            return x == y;
        },
        'EVXrI': function (x, y) {
            return x >= y;
        },
        'aIxQP': function (x, y) {
            return x * y;
        }
    };
    input = input['split'](/\r?\n/);
    input = input[0x1]['split']('\x20')['map'](v => ~~v)['sort']((a, b) => b - a);
    let ans = 0x0;
    let sticks = [];
    let prev = input[0x0];
    for (let i = 0x1; Youzji['jyTSx'](i, input['length']); i++) {
        if (Youzji['QHHeX'](prev, input[i])) {
            sticks['push'](prev);
            sticks['push'](input[i]);
            prev = 0x0;
        } else {
            prev = input[i];
        }
    }
    if (Youzji['EVXrI'](sticks['length'], 0x4)) {
        ans = Youzji['aIxQP'](sticks[0x0], sticks[0x3]);
        console['log'](ans);
    } else {
        console['log'](0x0);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));