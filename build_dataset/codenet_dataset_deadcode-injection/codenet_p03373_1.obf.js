'use strict';
const a0_0x584f9e = a0_0x1056;
function main(s) {
    const _0x542ddd = a0_0x1056;
    s = s[_0x542ddd(0x0)]('\x0a')[0x0][_0x542ddd(0x0)]('\x20')[_0x542ddd(0x1)](n => Number(n));
    const A = s[0x0];
    const B = s[0x1];
    const C = s[0x2];
    const X = s[0x3];
    const Y = s[0x4];
    const min = Math[_0x542ddd(0x2)](X, Y);
    const case1 = A * X + B * Y;
    const case2 = 0x2 * C * min + (X - min) * A + (Y - min) * B;
    const case3 = 0x2 * C * Math['max'](X, Y);
    const answer = Math[_0x542ddd(0x2)](...[
        case1,
        case2,
        case3
    ]);
    console[_0x542ddd(0x3)](answer);
}
function a0_0x30b9() {
    const _0x564c52 = [
        'split',
        'map',
        'min',
        'log',
        'utf8'
    ];
    a0_0x30b9 = function () {
        return _0x564c52;
    };
    return a0_0x30b9();
}
function a0_0x1056(olceCp, key) {
    const stringArray = a0_0x30b9();
    a0_0x1056 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1056(olceCp, key);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x584f9e(0x4)));