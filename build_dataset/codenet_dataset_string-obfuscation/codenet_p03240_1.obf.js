'use strict';
function a0_0x142d() {
    const _0x1cf867 = [
        '6568248YujjnI',
        'utf-8',
        '37535fGRfZe',
        'map',
        'abs',
        '24711220DlWZDI',
        '3CJGsHS',
        'push',
        'split',
        '5837363XrKuEZ',
        '27JOQRge',
        '558370nrLrcg',
        '/dev/stdin',
        'log',
        'readFileSync',
        'slice',
        '2047444WDVDaj',
        '444urUYRi',
        '2463496nmrFnh'
    ];
    a0_0x142d = function () {
        return _0x1cf867;
    };
    return a0_0x142d();
}
const a0_0x2c3b22 = a0_0x3b75;
function a0_0x3b75(BCDSFZ, key) {
    const stringArray = a0_0x142d();
    a0_0x3b75 = function (index, key) {
        index = index - 0x19e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b75(BCDSFZ, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x2ac621 = a0_0x3b75;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2ac621(0x1a3)) / 0x1 + parseInt(_0x2ac621(0x1a8)) / 0x2 * (-parseInt(_0x2ac621(0x19e)) / 0x3) + -parseInt(_0x2ac621(0x1a9)) / 0x4 * (-parseInt(_0x2ac621(0x1ad)) / 0x5) + parseInt(_0x2ac621(0x1ab)) / 0x6 + parseInt(_0x2ac621(0x1a1)) / 0x7 + -parseInt(_0x2ac621(0x1aa)) / 0x8 * (-parseInt(_0x2ac621(0x1a2)) / 0x9) + -parseInt(_0x2ac621(0x1b0)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x142d, 0xb6eaf));
const main = input => {
    const _0x305f81 = a0_0x3b75;
    input = input[_0x305f81(0x1a0)]('\x0a');
    const N = parseInt(input[0x0]);
    let X = [];
    let Y = [];
    let Z = [];
    input[_0x305f81(0x1a7)](0x1, N + 0x1)['forEach'](v => {
        const _0x7f5ed5 = _0x305f81;
        let tmp = v[_0x7f5ed5(0x1a0)]('\x20')[_0x7f5ed5(0x1ae)](j => parseInt(j));
        X['push'](tmp[0x0]);
        Y['push'](tmp[0x1]);
        Z[_0x7f5ed5(0x19f)](tmp[0x2]);
    });
    const MAX = 0x64;
    for (let y = 0x0; y <= MAX; y++) {
        for (let x = 0x0; x <= MAX; x++) {
            let needH = -0x1;
            for (let i = 0x0; i < N; i++) {
                let tmp = Z[i] + Math[_0x305f81(0x1af)](Y[i] - y) + Math[_0x305f81(0x1af)](X[i] - x);
                if (needH === -0x1) {
                    needH = tmp;
                } else if (needH !== tmp) {
                    needH = -0x2;
                    break;
                }
            }
            if (needH === -0x2)
                continue;
            console[_0x305f81(0x1a5)]('%d\x20%d\x20%d', x, y, needH);
        }
    }
};
main(require('fs')[a0_0x2c3b22(0x1a6)](a0_0x2c3b22(0x1a4), a0_0x2c3b22(0x1ac)));