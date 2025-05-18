'use strict';
const a0_0x2b70c9 = a0_0x3b31;
function a0_0x3a52() {
    const _0x3121ec = [
        'split',
        'map',
        'includes',
        'Yes',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x3a52 = function () {
        return _0x3121ec;
    };
    return a0_0x3a52();
}
function a0_0x3b31(byxZIS, key) {
    const stringArray = a0_0x3a52();
    a0_0x3b31 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b31(byxZIS, key);
}
const main = input => {
    const _0x2d0f85 = a0_0x3b31;
    const args = input[_0x2d0f85(0x0)]('\x0a')[_0x2d0f85(0x1)](arg => arg[_0x2d0f85(0x0)]('\x20'));
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
    if (group1['includes'](x) && group1[_0x2d0f85(0x2)](y))
        console['log'](_0x2d0f85(0x3));
    else if (group2[_0x2d0f85(0x2)](x) && group2[_0x2d0f85(0x2)](y))
        console[_0x2d0f85(0x4)](_0x2d0f85(0x3));
    else
        console[_0x2d0f85(0x4)]('No');
};
main(require('fs')[a0_0x2b70c9(0x5)]('/dev/stdin', a0_0x2b70c9(0x6)));