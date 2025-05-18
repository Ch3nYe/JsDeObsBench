'use strict';
function a0_0x545e(kYHshm, key) {
    const stringArray = a0_0x2eac();
    a0_0x545e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x545e(kYHshm, key);
}
const a0_0x8d08b8 = a0_0x545e;
function a0_0x2eac() {
    const _0x3a4e0d = [
        'trim',
        'split',
        'sort',
        '/dev/stdin',
        'utf-8'
    ];
    a0_0x2eac = function () {
        return _0x3a4e0d;
    };
    return a0_0x2eac();
}
function main(input) {
    const _0x321992 = a0_0x545e;
    input = input[_0x321992(0x0)]()[_0x321992(0x1)]('\x20');
    const N = Number(input[0x0]);
    const X = Number(input[0x1]);
    const T = Number(input[0x2]);
    let ans = 0x0;
    let i;
    for (i = 0x0; ans < N; i++) {
        ans += X;
    }
    console['log'](T * i);
}
function numberSort(array) {
    const _0x562dd2 = a0_0x545e;
    array[_0x562dd2(0x2)](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
main(require('fs')['readFileSync'](a0_0x8d08b8(0x3), a0_0x8d08b8(0x4)));