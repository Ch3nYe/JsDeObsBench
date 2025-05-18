'use strict';
function a0_0x29bb() {
    const _0x414aa9 = [
        'split',
        'log',
        'map',
        'reduce',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x29bb = function () {
        return _0x414aa9;
    };
    return a0_0x29bb();
}
const a0_0x1a6534 = a0_0x1503;
function a0_0x1503(AaGTPQ, key) {
    const stringArray = a0_0x29bb();
    a0_0x1503 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1503(AaGTPQ, key);
}
const main = input => {
    const _0x3b04e1 = a0_0x1503;
    let n = input[0x0][_0x3b04e1(0x0)]('');
    console[_0x3b04e1(0x1)](n[_0x3b04e1(0x2)](val => val == '9' ? 0x1 + '' : 0x9 + '')[_0x3b04e1(0x3)]((acc, cur) => acc + cur));
};
main(require('fs')[a0_0x1a6534(0x4)](a0_0x1a6534(0x5), 'utf8')[a0_0x1a6534(0x0)]('\x0a'));