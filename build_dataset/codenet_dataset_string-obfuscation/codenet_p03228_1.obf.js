'use strict';
function a0_0x3dc0(peUPNS, key) {
    const stringArray = a0_0x4f6c();
    a0_0x3dc0 = function (index, key) {
        index = index - 0x145;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3dc0(peUPNS, key);
}
const a0_0x31065b = a0_0x3dc0;
(function (stringArrayFunction, comparisonValue) {
    const _0x27bfd1 = a0_0x3dc0;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x27bfd1(0x149)) / 0x1 * (-parseInt(_0x27bfd1(0x152)) / 0x2) + parseInt(_0x27bfd1(0x14e)) / 0x3 * (-parseInt(_0x27bfd1(0x148)) / 0x4) + parseInt(_0x27bfd1(0x14d)) / 0x5 + -parseInt(_0x27bfd1(0x147)) / 0x6 * (parseInt(_0x27bfd1(0x151)) / 0x7) + parseInt(_0x27bfd1(0x14b)) / 0x8 + -parseInt(_0x27bfd1(0x150)) / 0x9 + parseInt(_0x27bfd1(0x153)) / 0xa * (parseInt(_0x27bfd1(0x14c)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4f6c, 0x1b2e8));
function a0_0x4f6c() {
    const _0x3175e5 = [
        '4756jLfhgo',
        '23771ncDpQv',
        'utf8',
        '1419560LhjrlJ',
        '35189aMYBZo',
        '311290uYPtDb',
        '123aKqBuM',
        'split',
        '147240rKZjtY',
        '1380211LrKUpN',
        '4DvdTjt',
        '270MSjAwJ',
        'readFileSync',
        'log',
        '6FasNBI'
    ];
    a0_0x4f6c = function () {
        return _0x3175e5;
    };
    return a0_0x4f6c();
}
function Main(input) {
    const _0x37aa44 = a0_0x3dc0;
    const tmp = input[_0x37aa44(0x14f)]('\x20');
    let A = parseInt(tmp[0x0], 0xa);
    let B = parseInt(tmp[0x1], 0xa);
    const K = tmp[0x2];
    for (let i = 0x0; i < K; i++) {
        if (i % 0x2 == 0x0) {
            if (A % 0x2 == 0x1) {
                A--;
            }
            B += A / 0x2;
            A /= 0x2;
        } else {
            if (B % 0x2 == 0x1) {
                B--;
            }
            A += B / 0x2;
            B /= 0x2;
        }
    }
    console[_0x37aa44(0x146)](A, B);
}
Main(require('fs')[a0_0x31065b(0x145)]('/dev/stdin', a0_0x31065b(0x14a)));