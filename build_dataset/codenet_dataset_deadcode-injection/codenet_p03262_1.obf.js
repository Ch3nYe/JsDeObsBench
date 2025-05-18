'use strict';
const a0_0x2fb622 = a0_0x1d0d;
function a0_0x1d0d(nsHvSy, key) {
    const stringArray = a0_0x2dcf();
    a0_0x1d0d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1d0d(nsHvSy, key);
}
function a0_0x2dcf() {
    const _0x2690c0 = [
        'split',
        'sort',
        'forEach',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf-8'
    ];
    a0_0x2dcf = function () {
        return _0x2690c0;
    };
    return a0_0x2dcf();
}
const main = input => {
    const _0x20f276 = a0_0x1d0d;
    input = input[_0x20f276(0x0)]('\x0a');
    const N = parseInt(input[0x0][_0x20f276(0x0)]('\x20')[0x0]);
    const X = parseInt(input[0x0][_0x20f276(0x0)]('\x20')[0x1]);
    const arr = input[0x1][_0x20f276(0x0)]('\x20')['map'](v => parseInt(v))[_0x20f276(0x1)]((a, b) => a - b);
    let mostNear = 0x174876e800;
    arr[_0x20f276(0x2)](v => {
        let dist = Math['abs'](X - v);
        if (dist < mostNear) {
            mostNear = dist;
        }
    });
    for (let i = mostNear; i >= 0x0; i--) {
        for (let v of arr) {
            let diff = Math['abs'](v - X);
            if (diff % mostNear !== 0x0) {
                break;
            }
            console[_0x20f276(0x3)](i);
            return;
        }
    }
};
main(require('fs')[a0_0x2fb622(0x4)](a0_0x2fb622(0x5), a0_0x2fb622(0x6)));