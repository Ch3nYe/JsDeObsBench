'use strict';
const a0_0x206d10 = a0_0x7b93;
function a0_0x7b93(HUNSEu, key) {
    const stringArray = a0_0x43c9();
    a0_0x7b93 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7b93(HUNSEu, key);
}
function main(s) {
    const _0x427f35 = a0_0x7b93;
    s = s[_0x427f35(0x0)]('\x0a');
    const K = Number(s[0x0][_0x427f35(0x0)]('\x20')[0x1]);
    const balls = s[0x1][_0x427f35(0x0)]('\x20')[_0x427f35(0x1)](el => Number(el));
    const countBucket = [...Array(0x30d41)][_0x427f35(0x2)](0x0);
    for (const num of balls) {
        countBucket[num] += 0x1;
    }
    countBucket[_0x427f35(0x3)]((a, b) => b - a);
    const answer = countBucket['slice'](K)[_0x427f35(0x4)]((a, b) => a + b);
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x206d10(0x5)));
function a0_0x43c9() {
    const _0x5c222d = [
        'split',
        'map',
        'fill',
        'sort',
        'reduce',
        'utf8'
    ];
    a0_0x43c9 = function () {
        return _0x5c222d;
    };
    return a0_0x43c9();
}