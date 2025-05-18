'use strict';
function a0_0x1aea() {
    const _0x4aafec = [
        'trim',
        'split',
        'map',
        'slice',
        'length',
        'sort',
        'fill',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1aea = function () {
        return _0x4aafec;
    };
    return a0_0x1aea();
}
const a0_0x5f01f0 = a0_0x603d;
function a0_0x603d(vbuJhR, key) {
    const stringArray = a0_0x1aea();
    a0_0x603d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x603d(vbuJhR, key);
}
function Main(input) {
    const _0x376ba4 = a0_0x603d;
    input = input[_0x376ba4(0x0)]()['split']('\x0a');
    const array = input[0x0][_0x376ba4(0x1)]('\x20')[_0x376ba4(0x2)](s => parseInt(s));
    const rest = input[_0x376ba4(0x3)](0x1);
    const H = array[0x0];
    const N = array[0x1];
    const magic = [];
    for (let i = 0x0; i < rest[_0x376ba4(0x4)]; ++i) {
        const a = rest[i][_0x376ba4(0x1)]('\x20')[_0x376ba4(0x2)](s => parseInt(s));
        magic['push']([
            a[0x0],
            a[0x1]
        ]);
    }
    magic[_0x376ba4(0x5)]((a, b) => a[0x0] - b[0x0]);
    let dp = Array(H + 0x1)[_0x376ba4(0x6)](Infinity);
    dp[0x0] = 0x0;
    for (let i = 0x0; i < N; ++i) {
        const w = magic[i][0x0];
        const v = magic[i][0x1];
        for (let j = 0x0; j <= H; ++j) {
            const min = Math[_0x376ba4(0x7)](j + w, H);
            dp[min] = Math[_0x376ba4(0x7)](dp[min], dp[j] + v);
        }
    }
    console[_0x376ba4(0x8)](dp[H]);
}
Main(require('fs')[a0_0x5f01f0(0x9)](a0_0x5f01f0(0xa), a0_0x5f01f0(0xb)));