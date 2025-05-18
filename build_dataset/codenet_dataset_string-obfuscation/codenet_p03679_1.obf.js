'use strict';
const a0_0x1cfab1 = a0_0x1de9;
function a0_0x4cf3() {
    const _0x53887f = [
        '/dev/stdin',
        'log',
        '762qnJWDk',
        'utf8',
        '18edFQzY',
        'readFileSync',
        '569779YBHzSE',
        '469616gpyxAI',
        'split',
        '2576484WzmiXn',
        '30NadrJi',
        '1043928MCdGcT',
        '14366935gHajVW',
        '570BdiTll',
        '2227088pBsazM',
        'safe',
        '45jotGLk',
        'abs'
    ];
    a0_0x4cf3 = function () {
        return _0x53887f;
    };
    return a0_0x4cf3();
}
function a0_0x1de9(GZjWZY, key) {
    const stringArray = a0_0x4cf3();
    a0_0x1de9 = function (index, key) {
        index = index - 0xd8;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1de9(GZjWZY, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x12c421 = a0_0x1de9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x12c421(0xd9)) / 0x1 + -parseInt(_0x12c421(0xe9)) / 0x2 + -parseInt(_0x12c421(0xe4)) / 0x3 * (-parseInt(_0x12c421(0xe7)) / 0x4) + -parseInt(_0x12c421(0xdb)) / 0x5 * (parseInt(_0x12c421(0xe2)) / 0x6) + -parseInt(_0x12c421(0xe6)) / 0x7 + parseInt(_0x12c421(0xdc)) / 0x8 * (-parseInt(_0x12c421(0xde)) / 0x9) + -parseInt(_0x12c421(0xd8)) / 0xa * (-parseInt(_0x12c421(0xda)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4cf3, 0xc3f90));
const main = INPUT => {
    const _0x3440a0 = a0_0x1de9;
    const input = INPUT['split']('\x0a')[0x0];
    const [X, A, B] = input[_0x3440a0(0xe8)]('\x20')['map'](n => Number(n));
    if (A - B >= 0x0) {
        console[_0x3440a0(0xe1)]('delicious');
    } else if (A - B < 0x0 && Math[_0x3440a0(0xdf)](A - B) <= X) {
        console[_0x3440a0(0xe1)](_0x3440a0(0xdd));
    } else {
        console[_0x3440a0(0xe1)]('dangerous');
    }
};
main(require('fs')[a0_0x1cfab1(0xe5)](a0_0x1cfab1(0xe0), a0_0x1cfab1(0xe3)));