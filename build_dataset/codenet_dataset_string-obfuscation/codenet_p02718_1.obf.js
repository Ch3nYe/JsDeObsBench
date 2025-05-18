'use strict';
const a0_0x4ccf96 = a0_0x15e8;
function a0_0x2a8e() {
    const _0x19495c = [
        '20FMvvnv',
        '222165BhlCUE',
        '12784bpgACr',
        '1679325BhKKyF',
        'split',
        '33lsPzMd',
        'utf8',
        '/dev/stdin',
        'log',
        '1280052HVeKPd',
        '751770CTXSrh',
        '52145QdzaRk',
        '1092wWleSM',
        'Yes',
        '3453560PnEMxN',
        '6tcyxZk'
    ];
    a0_0x2a8e = function () {
        return _0x19495c;
    };
    return a0_0x2a8e();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x482487 = a0_0x15e8;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x482487(0x102)) / 0x1 * (parseInt(_0x482487(0x106)) / 0x2) + -parseInt(_0x482487(0x108)) / 0x3 * (parseInt(_0x482487(0x107)) / 0x4) + -parseInt(_0x482487(0x10a)) / 0x5 + -parseInt(_0x482487(0x101)) / 0x6 + parseInt(_0x482487(0x103)) / 0x7 * (-parseInt(_0x482487(0x109)) / 0x8) + parseInt(_0x482487(0x100)) / 0x9 + parseInt(_0x482487(0x105)) / 0xa * (parseInt(_0x482487(0x10c)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2a8e, 0x3e038));
function a0_0x15e8(CuVVYa, key) {
    const stringArray = a0_0x2a8e();
    a0_0x15e8 = function (index, key) {
        index = index - 0x100;
        let value = stringArray[index];
        return value;
    };
    return a0_0x15e8(CuVVYa, key);
}
function main(input) {
    const _0xf7c7b8 = a0_0x15e8;
    const n = Number(input[_0xf7c7b8(0x10b)]('\x0a')[0x0]['split']('\x20')[0x0]);
    const m = Number(input[_0xf7c7b8(0x10b)]('\x0a')[0x0][_0xf7c7b8(0x10b)]('\x20')[0x1]);
    let a = [];
    let sum = 0x0;
    for (let index = 0x0; index < n; index++) {
        a[index] = input[_0xf7c7b8(0x10b)]('\x0a')[0x1][_0xf7c7b8(0x10b)]('\x20')[index];
        sum += Number(a[index]);
    }
    let count = 0x0;
    for (let index = 0x0; index < n; index++) {
        if (a[index] * (0x4 * m) - sum > 0x0) {
            count++;
        }
    }
    if (count >= m) {
        console[_0xf7c7b8(0x10f)](_0xf7c7b8(0x104));
    } else {
        console[_0xf7c7b8(0x10f)]('No');
    }
}
main(require('fs')['readFileSync'](a0_0x4ccf96(0x10e), a0_0x4ccf96(0x10d)));