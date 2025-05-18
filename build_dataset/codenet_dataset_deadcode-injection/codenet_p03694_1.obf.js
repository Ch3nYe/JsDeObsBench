'use strict';
const a0_0x4c31a4 = a0_0x44cd;
function a0_0x21c4() {
    const _0x32eaee = [
        'split',
        'min',
        'max',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x21c4 = function () {
        return _0x32eaee;
    };
    return a0_0x21c4();
}
function a0_0x44cd(YvBpOL, key) {
    const stringArray = a0_0x21c4();
    a0_0x44cd = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x44cd(YvBpOL, key);
}
function main(s) {
    const _0x2a07d6 = a0_0x44cd;
    const houses = s['split']('\x0a')[0x1][_0x2a07d6(0x0)]('\x20')['map'](n => Number(n));
    const min = Math[_0x2a07d6(0x1)](...houses);
    const max = Math[_0x2a07d6(0x2)](...houses);
    const answer = max - min;
    console[_0x2a07d6(0x3)](answer);
}
main(require('fs')['readFileSync'](a0_0x4c31a4(0x4), a0_0x4c31a4(0x5)));