'use strict';
const a0_0x497539 = a0_0x1a8e;
(function (stringArrayFunction, comparisonValue) {
    const _0x19cf87 = a0_0x1a8e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x19cf87(0x1ca)) / 0x1 * (parseInt(_0x19cf87(0x1d9)) / 0x2) + parseInt(_0x19cf87(0x1cd)) / 0x3 * (parseInt(_0x19cf87(0x1d0)) / 0x4) + parseInt(_0x19cf87(0x1d3)) / 0x5 + -parseInt(_0x19cf87(0x1ce)) / 0x6 * (-parseInt(_0x19cf87(0x1d6)) / 0x7) + parseInt(_0x19cf87(0x1d4)) / 0x8 * (parseInt(_0x19cf87(0x1da)) / 0x9) + parseInt(_0x19cf87(0x1d8)) / 0xa + -parseInt(_0x19cf87(0x1d2)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25fe, 0x3607c));
const DELIMITER = '\x20';
function a0_0x25fe() {
    const _0x4f4c37 = [
        '109854RwtMED',
        'abs',
        'pow',
        'charAt',
        'log',
        '1WucMow',
        'readFileSync',
        'utf8',
        '6QjANyN',
        '6XVtGeH',
        'length',
        '810296EcRNXI',
        'trim',
        '8674446lPosXM',
        '1434165lJYyDd',
        '56gvSxnO',
        'Unfair',
        '736946reiOTy',
        'split',
        '2750240Uoolxb',
        '295662XuxAyk'
    ];
    a0_0x25fe = function () {
        return _0x4f4c37;
    };
    return a0_0x25fe();
}
const A_INDEX = 0x0;
function a0_0x1a8e(dhbCfA, key) {
    const stringArray = a0_0x25fe();
    a0_0x1a8e = function (index, key) {
        index = index - 0x1c6;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1a8e(dhbCfA, key);
}
const B_INDEX = 0x1;
const K_INDEX = 0x3;
const LIMIT = Math[a0_0x497539(0x1c7)](0xa, 0x12);
const process = input => {
    const _0x337bc4 = a0_0x497539;
    const indexArr = input[_0x337bc4(0x1d7)](DELIMITER);
    const ans = parseInt(indexArr[A_INDEX]) - parseInt(indexArr[B_INDEX]);
    const KString = indexArr[K_INDEX];
    const K = parseInt(KString[_0x337bc4(0x1c8)](KString[_0x337bc4(0x1cf)] - 0x1));
    if (Math[_0x337bc4(0x1c6)](ans) > LIMIT) {
        console[_0x337bc4(0x1c9)](_0x337bc4(0x1d5));
    } else {
        console['log'](K % 0x2 === 0x0 || ans === 0x0 ? ans : -ans);
    }
};
process(require('fs')[a0_0x497539(0x1cb)]('/dev/stdin', a0_0x497539(0x1cc))[a0_0x497539(0x1d1)]());