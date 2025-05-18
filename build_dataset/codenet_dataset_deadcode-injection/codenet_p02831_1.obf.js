'use strict';
function a0_0xb17c(WDfDdJ, key) {
    const stringArray = a0_0x2046();
    a0_0xb17c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xb17c(WDfDdJ, key);
}
const a0_0x945529 = a0_0xb17c;
const Main = input => {
    const _0xc6bfad = a0_0xb17c;
    let xs = input[_0xc6bfad(0x0)]()['split']('\x20')[_0xc6bfad(0x1)](v => parseInt(v, 0xa));
    let m = xs[0x0];
    let n = xs[0x1];
    let r = 0x0;
    let d = 0x0;
    let x = m;
    let y = n;
    if (m >= n) {
        while (n > 0x0) {
            let r = m % n;
            m = n;
            n = r;
        }
        d = m;
    } else {
        while (m > 0x0) {
            r = n % m;
            n = m;
            m = r;
        }
        d = n;
    }
    let ans = x * y / d;
    console[_0xc6bfad(0x2)](ans);
};
Main(require('fs')[a0_0x945529(0x3)](a0_0x945529(0x4), a0_0x945529(0x5)));
function a0_0x2046() {
    const _0x3a39d9 = [
        'trim',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2046 = function () {
        return _0x3a39d9;
    };
    return a0_0x2046();
}