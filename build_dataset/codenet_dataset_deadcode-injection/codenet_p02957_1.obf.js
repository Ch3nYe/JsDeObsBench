'use strict';
function a0_0x3d71() {
    const _0x44696f = [
        'split',
        'map',
        'log',
        'IMPOSSIBLE',
        'readFileSync',
        'utf8'
    ];
    a0_0x3d71 = function () {
        return _0x44696f;
    };
    return a0_0x3d71();
}
function a0_0x7de3(gWrXiu, key) {
    const stringArray = a0_0x3d71();
    a0_0x7de3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7de3(gWrXiu, key);
}
const a0_0x164835 = a0_0x7de3;
const main = input => {
    const _0x1990e7 = a0_0x7de3;
    const args = input[_0x1990e7(0x0)]('\x0a')[_0x1990e7(0x1)](arg => arg[_0x1990e7(0x0)]('\x20'));
    const a = parseInt(args[0x0][0x0], 0xa);
    const b = parseInt(args[0x0][0x1], 0xa);
    const t1 = a + b;
    const t2 = t1 / 0x2;
    if (t2 % 0x1 === 0x0)
        console[_0x1990e7(0x2)](t2);
    else
        console['log'](_0x1990e7(0x3));
};
main(require('fs')[a0_0x164835(0x4)]('/dev/stdin', a0_0x164835(0x5)));