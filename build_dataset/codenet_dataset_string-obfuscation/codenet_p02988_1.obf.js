'use strict';
const a0_0x352214 = a0_0x52b9;
(function (stringArrayFunction, comparisonValue) {
    const _0x4f2b9a = a0_0x52b9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4f2b9a(0x1e2)) / 0x1 * (-parseInt(_0x4f2b9a(0x1e6)) / 0x2) + parseInt(_0x4f2b9a(0x1e8)) / 0x3 + -parseInt(_0x4f2b9a(0x1da)) / 0x4 * (-parseInt(_0x4f2b9a(0x1e3)) / 0x5) + -parseInt(_0x4f2b9a(0x1dd)) / 0x6 + parseInt(_0x4f2b9a(0x1e4)) / 0x7 * (parseInt(_0x4f2b9a(0x1e0)) / 0x8) + -parseInt(_0x4f2b9a(0x1e5)) / 0x9 + parseInt(_0x4f2b9a(0x1dc)) / 0xa * (-parseInt(_0x4f2b9a(0x1e1)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1273, 0xa61e7));
function a0_0x1273() {
    const _0x17dfb7 = [
        '1183NAPqWV',
        '5627592MNBBTd',
        '2ekdKaV',
        'map',
        '262344fGZztL',
        'log',
        '120HAGrGo',
        'utf8',
        '10YpZmfB',
        '4241544HKuIax',
        'split',
        'trim',
        '17960JSVFFU',
        '1739617fPBYww',
        '1159339KqzkxY',
        '90765SJinDn'
    ];
    a0_0x1273 = function () {
        return _0x17dfb7;
    };
    return a0_0x1273();
}
function a0_0x52b9(WBaqMN, key) {
    const stringArray = a0_0x1273();
    a0_0x52b9 = function (index, key) {
        index = index - 0x1da;
        let value = stringArray[index];
        return value;
    };
    return a0_0x52b9(WBaqMN, key);
}
const Main = arg => {
    const _0x6bde61 = a0_0x52b9;
    let input = arg[_0x6bde61(0x1df)]()[_0x6bde61(0x1de)]('\x0a');
    let n = parseInt(input[0x0]);
    let pArr = input[0x1][_0x6bde61(0x1de)]('\x20')[_0x6bde61(0x1e7)](Number);
    let count = 0x0;
    for (let i = 0x1; i - 0x1 < n; i++) {
        if (pArr[i - 0x1] < pArr[i] && pArr[i] < pArr[i + 0x1] || pArr[i + 0x1] < pArr[i] && pArr[i] < pArr[i - 0x1]) {
            count += 0x1;
        }
    }
    console[_0x6bde61(0x1e9)](count);
};
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x352214(0x1db)));