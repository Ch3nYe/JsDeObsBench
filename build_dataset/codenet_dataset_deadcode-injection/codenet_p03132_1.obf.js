'use strict';
function a0_0x15c8() {
    const _0xacf5f5 = [
        'split',
        'map',
        'fill',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x15c8 = function () {
        return _0xacf5f5;
    };
    return a0_0x15c8();
}
const a0_0x1db9ef = a0_0x562f;
function a0_0x562f(IYgGkf, key) {
    const stringArray = a0_0x15c8();
    a0_0x562f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x562f(IYgGkf, key);
}
function main(input) {
    const _0xf142f3 = a0_0x562f;
    const inputs = input[_0xf142f3(0x0)]('\x0a');
    const L = Number(inputs[0x0]);
    const A = [];
    for (let i = 0x0; i < L; i++) {
        A['push'](Number(inputs[i + 0x1]));
    }
    const dp = Array(L + 0x1)['fill']()[_0xf142f3(0x1)](() => Array(0x5)[_0xf142f3(0x2)]());
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
        dp[i][0x1] = Math[_0xf142f3(0x3)](dp[i - 0x1][0x0], dp[i - 0x1][0x1]) + curEven;
        dp[i][0x2] = Math[_0xf142f3(0x3)](dp[i - 0x1][0x0], dp[i - 0x1][0x1], dp[i - 0x1][0x2]) + curOdd;
        dp[i][0x3] = Math[_0xf142f3(0x3)](dp[i - 0x1][0x2], dp[i - 0x1][0x3]) + curEven;
        dp[i][0x4] = Math[_0xf142f3(0x3)](dp[i - 0x1][0x2], dp[i - 0x1][0x3], dp[i - 0x1][0x4]) + cur;
    }
    console[_0xf142f3(0x4)](Math[_0xf142f3(0x3)](...dp[L]));
}
main(require('fs')[a0_0x1db9ef(0x5)](a0_0x1db9ef(0x6), a0_0x1db9ef(0x7)));