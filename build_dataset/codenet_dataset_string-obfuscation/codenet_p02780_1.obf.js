'use strict';
const a0_0x5976eb = a0_0x5cee;
function a0_0x5cee(rssypR, key) {
    const stringArray = a0_0x2629();
    a0_0x5cee = function (index, key) {
        index = index - 0xcb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5cee(rssypR, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1cea99 = a0_0x5cee;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1cea99(0xd2)) / 0x1 + -parseInt(_0x1cea99(0xcd)) / 0x2 * (parseInt(_0x1cea99(0xcc)) / 0x3) + -parseInt(_0x1cea99(0xd1)) / 0x4 + -parseInt(_0x1cea99(0xd8)) / 0x5 + -parseInt(_0x1cea99(0xd3)) / 0x6 + -parseInt(_0x1cea99(0xd6)) / 0x7 + parseInt(_0x1cea99(0xd7)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2629, 0x416d1));
const fact = n => {
    if (n === 0x1)
        0x1;
    return n + fact(n - 0x1);
};
function Main(input) {
    const _0x518ced = a0_0x5cee;
    input = input[_0x518ced(0xd5)]()['split']('\x0a');
    const array = input[0x0][_0x518ced(0xcf)]('\x20')[_0x518ced(0xd0)](s => parseInt(s));
    const N = array[0x0];
    const K = array[0x1];
    let A = input[0x1]['split']('\x20')[_0x518ced(0xd0)](s => parseInt(s));
    let dp = {};
    for (let i = 0x0; i < N; ++i) {
        const a = A[i];
        if (dp[a])
            continue;
        let tmp = 0x0;
        for (let j = a; j > 0x0; --j) {
            tmp += j;
        }
        dp[a] = tmp;
    }
    let result = 0x0;
    for (let i = 0x0; i < N - (K - 0x1); ++i) {
        let total = 0x0;
        for (let j = i; j < i + K; ++j) {
            total += dp[A[j]] * 0x1 / A[j];
        }
        result = Math[_0x518ced(0xce)](total, result);
    }
    console['log'](result[_0x518ced(0xcb)](0xc));
}
function a0_0x2629() {
    const _0x42b174 = [
        '1644902PaOnya',
        '9217576oMDrLN',
        '531900oaKxiu',
        'readFileSync',
        'toFixed',
        '5997gvoZSS',
        '466oRZZKI',
        'max',
        'split',
        'map',
        '43808FMZgaY',
        '185102gnCMmx',
        '1507374EWuepP',
        'utf8',
        'trim'
    ];
    a0_0x2629 = function () {
        return _0x42b174;
    };
    return a0_0x2629();
}
Main(require('fs')[a0_0x5976eb(0xd9)]('/dev/stdin', a0_0x5976eb(0xd4)));