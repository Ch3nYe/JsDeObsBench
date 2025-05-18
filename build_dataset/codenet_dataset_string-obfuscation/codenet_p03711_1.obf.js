'use strict';
const a0_0x350e86 = a0_0x2126;
(function (stringArrayFunction, comparisonValue) {
    const _0x3f2c2b = a0_0x2126;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3f2c2b(0x1d4)) / 0x1 + -parseInt(_0x3f2c2b(0x1da)) / 0x2 + parseInt(_0x3f2c2b(0x1d5)) / 0x3 * (parseInt(_0x3f2c2b(0x1d3)) / 0x4) + parseInt(_0x3f2c2b(0x1d7)) / 0x5 * (parseInt(_0x3f2c2b(0x1d0)) / 0x6) + -parseInt(_0x3f2c2b(0x1cf)) / 0x7 * (-parseInt(_0x3f2c2b(0x1d9)) / 0x8) + parseInt(_0x3f2c2b(0x1db)) / 0x9 + -parseInt(_0x3f2c2b(0x1cb)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3c02, 0xbbf7e));
const main = input => {
    const _0x30cb6f = a0_0x2126;
    const args = input[_0x30cb6f(0x1d6)]('\x0a')[_0x30cb6f(0x1d1)](arg => arg[_0x30cb6f(0x1d6)]('\x20'));
    const x = parseInt(args[0x0][0x0], 0xa);
    const y = parseInt(args[0x0][0x1], 0xa);
    const group1 = [
        0x1,
        0x3,
        0x5,
        0x7,
        0x8,
        0xa,
        0xc
    ];
    const group2 = [
        0x4,
        0x6,
        0x9,
        0xb
    ];
    if (group1[_0x30cb6f(0x1d8)](x) && group1[_0x30cb6f(0x1d8)](y))
        console[_0x30cb6f(0x1d2)]('Yes');
    else if (group2['includes'](x) && group2[_0x30cb6f(0x1d8)](y))
        console[_0x30cb6f(0x1d2)]('Yes');
    else
        console[_0x30cb6f(0x1d2)]('No');
};
function a0_0x3c02() {
    const _0x538637 = [
        '34244250RNJCSc',
        'utf8',
        'readFileSync',
        '/dev/stdin',
        '553uXgDfp',
        '6HcIfmv',
        'map',
        'log',
        '6087476XtazUi',
        '1433954hhPuXh',
        '3cZhDow',
        'split',
        '5370965cHVdgl',
        'includes',
        '18456ycQlgS',
        '1295242fZroYB',
        '5667255QLbsiL'
    ];
    a0_0x3c02 = function () {
        return _0x538637;
    };
    return a0_0x3c02();
}
function a0_0x2126(VwkuRm, key) {
    const stringArray = a0_0x3c02();
    a0_0x2126 = function (index, key) {
        index = index - 0x1cb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2126(VwkuRm, key);
}
main(require('fs')[a0_0x350e86(0x1cd)](a0_0x350e86(0x1ce), a0_0x350e86(0x1cc)));