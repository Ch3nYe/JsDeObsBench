'use strict';
const a0_0x3d04e9 = a0_0x5ba4;
function a0_0xf432() {
    const _0x42616e = [
        'split',
        'log',
        '/dev/stdin',
        'utf-8'
    ];
    a0_0xf432 = function () {
        return _0x42616e;
    };
    return a0_0xf432();
}
function a0_0x5ba4(FuwRsz, key) {
    const stringArray = a0_0xf432();
    a0_0x5ba4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5ba4(FuwRsz, key);
}
const main = input => {
    const _0x3f226a = a0_0x5ba4;
    input = input[_0x3f226a(0x0)]('\x20')['map'](v => parseInt(v));
    const W = input[0x0];
    const a = input[0x1];
    const b = input[0x2];
    const aw = a + W;
    const bw = b + W;
    let arr = [];
    if (a <= b) {
        arr = [
            a,
            aw,
            b,
            bw
        ];
    } else {
        arr = [
            b,
            bw,
            a,
            aw
        ];
    }
    if (arr[0x1] < arr[0x2]) {
        console['log'](arr[0x2] - arr[0x1]);
    } else {
        console[_0x3f226a(0x1)](0x0);
    }
};
main(require('fs')['readFileSync'](a0_0x3d04e9(0x2), a0_0x3d04e9(0x3)));