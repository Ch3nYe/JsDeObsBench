'use strict';
const a0_0x94e0e6 = a0_0x27db;
function a0_0x2150() {
    const _0x1330e3 = [
        'map',
        '913746ZuTwin',
        '3894940nPGqdd',
        'trim',
        'max',
        '/dev/stdin',
        'readFileSync',
        '1158hDCRrk',
        'split',
        'toString',
        '31493344TNPaFe',
        '7249515stAdRg',
        'log',
        '2753138qtGXcz',
        '33885BuTnFl',
        'push',
        'fill',
        '800045YpmrUm'
    ];
    a0_0x2150 = function () {
        return _0x1330e3;
    };
    return a0_0x2150();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x30f34b = a0_0x27db;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x30f34b(0x179)) / 0x1 + -parseInt(_0x30f34b(0x175)) / 0x2 + -parseInt(_0x30f34b(0x17b)) / 0x3 + -parseInt(_0x30f34b(0x17c)) / 0x4 + parseInt(_0x30f34b(0x176)) / 0x5 * (parseInt(_0x30f34b(0x16f)) / 0x6) + -parseInt(_0x30f34b(0x173)) / 0x7 + parseInt(_0x30f34b(0x172)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2150, 0xb8185));
function a0_0x27db(NQSrsp, key) {
    const stringArray = a0_0x2150();
    a0_0x27db = function (index, key) {
        index = index - 0x16b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x27db(NQSrsp, key);
}
console[a0_0x94e0e6(0x174)](function (args) {
    const _0x51e0e0 = a0_0x94e0e6;
    const tmp = args[_0x51e0e0(0x16b)]()[_0x51e0e0(0x170)]('\x0a')['map'](r => r[_0x51e0e0(0x170)]('\x20')[_0x51e0e0(0x17a)](v => v | 0x0));
    const N = tmp[0x0][0x0], M = tmp[0x0][0x1];
    const x = [], y = [];
    for (let i = 0x0; i < M; i++) {
        x[_0x51e0e0(0x177)](tmp[0x1 + i][0x0]);
        y[_0x51e0e0(0x177)](tmp[0x1 + i][0x1]);
    }
    const dp = Array(M + 0x1)[_0x51e0e0(0x178)](0x0)[_0x51e0e0(0x17a)](_ => Array(N + 0x1)['fill'](0x0));
    for (let i = 0x1; i <= M; i++) {
        for (let j = 0x0; j < M; j++) {
            dp[i][y[j]] = Math[_0x51e0e0(0x16c)](dp[i][y[j]], dp[i - 0x1][x[j]] + 0x1);
        }
    }
    return Math[_0x51e0e0(0x16c)](...dp[M])[_0x51e0e0(0x171)]();
}(require('fs')[a0_0x94e0e6(0x16e)](a0_0x94e0e6(0x16d), 'utf8')));