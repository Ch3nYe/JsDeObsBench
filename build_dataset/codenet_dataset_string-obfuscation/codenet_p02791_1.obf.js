'use strict';
const a0_0x2bbbb8 = a0_0xcda6;
(function (stringArrayFunction, comparisonValue) {
    const _0x1c9bc6 = a0_0xcda6;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1c9bc6(0x1c3)) / 0x1 * (parseInt(_0x1c9bc6(0x1b8)) / 0x2) + parseInt(_0x1c9bc6(0x1c2)) / 0x3 + -parseInt(_0x1c9bc6(0x1b6)) / 0x4 + -parseInt(_0x1c9bc6(0x1b9)) / 0x5 * (-parseInt(_0x1c9bc6(0x1c4)) / 0x6) + parseInt(_0x1c9bc6(0x1c1)) / 0x7 * (-parseInt(_0x1c9bc6(0x1c6)) / 0x8) + -parseInt(_0x1c9bc6(0x1c0)) / 0x9 * (parseInt(_0x1c9bc6(0x1b5)) / 0xa) + parseInt(_0x1c9bc6(0x1bb)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1304, 0x6778c));
function Main(s) {
    const _0x2e29f2 = a0_0xcda6;
    s = s['trim']()[_0x2e29f2(0x1c5)]('\x0a');
    const n = Number(s[0x0]);
    const p = s[0x1][_0x2e29f2(0x1bf)]()[_0x2e29f2(0x1c5)]('\x20')['map'](Number);
    let cnt = 0x0;
    for (let i = 0x1; i <= n; i++) {
        let flg = !![];
        let t = p[_0x2e29f2(0x1b7)](0x0, i);
        let x = 0x0;
        while (x < t[_0x2e29f2(0x1bd)] - 0x1) {
            if (t[x] < p[i - 0x1])
                flg = ![];
            x++;
        }
        if (flg)
            cnt++;
    }
    console[_0x2e29f2(0x1be)](cnt);
}
Main(require('fs')[a0_0x2bbbb8(0x1ba)]('/dev/stdin', a0_0x2bbbb8(0x1bc)));
function a0_0xcda6(uBATma, key) {
    const stringArray = a0_0x1304();
    a0_0xcda6 = function (index, key) {
        index = index - 0x1b5;
        let value = stringArray[index];
        return value;
    };
    return a0_0xcda6(uBATma, key);
}
function a0_0x1304() {
    const _0x57696a = [
        'readFileSync',
        '5136868EpdNBC',
        'utf8',
        'length',
        'log',
        'trim',
        '1103850cZRIjJ',
        '543032pcbaMR',
        '600402LVDRTv',
        '117479Yaaurr',
        '6msqNOP',
        'split',
        '40BrQCYM',
        '50rAYhOB',
        '2158892AeSSLe',
        'slice',
        '12UllYrY',
        '2963385fIrjod'
    ];
    a0_0x1304 = function () {
        return _0x57696a;
    };
    return a0_0x1304();
}