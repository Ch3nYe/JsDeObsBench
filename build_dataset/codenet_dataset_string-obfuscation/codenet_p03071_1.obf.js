'use strict';
function a0_0x5b03() {
    const _0x352416 = [
        '220Oxltgd',
        '26DSqTLB',
        '1856239DztTsd',
        'log',
        '6ScTdEm',
        '9204kwQdFB',
        '889470fUlvqb',
        '11IYJRjM',
        '27nwEzib',
        '/dev/stdin',
        '678234pGYERK',
        'split',
        'map',
        'readFileSync',
        '6395772RDgKSz',
        '285752cTcPmZ',
        '12026BxjQFU'
    ];
    a0_0x5b03 = function () {
        return _0x352416;
    };
    return a0_0x5b03();
}
function a0_0x2735(iQlVeL, key) {
    const stringArray = a0_0x5b03();
    a0_0x2735 = function (index, key) {
        index = index - 0xcf;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2735(iQlVeL, key);
}
const a0_0x322d29 = a0_0x2735;
(function (stringArrayFunction, comparisonValue) {
    const _0x4887fe = a0_0x2735;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4887fe(0xdf)) / 0x1 * (parseInt(_0x4887fe(0xdd)) / 0x2) + parseInt(_0x4887fe(0xd7)) / 0x3 + parseInt(_0x4887fe(0xd2)) / 0x4 * (parseInt(_0x4887fe(0xde)) / 0x5) + -parseInt(_0x4887fe(0xd1)) / 0x6 * (parseInt(_0x4887fe(0xcf)) / 0x7) + -parseInt(_0x4887fe(0xdc)) / 0x8 + parseInt(_0x4887fe(0xd5)) / 0x9 * (-parseInt(_0x4887fe(0xd3)) / 0xa) + -parseInt(_0x4887fe(0xd4)) / 0xb * (-parseInt(_0x4887fe(0xdb)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b03, 0x21424));
function Main(input) {
    const _0x55c137 = a0_0x2735;
    input = input[_0x55c137(0xd8)]('\x0a')[0x0];
    const numbers = input[_0x55c137(0xd8)]('\x20')[_0x55c137(0xd9)](i => {
        return parseInt(i, 0xa);
    });
    const a = numbers[0x0];
    const b = numbers[0x1];
    let result = 0x0;
    if (a > b) {
        result = 0x2 * a - 0x1;
    } else if (b > a) {
        result = 0x2 * b - 0x1;
    } else {
        result = 0x2 * a;
    }
    console[_0x55c137(0xd0)](result);
}
Main(require('fs')[a0_0x322d29(0xda)](a0_0x322d29(0xd6), 'utf8'));