'use strict';
function a0_0x1659(HkPcUV, key) {
    const stringArray = a0_0x395a();
    a0_0x1659 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1659(HkPcUV, key);
}
const a0_0x2aa383 = a0_0x1659;
function main(input) {
    const _0x57ef9b = a0_0x1659;
    let kari = input[0x0][_0x57ef9b(0x0)]()[_0x57ef9b(0x1)]('\x20');
    let n = parseInt(kari[0x0]);
    let a = parseInt(kari[0x1]);
    let b = parseInt(kari[0x2]);
    let c = a + b;
    let ans = 0x0;
    if (a === 0x0) {
        console[_0x57ef9b(0x2)](0x0);
    } else if (b === 0x0) {
        if (_0x57ef9b(0x3) === _0x57ef9b(0x4)) {
            console[_0x57ef9b(0x2)](0x0);
        } else {
            console[_0x57ef9b(0x2)](n);
        }
    } else {
        if (n % c < a) {
            ans = Math[_0x57ef9b(0x5)](n / c) * a + n % c;
        } else {
            ans = Math['floor'](n / c) * a + a;
        }
        console[_0x57ef9b(0x2)](ans);
    }
}
function a0_0x395a() {
    const _0x508fdf = [
        'trim',
        'split',
        'log',
        'CsxOy',
        'MsEhk',
        'floor',
        'readFileSync'
    ];
    a0_0x395a = function () {
        return _0x508fdf;
    };
    return a0_0x395a();
}
main(require('fs')[a0_0x2aa383(0x6)]('/dev/stdin', 'utf8')[a0_0x2aa383(0x0)]()[a0_0x2aa383(0x1)]('\x0a'));