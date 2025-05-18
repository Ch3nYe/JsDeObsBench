'use strict';
const a0_0x1b9692 = a0_0x78df;
function a0_0x78df(LtAzni, key) {
    const stringArray = a0_0x470c();
    a0_0x78df = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x78df(LtAzni, key);
}
const INF = 0x3333333333333;
function a0_0x470c() {
    const _0x3d1672 = [
        'split',
        'map',
        'abs',
        'log',
        'readFileSync'
    ];
    a0_0x470c = function () {
        return _0x3d1672;
    };
    return a0_0x470c();
}
function mapint(temp) {
    const _0x5df64c = a0_0x78df;
    return temp[_0x5df64c(0x0)]('\x20')[_0x5df64c(0x1)](v => parseInt(v));
}
function Main(input) {
    const _0x35e38a = a0_0x78df;
    let temp = input['trim']()['split']('\x0a');
    let n = parseInt(temp[0x0]);
    let w = mapint(temp[0x1]);
    let s1 = w[0x0];
    let s2 = 0x0;
    for (let i = 0x1; i < n; i++) {
        s2 += w[i];
    }
    let sa = Math[_0x35e38a(0x2)](s1 - s2);
    let sa2;
    for (let i = 0x1; i < n; i++) {
        s1 += w[i];
        s2 -= w[i];
        sa = Math['min'](sa, Math[_0x35e38a(0x2)](s1 - s2));
    }
    console[_0x35e38a(0x3)](sa);
}
Main(require('fs')[a0_0x1b9692(0x4)]('/dev/stdin', 'utf8'));