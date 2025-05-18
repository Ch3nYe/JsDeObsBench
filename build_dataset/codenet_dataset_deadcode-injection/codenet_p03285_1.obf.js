'use strict';
const a0_0x4c554d = a0_0x5405;
function Main(input) {
    let N = Number(input);
    const func = () => {
        const _0x1a4deb = a0_0x5405;
        if (N < 0x4) {
            console['log']('No');
        } else if (N % 0x4 === 0x0) {
            console[_0x1a4deb(0x0)]('Yes');
        } else if (N % 0x7 === 0x0) {
            console[_0x1a4deb(0x0)](_0x1a4deb(0x1));
        } else {
            N -= 0x4;
            func();
        }
    };
    func();
}
;
function a0_0x5405(BFWdVt, key) {
    const stringArray = a0_0x3c4a();
    a0_0x5405 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5405(BFWdVt, key);
}
Main(require('fs')[a0_0x4c554d(0x2)](a0_0x4c554d(0x3), a0_0x4c554d(0x4))[a0_0x4c554d(0x5)]());
function a0_0x3c4a() {
    const _0x156ec7 = [
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x3c4a = function () {
        return _0x156ec7;
    };
    return a0_0x3c4a();
}