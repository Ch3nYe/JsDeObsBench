'use strict';
const a0_0x5e3d53 = a0_0x5a4f;
function a0_0x5a4f(WfWZjl, key) {
    const stringArray = a0_0x283c();
    a0_0x5a4f = function (index, key) {
        index = index - 0xd3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5a4f(WfWZjl, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x168690 = a0_0x5a4f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x168690(0xdc)) / 0x1 + -parseInt(_0x168690(0xdb)) / 0x2 + parseInt(_0x168690(0xd8)) / 0x3 * (-parseInt(_0x168690(0xda)) / 0x4) + parseInt(_0x168690(0xd3)) / 0x5 + parseInt(_0x168690(0xe2)) / 0x6 * (-parseInt(_0x168690(0xd6)) / 0x7) + parseInt(_0x168690(0xe3)) / 0x8 + -parseInt(_0x168690(0xde)) / 0x9 * (-parseInt(_0x168690(0xe0)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x283c, 0xea16d));
function a0_0x283c() {
    const _0x195718 = [
        '4459EkfDyQ',
        'split',
        '597bRVwGr',
        'readFileSync',
        '32932vFIebi',
        '999876elfgGs',
        '1378671DPsstC',
        '/dev/stdin',
        '18749961kYUiCu',
        'log',
        '20WyZbNs',
        'Yes',
        '3522ZwjdxY',
        '2852952CXGVbh',
        '1632235ylQAxh',
        'utf8',
        'trim'
    ];
    a0_0x283c = function () {
        return _0x195718;
    };
    return a0_0x283c();
}
const main = arg => {
    const _0x421938 = a0_0x5a4f;
    arg = arg[_0x421938(0xd5)]()[_0x421938(0xd7)]('\x0a');
    const S = arg[0x0]['split']('');
    let previous = null;
    for (let i in S) {
        if (previous === 'A' && S[i] === 'C') {
            console[_0x421938(0xdf)](_0x421938(0xe1));
            return;
        }
        previous = S[i];
    }
    console['log']('No');
};
main(require('fs')[a0_0x5e3d53(0xd9)](a0_0x5e3d53(0xdd), a0_0x5e3d53(0xd4)));