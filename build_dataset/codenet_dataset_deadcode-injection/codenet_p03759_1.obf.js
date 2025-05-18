'use strict';
function a0_0x5ebd(SjMmpt, key) {
    const stringArray = a0_0x2f16();
    a0_0x5ebd = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5ebd(SjMmpt, key);
}
const a0_0x5098f9 = a0_0x5ebd;
const main = arg => {
    const _0x566c52 = a0_0x5ebd;
    const [a, b, c] = arg[_0x566c52(0x0)]('\x0a')[0x0][_0x566c52(0x0)]('\x20');
    console[_0x566c52(0x1)](b - a == c - b ? 'YES' : 'NO');
};
function a0_0x2f16() {
    const _0x54dfa1 = [
        'split',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x2f16 = function () {
        return _0x54dfa1;
    };
    return a0_0x2f16();
}
main(require('fs')[a0_0x5098f9(0x2)]('/dev/stdin', a0_0x5098f9(0x3)));