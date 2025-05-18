'use strict';
const a0_0x57b012 = a0_0x5c0f;
(function (stringArrayFunction, comparisonValue) {
    const _0x4b61e3 = a0_0x5c0f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4b61e3(0x96)) / 0x1 + parseInt(_0x4b61e3(0x98)) / 0x2 * (parseInt(_0x4b61e3(0x9e)) / 0x3) + parseInt(_0x4b61e3(0x95)) / 0x4 + parseInt(_0x4b61e3(0xa0)) / 0x5 * (-parseInt(_0x4b61e3(0x93)) / 0x6) + parseInt(_0x4b61e3(0x9c)) / 0x7 + parseInt(_0x4b61e3(0x9d)) / 0x8 * (parseInt(_0x4b61e3(0x97)) / 0x9) + -parseInt(_0x4b61e3(0x9a)) / 0xa * (parseInt(_0x4b61e3(0x9f)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x489a, 0xd38d7));
function Main(input) {
    const _0x2df337 = a0_0x5c0f;
    input = input[_0x2df337(0x99)]('\x0a');
    let N = parseInt(input[0x0]);
    let res = '';
    if (N === 0x0) {
        console['log'](0x0);
        return;
    }
    while (N !== 0x0) {
        res = String(Math['abs'](N % -0x2)) + res;
        if (N % -0x2 < 0x0)
            N += N < 0x0 ? -0x1 : 0x1;
        N = parseInt(N / -0x2);
    }
    console['log'](res);
}
Main(require('fs')[a0_0x57b012(0x9b)](a0_0x57b012(0x94), a0_0x57b012(0xa1)));
function a0_0x5c0f(SbVhpi, key) {
    const stringArray = a0_0x489a();
    a0_0x5c0f = function (index, key) {
        index = index - 0x93;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5c0f(SbVhpi, key);
}
function a0_0x489a() {
    const _0x373c8e = [
        '31077UiKmce',
        '91844OxOzRY',
        'split',
        '1790PkubhH',
        'readFileSync',
        '101059lzPOPK',
        '3232ePyEhW',
        '9xylWTa',
        '135883TkSZvv',
        '5tnPOWC',
        'utf8',
        '1143666GmYtOg',
        '/dev/stdin',
        '3896528WDshDW',
        '746970mRWpyu'
    ];
    a0_0x489a = function () {
        return _0x373c8e;
    };
    return a0_0x489a();
}