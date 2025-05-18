const a0_0x309c46 = a0_0x517f;
(function (stringArrayFunction, comparisonValue) {
    const _0x3d527b = a0_0x517f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3d527b(0x9b)) / 0x1 + -parseInt(_0x3d527b(0x9f)) / 0x2 * (-parseInt(_0x3d527b(0x9a)) / 0x3) + parseInt(_0x3d527b(0xa0)) / 0x4 + parseInt(_0x3d527b(0x9c)) / 0x5 * (-parseInt(_0x3d527b(0xa1)) / 0x6) + parseInt(_0x3d527b(0x9e)) / 0x7 + parseInt(_0x3d527b(0xa2)) / 0x8 * (parseInt(_0x3d527b(0x96)) / 0x9) + -parseInt(_0x3d527b(0x99)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x339b, 0x8ee72));
function a0_0x517f(GGhDQS, key) {
    const stringArray = a0_0x339b();
    a0_0x517f = function (index, key) {
        index = index - 0x95;
        let value = stringArray[index];
        return value;
    };
    return a0_0x517f(GGhDQS, key);
}
function a0_0x339b() {
    const _0x4f842e = [
        'utf-8',
        'log',
        '3411pwovke',
        '/dev/stdin',
        'split',
        '15672790FxDvQk',
        '21unRImb',
        '940048fCrmZX',
        '513065QwFCbF',
        'readFileSync',
        '2942282LmxGfg',
        '105052YHIsxB',
        '1976772HVrXRw',
        '6DNjBLQ',
        '696NGjlvl'
    ];
    a0_0x339b = function () {
        return _0x4f842e;
    };
    return a0_0x339b();
}
function Main(input) {
    'use strict';
    const _0x44ecb5 = a0_0x517f;
    const elements = input[_0x44ecb5(0x98)]('\x0a');
    let blackFlag = ![];
    let numBlack = 0x0;
    let numWhiteAfterBlack = 0x0;
    for (let i = 0x0; i < elements[0x0]; i++) {
        if (blackFlag === ![] && elements[0x1][i] === '#') {
            blackFlag = !![];
        }
        if (blackFlag === !![] && elements[0x1][i] === '.') {
            numWhiteAfterBlack++;
        }
        if (elements[0x1][i] === '#') {
            numBlack++;
        }
    }
    if (numWhiteAfterBlack === 0x0 && blackFlag === ![]) {
        console[_0x44ecb5(0x95)]('0');
    } else if (numWhiteAfterBlack === 0x0 && blackFlag === !![]) {
        console['log'](numBlack);
    } else if (numBlack <= numWhiteAfterBlack) {
        console[_0x44ecb5(0x95)](numBlack);
    } else {
        console[_0x44ecb5(0x95)](numWhiteAfterBlack);
    }
}
Main(require('fs')[a0_0x309c46(0x9d)](a0_0x309c46(0x97), a0_0x309c46(0xa3)));