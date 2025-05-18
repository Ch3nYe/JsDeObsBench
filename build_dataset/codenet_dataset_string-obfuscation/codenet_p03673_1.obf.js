'use strict';
const a0_0x5e59e2 = a0_0xa5cc;
(function (stringArrayFunction, comparisonValue) {
    const _0x352392 = a0_0xa5cc;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x352392(0x139)) / 0x1 + -parseInt(_0x352392(0x13d)) / 0x2 + parseInt(_0x352392(0x149)) / 0x3 + -parseInt(_0x352392(0x144)) / 0x4 + -parseInt(_0x352392(0x140)) / 0x5 * (-parseInt(_0x352392(0x142)) / 0x6) + -parseInt(_0x352392(0x141)) / 0x7 * (-parseInt(_0x352392(0x13b)) / 0x8) + -parseInt(_0x352392(0x143)) / 0x9 * (parseInt(_0x352392(0x148)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3235, 0x2477a));
function a0_0x3235() {
    const _0x2d2961 = [
        'map',
        'push',
        '5jRucWu',
        '63bnSvhG',
        '636816LZRRpN',
        '18nKqnxZ',
        '415780LzZibG',
        'split',
        'trim',
        '/dev/stdin',
        '1247390nCpsKM',
        '743190VsJfmh',
        'join',
        '150977HsmUPd',
        'utf8',
        '33240sEnvdM',
        'readFileSync',
        '78890aFxRZL'
    ];
    a0_0x3235 = function () {
        return _0x2d2961;
    };
    return a0_0x3235();
}
const main = arg => {
    const _0x2de384 = a0_0xa5cc;
    arg = arg[_0x2de384(0x146)]()[_0x2de384(0x145)]('\x0a');
    const N = ~~arg[0x0];
    const b = arg[0x1]['split']('\x20')[_0x2de384(0x13e)](n => ~~n);
    let answer = [];
    for (let i = 0x0; i < N; i++) {
        if (i % 0x2 === 0x0) {
            answer[_0x2de384(0x13f)](b[i]);
        } else {
            answer['unshift'](b[i]);
        }
    }
    if (N % 0x2 !== 0x0)
        answer = answer['reverse']();
    console['log'](answer[_0x2de384(0x138)]('\x20'));
};
function a0_0xa5cc(FwoIpo, key) {
    const stringArray = a0_0x3235();
    a0_0xa5cc = function (index, key) {
        index = index - 0x138;
        let value = stringArray[index];
        return value;
    };
    return a0_0xa5cc(FwoIpo, key);
}
main(require('fs')[a0_0x5e59e2(0x13c)](a0_0x5e59e2(0x147), a0_0x5e59e2(0x13a)));