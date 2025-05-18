'use strict';
function a0_0x52cb(iMybmB, key) {
    const stringArray = a0_0x170f();
    a0_0x52cb = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x52cb(iMybmB, key);
}
const a0_0x30f7de = a0_0x52cb;
function a0_0x170f() {
    const _0x439854 = [
        'trim',
        'split',
        'sort',
        'igVtn',
        'log',
        'IMPOSSIBLE',
        'min',
        'POSSIBLE',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x170f = function () {
        return _0x439854;
    };
    return a0_0x170f();
}
const getGcd = (a, b) => {
    return a ? getGcd(b % a, a) : b;
};
const main = arg => {
    const _0x4e485c = a0_0x52cb;
    arg = arg[_0x4e485c(0x0)]()[_0x4e485c(0x1)]('\x0a');
    const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const K = parseInt(arg[0x0][_0x4e485c(0x1)]('\x20')[0x1]);
    let A = arg[0x1][_0x4e485c(0x1)]('\x20')['map'](n => parseInt(n))[_0x4e485c(0x2)]((a, b) => b - a);
    const max = A[0x0];
    let gcd = Infinity;
    if (max < K) {
        if (_0x4e485c(0x3) !== _0x4e485c(0x3)) {
            return a ? getGcd(b % a, a) : b;
        } else {
            console[_0x4e485c(0x4)](_0x4e485c(0x5));
            return;
        }
    }
    for (let i = 0x0; i < N; i++) {
        for (let j = i + 0x1; j < N; j++) {
            gcd = Math[_0x4e485c(0x6)](gcd, getGcd(A[i], A[j]));
        }
    }
    console[_0x4e485c(0x4)](K % gcd === 0x0 ? _0x4e485c(0x7) : _0x4e485c(0x5));
};
main(require('fs')[a0_0x30f7de(0x8)](a0_0x30f7de(0x9), 'utf8'));