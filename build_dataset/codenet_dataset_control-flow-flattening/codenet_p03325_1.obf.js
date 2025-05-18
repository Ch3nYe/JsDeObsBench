'use strict';
function main(s) {
    const mHuDLt = {
        'knplA': function (x, y) {
            return x === y;
        },
        'OjODh': function (x, y) {
            return x % y;
        },
        'MHNIs': function (x, y) {
            return x / y;
        }
    };
    const a = s['split']('\x0a')[0x1]['split']('\x20')['map'](n => Number(n));
    let ans = 0x0;
    for (let n of a) {
        while (mHuDLt['knplA'](mHuDLt['OjODh'](n, 0x2), 0x0)) {
            n = mHuDLt['MHNIs'](n, 0x2);
            ans += 0x1;
        }
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));