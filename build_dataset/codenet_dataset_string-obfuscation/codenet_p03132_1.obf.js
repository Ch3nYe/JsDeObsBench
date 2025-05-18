'use strict';
function a0_0x2f2d(xaapwE, key) {
    const stringArray = a0_0x98d0();
    a0_0x2f2d = function (index, key) {
        index = index - 0xde;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2f2d(xaapwE, key);
}
const a0_0x5b9474 = a0_0x2f2d;
(function (stringArrayFunction, comparisonValue) {
    const _0x43414c = a0_0x2f2d;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x43414c(0xe3)) / 0x1 * (-parseInt(_0x43414c(0xe9)) / 0x2) + parseInt(_0x43414c(0xe8)) / 0x3 + -parseInt(_0x43414c(0xec)) / 0x4 * (parseInt(_0x43414c(0xde)) / 0x5) + parseInt(_0x43414c(0xe7)) / 0x6 + -parseInt(_0x43414c(0xe1)) / 0x7 + parseInt(_0x43414c(0xed)) / 0x8 * (-parseInt(_0x43414c(0xdf)) / 0x9) + parseInt(_0x43414c(0xea)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x98d0, 0x7f4c2));
function a0_0x98d0() {
    const _0x422186 = [
        '1257057GEWSTJ',
        '502HOuIjW',
        '20090160rdlifJ',
        'min',
        '516dAbktU',
        '632NnUaQr',
        '7945PddMJH',
        '16362NcEpux',
        'utf8',
        '5521026TckTJh',
        'fill',
        '4049JImjVr',
        'readFileSync',
        'push',
        'split',
        '1481970QvXRCS'
    ];
    a0_0x98d0 = function () {
        return _0x422186;
    };
    return a0_0x98d0();
}
function main(input) {
    const _0x533bf9 = a0_0x2f2d;
    const inputs = input[_0x533bf9(0xe6)]('\x0a');
    const L = Number(inputs[0x0]);
    const A = [];
    for (let i = 0x0; i < L; i++) {
        A[_0x533bf9(0xe5)](Number(inputs[i + 0x1]));
    }
    const dp = Array(L + 0x1)[_0x533bf9(0xe2)]()['map'](() => Array(0x5)['fill']());
    dp[0x0] = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0
    ];
    for (let i = 0x1; i <= L; i++) {
        let cur = A[i - 0x1];
        let curEven = A[i - 0x1] === 0x0 ? 0x2 : cur % 0x2;
        let curOdd = (cur + 0x1) % 0x2;
        dp[i][0x0] = dp[i - 0x1][0x0] + cur;
        dp[i][0x1] = Math[_0x533bf9(0xeb)](dp[i - 0x1][0x0], dp[i - 0x1][0x1]) + curEven;
        dp[i][0x2] = Math['min'](dp[i - 0x1][0x0], dp[i - 0x1][0x1], dp[i - 0x1][0x2]) + curOdd;
        dp[i][0x3] = Math[_0x533bf9(0xeb)](dp[i - 0x1][0x2], dp[i - 0x1][0x3]) + curEven;
        dp[i][0x4] = Math['min'](dp[i - 0x1][0x2], dp[i - 0x1][0x3], dp[i - 0x1][0x4]) + cur;
    }
    console['log'](Math['min'](...dp[L]));
}
main(require('fs')[a0_0x5b9474(0xe4)]('/dev/stdin', a0_0x5b9474(0xe0)));