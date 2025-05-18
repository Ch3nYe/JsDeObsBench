'use strict';
function a0_0x12d5(seSVvZ, key) {
    const stringArray = a0_0xfb47();
    a0_0x12d5 = function (index, key) {
        index = index - 0xca;
        let value = stringArray[index];
        return value;
    };
    return a0_0x12d5(seSVvZ, key);
}
const a0_0x246303 = a0_0x12d5;
function a0_0xfb47() {
    const _0x2b7808 = [
        '111629DTDJjZ',
        '24TFnkxE',
        '14CtKrnk',
        'sort',
        '5138276ptiUDO',
        '30fovTcO',
        'split',
        '42NRIoEi',
        'map',
        '2145378iTguvd',
        'readFileSync',
        '5466TQzejq',
        'min',
        '1615896AWMLAq',
        '/dev/stdin',
        'utf8',
        '10KijVnv',
        'log',
        '3010BxlRCE',
        'IMPOSSIBLE',
        'POSSIBLE',
        '1004201DEINMs',
        '647100kWhkHI',
        '4RZfptO'
    ];
    a0_0xfb47 = function () {
        return _0x2b7808;
    };
    return a0_0xfb47();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x2aa68b = a0_0x12d5;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2aa68b(0xca)) / 0x1 * (-parseInt(_0x2aa68b(0xda)) / 0x2) + -parseInt(_0x2aa68b(0xd3)) / 0x3 * (-parseInt(_0x2aa68b(0xe1)) / 0x4) + parseInt(_0x2aa68b(0xdc)) / 0x5 * (-parseInt(_0x2aa68b(0xd5)) / 0x6) + -parseInt(_0x2aa68b(0xcc)) / 0x7 * (parseInt(_0x2aa68b(0xd7)) / 0x8) + -parseInt(_0x2aa68b(0xe0)) / 0x9 * (-parseInt(_0x2aa68b(0xcf)) / 0xa) + parseInt(_0x2aa68b(0xdf)) / 0xb * (-parseInt(_0x2aa68b(0xcb)) / 0xc) + parseInt(_0x2aa68b(0xce)) / 0xd * (parseInt(_0x2aa68b(0xd1)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xfb47, 0x67623));
const getGcd = (a, b) => {
    return a ? getGcd(b % a, a) : b;
};
const main = arg => {
    const _0x331b7c = a0_0x12d5;
    arg = arg['trim']()[_0x331b7c(0xd0)]('\x0a');
    const N = parseInt(arg[0x0][_0x331b7c(0xd0)]('\x20')[0x0]);
    const K = parseInt(arg[0x0]['split']('\x20')[0x1]);
    let A = arg[0x1][_0x331b7c(0xd0)]('\x20')[_0x331b7c(0xd2)](n => parseInt(n))[_0x331b7c(0xcd)]((a, b) => b - a);
    const max = A[0x0];
    let gcd = Infinity;
    if (max < K) {
        console[_0x331b7c(0xdb)](_0x331b7c(0xdd));
        return;
    }
    for (let i = 0x0; i < N; i++) {
        for (let j = i + 0x1; j < N; j++) {
            gcd = Math[_0x331b7c(0xd6)](gcd, getGcd(A[i], A[j]));
        }
    }
    console[_0x331b7c(0xdb)](K % gcd === 0x0 ? _0x331b7c(0xde) : _0x331b7c(0xdd));
};
main(require('fs')[a0_0x246303(0xd4)](a0_0x246303(0xd8), a0_0x246303(0xd9)));