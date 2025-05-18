'use strict';
const a0_0x3883c0 = a0_0x3b97;
function a0_0x3b97(pEaoVz, key) {
    const stringArray = a0_0xe4bc();
    a0_0x3b97 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b97(pEaoVz, key);
}
function a0_0xe4bc() {
    const _0x4569e2 = [
        'trim',
        'split',
        'push',
        'log',
        'join',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xe4bc = function () {
        return _0x4569e2;
    };
    return a0_0xe4bc();
}
const main = arg => {
    const _0x30d55f = a0_0x3b97;
    arg = arg[_0x30d55f(0x0)]()[_0x30d55f(0x1)]('\x0a');
    const N = parseInt(arg[0x0]);
    const A = arg[0x1][_0x30d55f(0x1)]('\x20')['map'](n => parseInt(0x2 * n));
    let offset = 0x0;
    for (let i = 0x0; i < N; i++) {
        offset = A[i] - offset;
    }
    let x = offset / 0x2;
    let cur = x;
    let answer = [];
    for (let i = 0x0; i < N; i++) {
        answer[_0x30d55f(0x2)](cur);
        cur = A[i] - cur;
    }
    console[_0x30d55f(0x3)](answer[_0x30d55f(0x4)]('\x20'));
};
main(require('fs')['readFileSync'](a0_0x3883c0(0x5), a0_0x3883c0(0x6)));