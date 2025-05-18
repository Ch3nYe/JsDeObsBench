'use strict';
const a0_0x5821a3 = a0_0x31ee;
function a0_0x31ee(xKyxWE, key) {
    const stringArray = a0_0x2014();
    a0_0x31ee = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x31ee(xKyxWE, key);
}
function a0_0x2014() {
    const _0x2a744a = [
        'trim',
        'split',
        'shift',
        'toUpperCase',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2014 = function () {
        return _0x2a744a;
    };
    return a0_0x2014();
}
const main = arg => {
    const _0x2d0acb = a0_0x31ee;
    const input = arg[_0x2d0acb(0x0)]()[_0x2d0acb(0x1)]('\x0a');
    let a = input[0x0][_0x2d0acb(0x1)]('');
    let b = input[0x1][_0x2d0acb(0x1)]('');
    let c = input[0x2]['split']('');
    function shiftCard(man) {
        const _0x25290f = a0_0x31ee;
        let out = eval(man)[_0x25290f(0x2)]();
        if (out === undefined) {
            console['log'](man[_0x25290f(0x3)]());
            return;
        }
        shiftCard(out);
    }
    shiftCard('a');
};
main(require('fs')[a0_0x5821a3(0x4)](a0_0x5821a3(0x5), a0_0x5821a3(0x6)));