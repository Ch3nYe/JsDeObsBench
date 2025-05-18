'use strict';
const a0_0x21cf6e = a0_0x2401;
function a0_0x2401(oHAtBi, key) {
    const stringArray = a0_0x2e33();
    a0_0x2401 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2401(oHAtBi, key);
}
const main = arg => {
    const _0x2090d4 = a0_0x2401;
    arg = arg[_0x2090d4(0x0)]()[_0x2090d4(0x1)]('\x0a');
    const N = parseInt(arg[0x0][_0x2090d4(0x1)]('\x20')[0x0]);
    const W = parseInt(arg[0x0][_0x2090d4(0x1)]('\x20')[0x1]);
    const wv = arg['slice'](0x1, N + 0x1)[_0x2090d4(0x2)](n => n[_0x2090d4(0x1)]('\x20')[_0x2090d4(0x2)](l => parseInt(l)));
    let dp = [...Array(N + 0x1)][_0x2090d4(0x2)](n => [...Array(W + 0x1)]['fill'](0x0));
    let answer = 0x0;
    for (let i = 0x1; i < N + 0x1; i++) {
        const w = wv[i - 0x1][0x0];
        const v = wv[i - 0x1][0x1];
        for (let j = 0x0; j < W + 0x1; j++) {
            if (w > j) {
                dp[i][j] = dp[i - 0x1][j];
            } else {
                dp[i][j] = Math[_0x2090d4(0x3)](dp[i - 0x1][j], v + dp[i - 0x1][j - w]);
            }
            if (dp[i][j] > answer) {
                answer = dp[i][j];
            }
        }
    }
    console[_0x2090d4(0x4)](answer);
};
function a0_0x2e33() {
    const _0x57b7a2 = [
        'trim',
        'split',
        'map',
        'max',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2e33 = function () {
        return _0x57b7a2;
    };
    return a0_0x2e33();
}
main(require('fs')['readFileSync'](a0_0x21cf6e(0x5), a0_0x21cf6e(0x6)));