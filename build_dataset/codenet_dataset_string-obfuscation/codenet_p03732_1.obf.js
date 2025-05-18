'use strict';
const a0_0x161497 = a0_0x5f39;
(function (stringArrayFunction, comparisonValue) {
    const _0x34322c = a0_0x5f39;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x34322c(0x116)) / 0x1 + parseInt(_0x34322c(0x113)) / 0x2 * (-parseInt(_0x34322c(0x10c)) / 0x3) + parseInt(_0x34322c(0x10e)) / 0x4 * (parseInt(_0x34322c(0x117)) / 0x5) + parseInt(_0x34322c(0x111)) / 0x6 * (parseInt(_0x34322c(0x11a)) / 0x7) + -parseInt(_0x34322c(0x114)) / 0x8 + parseInt(_0x34322c(0x11b)) / 0x9 * (-parseInt(_0x34322c(0x118)) / 0xa) + parseInt(_0x34322c(0x11c)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2249, 0xeb205));
function a0_0x2249() {
    const _0x3bbea5 = [
        '258MzbuKF',
        'trim',
        '1228ZXeyvt',
        '789032KjqjUo',
        'split',
        '813460hbNqRw',
        '5GvzNOq',
        '20gJIbwI',
        '/dev/stdin',
        '120799IHAvvw',
        '2918070NvFNMn',
        '27000611yDGxeA',
        'fill',
        '3846EwKfYM',
        'utf8',
        '456488zTuBFH',
        'readFileSync',
        'map'
    ];
    a0_0x2249 = function () {
        return _0x3bbea5;
    };
    return a0_0x2249();
}
function a0_0x5f39(tgTjNK, key) {
    const stringArray = a0_0x2249();
    a0_0x5f39 = function (index, key) {
        index = index - 0x10c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5f39(tgTjNK, key);
}
const main = arg => {
    const _0x3a8d3 = a0_0x5f39;
    arg = arg[_0x3a8d3(0x112)]()['split']('\x0a');
    const N = parseInt(arg[0x0][_0x3a8d3(0x115)]('\x20')[0x0]);
    const W = parseInt(arg[0x0]['split']('\x20')[0x1]);
    const wv = arg['slice'](0x1, N + 0x1)[_0x3a8d3(0x110)](n => n['split']('\x20')[_0x3a8d3(0x110)](l => parseInt(l)));
    let dp = [...Array(N + 0x1)]['map'](n => [...Array(W + 0x1)][_0x3a8d3(0x11d)](0x0));
    let answer = 0x0;
    for (let i = 0x1; i < N + 0x1; i++) {
        const w = wv[i - 0x1][0x0];
        const v = wv[i - 0x1][0x1];
        for (let j = 0x0; j < W + 0x1; j++) {
            if (w > j) {
                dp[i][j] = dp[i - 0x1][j];
            } else {
                dp[i][j] = Math['max'](dp[i - 0x1][j], v + dp[i - 0x1][j - w]);
            }
            if (dp[i][j] > answer) {
                answer = dp[i][j];
            }
        }
    }
    console['log'](answer);
};
main(require('fs')[a0_0x161497(0x10f)](a0_0x161497(0x119), a0_0x161497(0x10d)));