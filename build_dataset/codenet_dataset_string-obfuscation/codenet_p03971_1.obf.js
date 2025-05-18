'use strict';
function a0_0x3280() {
    const _0x3e5d17 = [
        'log',
        '7iBBoQA',
        '1145070oZeUAj',
        '129486YqcgJb',
        '33AMSYnW',
        'push',
        '/dev/stdin',
        'split',
        '1542WToKEU',
        'Yes',
        'trim',
        '2Dxxklh',
        '3519780LfxIDk',
        'join',
        'readFileSync',
        '2274512rBYXBR',
        '1268960gZsZkC',
        '5075ElTtPE',
        '8488OHMsxK'
    ];
    a0_0x3280 = function () {
        return _0x3e5d17;
    };
    return a0_0x3280();
}
function a0_0x48c7(meRuhk, key) {
    const stringArray = a0_0x3280();
    a0_0x48c7 = function (index, key) {
        index = index - 0x137;
        let value = stringArray[index];
        return value;
    };
    return a0_0x48c7(meRuhk, key);
}
const a0_0xbfb788 = a0_0x48c7;
(function (stringArrayFunction, comparisonValue) {
    const _0x4befae = a0_0x48c7;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4befae(0x13c)) / 0x1 * (parseInt(_0x4befae(0x144)) / 0x2) + -parseInt(_0x4befae(0x13d)) / 0x3 * (parseInt(_0x4befae(0x138)) / 0x4) + parseInt(_0x4befae(0x137)) / 0x5 * (parseInt(_0x4befae(0x141)) / 0x6) + parseInt(_0x4befae(0x13a)) / 0x7 * (-parseInt(_0x4befae(0x148)) / 0x8) + -parseInt(_0x4befae(0x13b)) / 0x9 + -parseInt(_0x4befae(0x149)) / 0xa + parseInt(_0x4befae(0x145)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3280, 0x2443b));
const Main = input => {
    const _0x37e00a = a0_0x48c7;
    const tmp = input[_0x37e00a(0x143)]()[_0x37e00a(0x140)]('\x0a');
    const N = parseInt(tmp[0x0][_0x37e00a(0x140)]('\x20')[0x0]);
    const A = parseInt(tmp[0x0][_0x37e00a(0x140)]('\x20')[0x1]);
    const B = parseInt(tmp[0x0][_0x37e00a(0x140)]('\x20')[0x2]);
    const S = tmp[0x1];
    let result = [];
    let count = 0x0;
    let overseas = 0x0;
    for (let i = 0x0; i < N; i++) {
        const participant = S[_0x37e00a(0x140)]('')[i];
        if (participant === 'a') {
            if (count < A + B) {
                result[_0x37e00a(0x13e)]('Yes');
                count += 0x1;
            } else {
                result['push']('No');
            }
        } else if (participant === 'b') {
            if (count < A + B && overseas < B) {
                result['push'](_0x37e00a(0x142));
                count += 0x1;
                overseas += 0x1;
            } else {
                result[_0x37e00a(0x13e)]('No');
            }
        } else {
            result[_0x37e00a(0x13e)]('No');
        }
    }
    result = result[_0x37e00a(0x146)]('\x0a');
    console[_0x37e00a(0x139)](result);
    return result;
};
Main(require('fs')[a0_0xbfb788(0x147)](a0_0xbfb788(0x13f), 'utf8'));