'use strict';
const a0_0x12648e = a0_0x3e7c;
function Main(input) {
    const _0x306ecd = a0_0x3e7c;
    input = input['split']('\x0a');
    let N = parseInt(input[0x0]);
    let res = '';
    if (N === 0x0) {
        console[_0x306ecd(0x0)](0x0);
        return;
    }
    while (N !== 0x0) {
        res = String(Math['abs'](N % -0x2)) + res;
        if (N % -0x2 < 0x0)
            N += N < 0x0 ? -0x1 : 0x1;
        N = parseInt(N / -0x2);
    }
    console[_0x306ecd(0x0)](res);
}
Main(require('fs')[a0_0x12648e(0x1)](a0_0x12648e(0x2), 'utf8'));
function a0_0x3e7c(MKZpdE, key) {
    const stringArray = a0_0x2261();
    a0_0x3e7c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3e7c(MKZpdE, key);
}
function a0_0x2261() {
    const _0x5cdef2 = [
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2261 = function () {
        return _0x5cdef2;
    };
    return a0_0x2261();
}