'use strict';
function a0_0x581b() {
    const _0x5df938 = [
        'reduce',
        'shift',
        '472522JrwtJP',
        'map',
        'join',
        'utf8',
        '2589512oGIdqv',
        '95473DKvZVb',
        '945900bSUpwM',
        '101562mdpXSx',
        '204eRKtUz',
        'toString',
        'log',
        '1751936xiaUtj',
        '414852XdKhyj',
        'split'
    ];
    a0_0x581b = function () {
        return _0x5df938;
    };
    return a0_0x581b();
}
const a0_0x4b4942 = a0_0x2065;
(function (stringArrayFunction, comparisonValue) {
    const _0x5867e8 = a0_0x2065;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5867e8(0x93)) / 0x1 + parseInt(_0x5867e8(0x9a)) / 0x2 + -parseInt(_0x5867e8(0x9f)) / 0x3 + -parseInt(_0x5867e8(0x9e)) / 0x4 + parseInt(_0x5867e8(0x99)) / 0x5 + -parseInt(_0x5867e8(0x9b)) / 0x6 * (-parseInt(_0x5867e8(0x98)) / 0x7) + -parseInt(_0x5867e8(0x97)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x581b, 0x4371c));
function main(input) {
    const _0x5eba81 = a0_0x2065;
    const lines = input[_0x5eba81(0xa0)]('\x0a');
    const N = parseInt(lines[_0x5eba81(0x92)]());
    const F = [];
    for (let i = 0x0; i < N; i++) {
        F['push'](lines[i][_0x5eba81(0xa0)]('\x20')[_0x5eba81(0x94)](x => parseInt(x)));
    }
    const P = [];
    for (let i = 0x0; i < N; i++) {
        P['push'](lines[i + N]['split']('\x20')[_0x5eba81(0x94)](x => parseInt(x)));
    }
    let result = -Infinity;
    for (let i = 0x1; i < 0x400; i++) {
        let score = 0x0;
        for (let j = 0x0; j < N; j++) {
            let store = F[j];
            let p_index = (parseInt(store[_0x5eba81(0x95)](''), 0x2) & i)[_0x5eba81(0x9c)](0x2)[_0x5eba81(0xa0)]('')[_0x5eba81(0x94)](x => Number(x))[_0x5eba81(0xa1)]((a, b) => a + b, 0x0);
            score += P[j][p_index];
        }
        if (score > result) {
            result = score;
        }
    }
    console[_0x5eba81(0x9d)](result);
}
function a0_0x2065(pmrOFM, key) {
    const stringArray = a0_0x581b();
    a0_0x2065 = function (index, key) {
        index = index - 0x92;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2065(pmrOFM, key);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x4b4942(0x96)));