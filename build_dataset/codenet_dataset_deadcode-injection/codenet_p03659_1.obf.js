'use strict';
const a0_0xad2be4 = a0_0x1444;
const main = arg => {
    const _0x310d2d = a0_0x1444;
    arg = arg[_0x310d2d(0x0)]()['split']('\x0a');
    const N = parseInt(arg[0x0]);
    const A = arg[0x1]['split']('\x20')[_0x310d2d(0x1)](n => parseInt(n));
    const totalSum = A[_0x310d2d(0x2)]((m, n) => m + n);
    let left = A[0x0];
    let right = totalSum - A[0x0];
    let answer = Infinity;
    for (let i = 0x0; i < N - 0x1; i++) {
        let diff = Math[_0x310d2d(0x3)](right - left);
        answer = Math[_0x310d2d(0x4)](answer, diff);
        right -= A[parseInt(i) + 0x1];
        left += A[parseInt(i) + 0x1];
    }
    console[_0x310d2d(0x5)](answer);
};
main(require('fs')[a0_0xad2be4(0x6)](a0_0xad2be4(0x7), a0_0xad2be4(0x8)));
function a0_0x1444(uZnccE, key) {
    const stringArray = a0_0xd22a();
    a0_0x1444 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1444(uZnccE, key);
}
function a0_0xd22a() {
    const _0x76db4f = [
        'trim',
        'map',
        'reduce',
        'abs',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xd22a = function () {
        return _0x76db4f;
    };
    return a0_0xd22a();
}