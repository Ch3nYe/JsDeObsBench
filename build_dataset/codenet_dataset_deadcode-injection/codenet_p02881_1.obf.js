'use strict';
const a0_0x41d551 = a0_0x13d2;
function a0_0x13d2(ErINuQ, key) {
    const stringArray = a0_0x3fe6();
    a0_0x13d2 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x13d2(ErINuQ, key);
}
function main(input) {
    const _0xc2570 = a0_0x13d2;
    const N = parseInt(input);
    let distance = N - 0x1;
    for (let a = 0x2; a <= Math[_0xc2570(0x0)](N); ++a) {
        let b = N / a;
        if (Number[_0xc2570(0x1)](b) && a + b - 0x2 < distance) {
            distance = a + b - 0x2;
        }
    }
    console[_0xc2570(0x2)](distance);
}
main(require('fs')['readFileSync'](a0_0x41d551(0x3), a0_0x41d551(0x4)));
function a0_0x3fe6() {
    const _0x554cea = [
        'sqrt',
        'isInteger',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3fe6 = function () {
        return _0x554cea;
    };
    return a0_0x3fe6();
}