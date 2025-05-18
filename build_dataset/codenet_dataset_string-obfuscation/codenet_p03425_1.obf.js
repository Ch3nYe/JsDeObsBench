'use strict';
const a0_0x2c9672 = a0_0x5aa2;
function a0_0x5aa2(LDakyj, key) {
    const stringArray = a0_0x1073();
    a0_0x5aa2 = function (index, key) {
        index = index - 0x116;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5aa2(LDakyj, key);
}
function a0_0x1073() {
    const _0x44aedf = [
        'log',
        '15868vHiQve',
        'slice',
        '167321zziZXD',
        '7deonHH',
        '/dev/stdin',
        '7941357wfnjXS',
        'utf8',
        '327CepsVD',
        'split',
        '7510drRmyr',
        '311104oEBbxx',
        '2282862XnTNDJ',
        '5005330gjSXOZ',
        '137SFijHF',
        'trim',
        '690ZzNJti'
    ];
    a0_0x1073 = function () {
        return _0x44aedf;
    };
    return a0_0x1073();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x2d0ac1 = a0_0x5aa2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2d0ac1(0x11c)) / 0x1 * (-parseInt(_0x2d0ac1(0x118)) / 0x2) + -parseInt(_0x2d0ac1(0x116)) / 0x3 * (parseInt(_0x2d0ac1(0x120)) / 0x4) + parseInt(_0x2d0ac1(0x11b)) / 0x5 + -parseInt(_0x2d0ac1(0x11a)) / 0x6 * (parseInt(_0x2d0ac1(0x123)) / 0x7) + parseInt(_0x2d0ac1(0x119)) / 0x8 + parseInt(_0x2d0ac1(0x125)) / 0x9 + parseInt(_0x2d0ac1(0x11e)) / 0xa * (-parseInt(_0x2d0ac1(0x122)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1073, 0x8c373));
const main = arg => {
    const _0x550199 = a0_0x5aa2;
    arg = arg[_0x550199(0x11d)]()[_0x550199(0x117)]('\x0a');
    const N = parseInt(arg[0x0]);
    const names = arg[_0x550199(0x121)](0x1, N + 0x1);
    const p = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1,
        0x2
    ];
    const q = [
        0x1,
        0x1,
        0x1,
        0x2,
        0x2,
        0x3,
        0x2,
        0x2,
        0x3,
        0x3
    ];
    const r = [
        0x2,
        0x3,
        0x4,
        0x3,
        0x4,
        0x4,
        0x3,
        0x4,
        0x4,
        0x4
    ];
    let march = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0
    ];
    for (let i in names) {
        if (names[i][0x0] === 'M') {
            march[0x0]++;
        }
        if (names[i][0x0] === 'A') {
            march[0x1]++;
        }
        if (names[i][0x0] === 'R') {
            march[0x2]++;
        }
        if (names[i][0x0] === 'C') {
            march[0x3]++;
        }
        if (names[i][0x0] === 'H') {
            march[0x4]++;
        }
    }
    let answer = 0x0;
    for (let i = 0x0; i < 0xa; i++) {
        answer += march[p[i]] * march[q[i]] * march[r[i]];
    }
    console[_0x550199(0x11f)](answer);
};
main(require('fs')['readFileSync'](a0_0x2c9672(0x124), a0_0x2c9672(0x126)));