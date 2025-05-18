'use strict';
const a0_0x1dd8a1 = a0_0x50ff;
(function (stringArrayFunction, comparisonValue) {
    const _0x1f705a = a0_0x50ff;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1f705a(0x74)) / 0x1 * (-parseInt(_0x1f705a(0x6b)) / 0x2) + parseInt(_0x1f705a(0x73)) / 0x3 * (parseInt(_0x1f705a(0x69)) / 0x4) + -parseInt(_0x1f705a(0x76)) / 0x5 * (-parseInt(_0x1f705a(0x70)) / 0x6) + parseInt(_0x1f705a(0x6d)) / 0x7 * (parseInt(_0x1f705a(0x71)) / 0x8) + parseInt(_0x1f705a(0x6e)) / 0x9 * (parseInt(_0x1f705a(0x67)) / 0xa) + -parseInt(_0x1f705a(0x6f)) / 0xb + -parseInt(_0x1f705a(0x72)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xd810, 0xedcd7));
function main(input) {
    const _0x40ab56 = a0_0x50ff;
    const N = parseInt(input);
    let distance = N - 0x1;
    for (let a = 0x2; a <= Math[_0x40ab56(0x75)](N); ++a) {
        let b = N / a;
        if (Number[_0x40ab56(0x65)](b) && a + b - 0x2 < distance) {
            distance = a + b - 0x2;
        }
    }
    console[_0x40ab56(0x6c)](distance);
}
function a0_0x50ff(hHcZEu, key) {
    const stringArray = a0_0xd810();
    a0_0x50ff = function (index, key) {
        index = index - 0x65;
        let value = stringArray[index];
        return value;
    };
    return a0_0x50ff(hHcZEu, key);
}
main(require('fs')[a0_0x1dd8a1(0x6a)](a0_0x1dd8a1(0x68), a0_0x1dd8a1(0x66)));
function a0_0xd810() {
    const _0x4e9b17 = [
        '150434luwtHG',
        'sqrt',
        '85WPwThb',
        'isInteger',
        'utf8',
        '70rZeiKM',
        '/dev/stdin',
        '40oUMlKW',
        'readFileSync',
        '16zhcrHk',
        'log',
        '389333bsitps',
        '1963701LbpiGn',
        '21160194MzsZQG',
        '206916wJIRxF',
        '184gvWUJK',
        '20462772fRiqmo',
        '1989uIpJAv'
    ];
    a0_0xd810 = function () {
        return _0x4e9b17;
    };
    return a0_0xd810();
}