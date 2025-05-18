'use strict';
function main(s) {
    const oAUgPg = {
        'TZDey': function (callee, param1) {
            return callee(param1);
        },
        'Fqmcw': function (callee, param1) {
            return callee(param1);
        }
    };
    s = s['split']('\x0a');
    const K = oAUgPg['TZDey'](Number, s[0x0]['split']('\x20')[0x1]);
    const balls = s[0x1]['split']('\x20')['map'](el => Number(el));
    const countBucket = [...oAUgPg['Fqmcw'](Array, 0x30d41)]['fill'](0x0);
    for (const num of balls) {
        countBucket[num] += 0x1;
    }
    countBucket['sort']((a, b) => b - a);
    const answer = countBucket['slice'](K)['reduce']((a, b) => a + b);
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));