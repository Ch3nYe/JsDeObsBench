'use strict';
const a0_0x4b0b13 = a0_0x4055;
(function (stringArrayFunction, comparisonValue) {
    const _0x3454d9 = a0_0x4055;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3454d9(0x93)) / 0x1 * (parseInt(_0x3454d9(0x9b)) / 0x2) + parseInt(_0x3454d9(0x98)) / 0x3 + parseInt(_0x3454d9(0x94)) / 0x4 * (parseInt(_0x3454d9(0x99)) / 0x5) + parseInt(_0x3454d9(0x8d)) / 0x6 + parseInt(_0x3454d9(0x97)) / 0x7 + parseInt(_0x3454d9(0x9c)) / 0x8 * (-parseInt(_0x3454d9(0x91)) / 0x9) + -parseInt(_0x3454d9(0x95)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3aa5, 0xeaa0b));
function Main(input) {
    const _0x37c546 = a0_0x4055;
    input = input[_0x37c546(0x8f)]('\x0a');
    const line0 = input[0x0][_0x37c546(0x8f)]('\x20');
    let N = parseInt(line0[0x0]);
    let K = parseInt(line0[0x1]);
    if (K % 0x2 === 0x0) {
        console[_0x37c546(0x96)](Math[_0x37c546(0x90)](N / K) ** 0x3 + Math['floor']((N + K / 0x2) / K) ** 0x3);
    } else {
        console[_0x37c546(0x96)](Math[_0x37c546(0x90)](N / K) ** 0x3);
    }
}
function a0_0x3aa5() {
    const _0x46493d = [
        'log',
        '1618582GTCVvy',
        '2619951WQftsj',
        '5bjiKpD',
        'utf8',
        '865286mAumlX',
        '2032LAaMyN',
        '7746324lxTWXt',
        'readFileSync',
        'split',
        'floor',
        '43677wcUtKK',
        '/dev/stdin',
        '1EClxrI',
        '495828uoxSeC',
        '7585000FYDnPL'
    ];
    a0_0x3aa5 = function () {
        return _0x46493d;
    };
    return a0_0x3aa5();
}
function a0_0x4055(KfyztO, key) {
    const stringArray = a0_0x3aa5();
    a0_0x4055 = function (index, key) {
        index = index - 0x8d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4055(KfyztO, key);
}
Main(require('fs')[a0_0x4b0b13(0x8e)](a0_0x4b0b13(0x92), a0_0x4b0b13(0x9a)));