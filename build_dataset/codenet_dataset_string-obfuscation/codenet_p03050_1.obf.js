'use strict';
function a0_0x3f96() {
    const _0x39e847 = [
        '1783572KEjFbI',
        '387924YVpaUN',
        '8AIDcwE',
        '444217MnGvEv',
        '2543772uoWSGG',
        '209342gybGgP',
        '40PkiIUI',
        '8828100GbzqPo',
        '834195PhOvpm',
        '/dev/stdin',
        'utf8',
        'trunc'
    ];
    a0_0x3f96 = function () {
        return _0x39e847;
    };
    return a0_0x3f96();
}
const a0_0x5e87d8 = a0_0x376f;
(function (stringArrayFunction, comparisonValue) {
    const _0x42119e = a0_0x376f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x42119e(0x175)) / 0x1 + -parseInt(_0x42119e(0x173)) / 0x2 + -parseInt(_0x42119e(0x172)) / 0x3 + -parseInt(_0x42119e(0x174)) / 0x4 * (-parseInt(_0x42119e(0x16e)) / 0x5) + parseInt(_0x42119e(0x176)) / 0x6 + parseInt(_0x42119e(0x177)) / 0x7 * (-parseInt(_0x42119e(0x16c)) / 0x8) + parseInt(_0x42119e(0x16d)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f96, 0x56fd3));
function a0_0x376f(FmdEdD, key) {
    const stringArray = a0_0x3f96();
    a0_0x376f = function (index, key) {
        index = index - 0x16c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x376f(FmdEdD, key);
}
function Main(input) {
    const _0x515586 = a0_0x376f;
    const N = parseInt(input);
    let ret = 0x0;
    for (let i = 0x1; i * i < N; i++) {
        const ic = i - 0x1;
        if (ic !== 0x0 && N % ic === Math[_0x515586(0x171)](N / ic)) {
            ret += ic;
        }
        const j = Math['trunc'](N / i) - 0x1;
        if (N % j === i) {
            ret += j;
        }
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync'](a0_0x5e87d8(0x16f), a0_0x5e87d8(0x170)));