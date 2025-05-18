'use strict';
const a0_0x532582 = a0_0x40ca;
function a0_0x4991() {
    const _0x4d65d5 = [
        '10TcBNFk',
        '5464gjmlxX',
        '607664oKNjIT',
        '/dev/stdin',
        'readFileSync',
        '930408rOOdNf',
        '9rXpcQF',
        '141053QueZqk',
        '204XZVdrY',
        '1BShOqi',
        '999429nRQrCH',
        'utf8',
        '2458340hywqXL',
        '3549uEbiPs',
        'split',
        '2267814MzIjqE'
    ];
    a0_0x4991 = function () {
        return _0x4d65d5;
    };
    return a0_0x4991();
}
function a0_0x40ca(QCAoGa, key) {
    const stringArray = a0_0x4991();
    a0_0x40ca = function (index, key) {
        index = index - 0x1d9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x40ca(QCAoGa, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x17a58f = a0_0x40ca;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x17a58f(0x1e5)) / 0x1 * (-parseInt(_0x17a58f(0x1de)) / 0x2) + -parseInt(_0x17a58f(0x1e6)) / 0x3 + -parseInt(_0x17a58f(0x1e1)) / 0x4 * (-parseInt(_0x17a58f(0x1dc)) / 0x5) + -parseInt(_0x17a58f(0x1db)) / 0x6 + -parseInt(_0x17a58f(0x1d9)) / 0x7 * (-parseInt(_0x17a58f(0x1dd)) / 0x8) + -parseInt(_0x17a58f(0x1e2)) / 0x9 * (-parseInt(_0x17a58f(0x1e8)) / 0xa) + -parseInt(_0x17a58f(0x1e3)) / 0xb * (-parseInt(_0x17a58f(0x1e4)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4991, 0x3f90e));
function main(input) {
    const _0x3af8d7 = a0_0x40ca;
    let line = input[_0x3af8d7(0x1da)](/\r?\n/g);
    let arr = line[0x0][_0x3af8d7(0x1da)]('\x20');
    const N = parseInt(arr[0x0]), K = parseInt(arr[0x1]);
    let cnt = 0x1;
    while (K ** cnt < N)
        cnt++;
    console['log'](cnt);
}
main(require('fs')[a0_0x532582(0x1e0)](a0_0x532582(0x1df), a0_0x532582(0x1e7)));