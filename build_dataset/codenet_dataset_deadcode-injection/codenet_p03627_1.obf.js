'use strict';
const a0_0x44a5f5 = a0_0x5c73;
function a0_0x5c73(jQpaDb, key) {
    const stringArray = a0_0x2922();
    a0_0x5c73 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5c73(jQpaDb, key);
}
function a0_0x2922() {
    const _0x33b5cd = [
        'trim',
        'split',
        'sort',
        'push',
        'log',
        'length',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2922 = function () {
        return _0x33b5cd;
    };
    return a0_0x2922();
}
const main = arg => {
    const _0x568798 = a0_0x5c73;
    arg = arg[_0x568798(0x0)]()[_0x568798(0x1)]('\x0a');
    const N = parseInt(arg[0x0]);
    const A = arg[0x1]['split']('\x20')['map'](n => parseInt(n))[_0x568798(0x2)]((a, b) => a - b);
    let pairNums = [];
    for (let i in A) {
        if (A[i] === A[parseInt(i) + 0x1]) {
            pairNums[_0x568798(0x3)](A[i]);
        }
    }
    pairNums[_0x568798(0x2)]((a, b) => b - a);
    const set = new Set(pairNums);
    console[_0x568798(0x4)](pairNums[_0x568798(0x5)] ? [...set][0x0] * [...set][0x1] : 0x0);
};
main(require('fs')[a0_0x44a5f5(0x6)](a0_0x44a5f5(0x7), 'utf8'));