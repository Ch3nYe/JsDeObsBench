'use strict';
const a0_0x44ae9b = a0_0x329e;
function a0_0x329e(tjmuBc, key) {
    const stringArray = a0_0x1d51();
    a0_0x329e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x329e(tjmuBc, key);
}
const main = arg => {
    const _0x3c8db1 = a0_0x329e;
    arg = arg[_0x3c8db1(0x0)]()[_0x3c8db1(0x1)]('\x0a');
    const N = parseInt(arg[0x0][_0x3c8db1(0x1)]('\x20')[0x0]);
    const K = parseInt(arg[0x0]['split']('\x20')[0x1]);
    console[_0x3c8db1(0x2)](K === 0x1 ? 0x0 : N - K);
};
function a0_0x1d51() {
    const _0x140017 = [
        'trim',
        'split',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x1d51 = function () {
        return _0x140017;
    };
    return a0_0x1d51();
}
main(require('fs')[a0_0x44ae9b(0x3)]('/dev/stdin', a0_0x44ae9b(0x4)));