'use strict';
function a0_0x5d56(cIGobX, key) {
    const stringArray = a0_0x13a8();
    a0_0x5d56 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5d56(cIGobX, key);
}
const a0_0x1e0313 = a0_0x5d56;
const main = arg => {
    const _0x40025a = a0_0x5d56;
    arg = arg[_0x40025a(0x0)]()[_0x40025a(0x1)]('\x0a');
    const N = parseInt(arg[0x0]);
    const names = arg[_0x40025a(0x2)](0x1, N + 0x1);
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
            if ('tOYZk' !== 'pkXnQ') {
                march[0x0]++;
            } else {
                march[0x1]++;
            }
        }
        if (names[i][0x0] === 'A') {
            march[0x1]++;
        }
        if (names[i][0x0] === 'R') {
            if ('Mmcow' === _0x40025a(0x3)) {
                march[0x2]++;
            } else {
                answer += march[p[i]] * march[q[i]] * march[r[i]];
            }
        }
        if (names[i][0x0] === 'C') {
            if ('ZSxKt' !== _0x40025a(0x4)) {
                march[0x3]++;
            } else {
                march[0x2]++;
            }
        }
        if (names[i][0x0] === 'H') {
            march[0x4]++;
        }
    }
    let answer = 0x0;
    for (let i = 0x0; i < 0xa; i++) {
        answer += march[p[i]] * march[q[i]] * march[r[i]];
    }
    console[_0x40025a(0x5)](answer);
};
function a0_0x13a8() {
    const _0x584514 = [
        'trim',
        'split',
        'slice',
        'Mmcow',
        'wbQFI',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x13a8 = function () {
        return _0x584514;
    };
    return a0_0x13a8();
}
main(require('fs')['readFileSync'](a0_0x1e0313(0x6), a0_0x1e0313(0x7)));