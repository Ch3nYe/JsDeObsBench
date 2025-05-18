'use strict';
function a0_0x16bd(txkjFh, key) {
    const stringArray = a0_0x521a();
    a0_0x16bd = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x16bd(txkjFh, key);
}
function a0_0x521a() {
    const _0x2911b3 = [
        'split',
        'map',
        'max',
        'min',
        'readFileSync',
        'utf8'
    ];
    a0_0x521a = function () {
        return _0x2911b3;
    };
    return a0_0x521a();
}
const a0_0x18bc6d = a0_0x16bd;
function main(s) {
    const _0x259e05 = a0_0x16bd;
    const nums = s[_0x259e05(0x0)]('\x0a')[0x0]['split']('\x20')[_0x259e05(0x1)](n => Number(n));
    const ans = Math[_0x259e05(0x2)](...nums) - Math[_0x259e05(0x3)](...nums);
    console['log'](ans);
}
main(require('fs')[a0_0x18bc6d(0x4)]('/dev/stdin', a0_0x18bc6d(0x5)));