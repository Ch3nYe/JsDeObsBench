'use strict';
const a0_0x40b8cd = a0_0x26d0;
function a0_0x26d0(LpEazQ, key) {
    const stringArray = a0_0x41fe();
    a0_0x26d0 = function (index, key) {
        index = index - 0x19c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x26d0(LpEazQ, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x437276 = a0_0x26d0;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x437276(0x1b3)) / 0x1 * (parseInt(_0x437276(0x19e)) / 0x2) + -parseInt(_0x437276(0x1b0)) / 0x3 + parseInt(_0x437276(0x19d)) / 0x4 * (-parseInt(_0x437276(0x1ac)) / 0x5) + -parseInt(_0x437276(0x1a0)) / 0x6 * (-parseInt(_0x437276(0x1a8)) / 0x7) + parseInt(_0x437276(0x1ad)) / 0x8 * (-parseInt(_0x437276(0x1a4)) / 0x9) + parseInt(_0x437276(0x1b1)) / 0xa * (parseInt(_0x437276(0x1a9)) / 0xb) + -parseInt(_0x437276(0x1af)) / 0xc * (-parseInt(_0x437276(0x1a1)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x41fe, 0x25140));
function a0_0x41fe() {
    const _0x8e447b = [
        '5VdGjwU',
        '456SuxUhn',
        'toString',
        '5064nBVBcu',
        '782220LBlpbI',
        '17990sLyaxz',
        'log',
        '5377AuCBIC',
        'sort',
        'reduce',
        '189844cfpxKA',
        '90lJxtDa',
        'utf8',
        '1552314rnTgQa',
        '14521zGGwiT',
        'length',
        '/dev/stdin',
        '22041YYKLQu',
        'splice',
        'filter',
        'map',
        '7pNUHbv',
        '682YYqKSv',
        'split',
        'findIndex'
    ];
    a0_0x41fe = function () {
        return _0x8e447b;
    };
    return a0_0x41fe();
}
function getPair(num) {
    const _0x29cd32 = a0_0x26d0;
    return parseInt(num[_0x29cd32(0x1ae)](0x2)[_0x29cd32(0x1aa)]('')[_0x29cd32(0x1a7)](x => x === '1' ? '0' : '1')[_0x29cd32(0x19c)]((acc, cur) => acc + cur, ''), 0x2) + 0x1;
}
function main(input) {
    const _0x3f5c16 = a0_0x26d0;
    const inputs = input['split']('\x0a')[_0x3f5c16(0x1a6)](x => x !== '');
    const A = inputs[0x1][_0x3f5c16(0x1aa)]('\x20')[_0x3f5c16(0x1a7)](Number);
    let sortedA = A[_0x3f5c16(0x1b4)]((a, b) => b - a);
    let count = 0x0;
    while (sortedA[_0x3f5c16(0x1a2)] > 0x0) {
        let i = sortedA[0x0];
        sortedA[_0x3f5c16(0x1a5)](0x0, 0x1);
        let j = getPair(i);
        let indexJ = sortedA[_0x3f5c16(0x1ab)](x => x === j);
        if (indexJ >= 0x0) {
            sortedA[_0x3f5c16(0x1a5)](indexJ, 0x1);
            count++;
        }
    }
    console[_0x3f5c16(0x1b2)](count);
}
main(require('fs')['readFileSync'](a0_0x40b8cd(0x1a3), a0_0x40b8cd(0x19f)));