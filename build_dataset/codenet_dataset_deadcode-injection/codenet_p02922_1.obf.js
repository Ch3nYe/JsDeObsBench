'use strict';
const a0_0x46776f = a0_0x2468;
function a0_0x7f30() {
    const _0x52ae7e = [
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x7f30 = function () {
        return _0x52ae7e;
    };
    return a0_0x7f30();
}
function a0_0x2468(qOjNgc, key) {
    const stringArray = a0_0x7f30();
    a0_0x2468 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2468(qOjNgc, key);
}
const Main = input => {
    const _0x17f851 = a0_0x2468;
    let xs = input['trim']()['split']('\x20')[_0x17f851(0x0)](v => parseInt(v, 0xa));
    let a = xs[0x0];
    let b = xs[0x1];
    let ans = 0x1;
    if (a >= b) {
        ans = 0x1;
    } else {
        for (let i = 0x1; (a - 0x1) * i + 0x1 < b; i++) {
            ans += 0x1;
        }
    }
    console[_0x17f851(0x1)](ans);
};
Main(require('fs')[a0_0x46776f(0x2)](a0_0x46776f(0x3), a0_0x46776f(0x4)));