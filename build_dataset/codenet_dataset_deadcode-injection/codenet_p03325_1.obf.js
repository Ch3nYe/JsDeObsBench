'use strict';
function a0_0x42f0(ZLlwHN, key) {
    const stringArray = a0_0x517f();
    a0_0x42f0 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x42f0(ZLlwHN, key);
}
function a0_0x517f() {
    const _0x2c073a = [
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x517f = function () {
        return _0x2c073a;
    };
    return a0_0x517f();
}
const a0_0x1092a8 = a0_0x42f0;
function main(s) {
    const _0x13a67b = a0_0x42f0;
    const a = s[_0x13a67b(0x0)]('\x0a')[0x1][_0x13a67b(0x0)]('\x20')['map'](n => Number(n));
    let ans = 0x0;
    for (let n of a) {
        while (n % 0x2 === 0x0) {
            n = n / 0x2;
            ans += 0x1;
        }
    }
    console[_0x13a67b(0x1)](ans);
}
main(require('fs')['readFileSync'](a0_0x1092a8(0x2), a0_0x1092a8(0x3)));