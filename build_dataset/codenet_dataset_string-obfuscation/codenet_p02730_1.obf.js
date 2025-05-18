'use strict';
const a0_0xc40835 = a0_0xd5af;
(function (stringArrayFunction, comparisonValue) {
    const _0xeaaf06 = a0_0xd5af;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xeaaf06(0x175)) / 0x1 + parseInt(_0xeaaf06(0x179)) / 0x2 * (-parseInt(_0xeaaf06(0x171)) / 0x3) + parseInt(_0xeaaf06(0x178)) / 0x4 * (parseInt(_0xeaaf06(0x17e)) / 0x5) + -parseInt(_0xeaaf06(0x172)) / 0x6 + parseInt(_0xeaaf06(0x176)) / 0x7 + -parseInt(_0xeaaf06(0x17c)) / 0x8 * (parseInt(_0xeaaf06(0x16f)) / 0x9) + -parseInt(_0xeaaf06(0x180)) / 0xa * (-parseInt(_0xeaaf06(0x17d)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3958, 0x9fdaa));
function a0_0xd5af(jwIetI, key) {
    const stringArray = a0_0x3958();
    a0_0xd5af = function (index, key) {
        index = index - 0x16f;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd5af(jwIetI, key);
}
function a0_0x3958() {
    const _0x178dbb = [
        '153qGNSLV',
        'substr',
        '3qxNhQB',
        '5125224syxISx',
        'length',
        'log',
        '1227800IfDjiw',
        '6358233JCWyWa',
        '/dev/stdin',
        '16jZYtYg',
        '592436KQvNEP',
        'readFileSync',
        'utf8',
        '267144IvXbtX',
        '48994dnaXxR',
        '130715qDJSfD',
        'split',
        '5810tMuMXF'
    ];
    a0_0x3958 = function () {
        return _0x178dbb;
    };
    return a0_0x3958();
}
const is_palindrome = s => {
    const _0x18740a = a0_0xd5af;
    let n = s[_0x18740a(0x173)];
    for (let i = 0x0; i < n; i++) {
        if (s[i] !== s[n - i - 0x1])
            return ![];
    }
    return !![];
};
const main = input => {
    const _0x5cf049 = a0_0xd5af;
    const spi = input[_0x5cf049(0x17f)]('\x0a');
    const s = spi[0x0];
    const n = s[_0x5cf049(0x173)];
    if (is_palindrome(s) && is_palindrome(s['substring'](0x0, (n - 0x1) / 0x2)) && is_palindrome(s[_0x5cf049(0x170)]((n + 0x3) / 0x2 - 0x1)))
        console['log']('Yes');
    else
        console[_0x5cf049(0x174)]('No');
};
main(require('fs')[a0_0xc40835(0x17a)](a0_0xc40835(0x177), a0_0xc40835(0x17b)));