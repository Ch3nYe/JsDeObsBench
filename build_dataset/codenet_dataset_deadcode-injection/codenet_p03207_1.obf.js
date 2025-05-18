'use strict';
const a0_0x20cab4 = a0_0x1df1;
const main = input => {
    const _0x208a92 = a0_0x1df1;
    const args = input[_0x208a92(0x0)]('\x0a')['map'](arg => arg[_0x208a92(0x0)]('\x20'));
    const N = parseInt(args[0x0][0x0], 0xa);
    const p = args[_0x208a92(0x1)](0x1, N + 0x1)['map'](arg => parseInt(arg[0x0], 0xa))[_0x208a92(0x2)]((a, b) => b - a);
    let sum = p[0x0] / 0x2;
    for (let i = 0x1; i < N; i++) {
        sum += p[i];
    }
    console[_0x208a92(0x3)](sum);
};
function a0_0x1fb8() {
    const _0x3a7e6c = [
        'split',
        'slice',
        'sort',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1fb8 = function () {
        return _0x3a7e6c;
    };
    return a0_0x1fb8();
}
function a0_0x1df1(ymcITk, key) {
    const stringArray = a0_0x1fb8();
    a0_0x1df1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1df1(ymcITk, key);
}
main(require('fs')[a0_0x20cab4(0x4)](a0_0x20cab4(0x5), 'utf8'));