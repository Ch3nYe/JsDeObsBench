'use strict';
const a0_0x536a9e = a0_0x2274;
function Main(input) {
    const _0x1e6cbd = a0_0x2274;
    input = input['trim']()[_0x1e6cbd(0x0)](/\n/);
    const N = input[_0x1e6cbd(0x1)]() - 0x0;
    const M = Math['pow'](0x2, N);
    const K = Math[_0x1e6cbd(0x2)](0xa, 0x9) + 0x7;
    input = input['map'](str => str[_0x1e6cbd(0x0)](/\s+/)[_0x1e6cbd(0x3)](x => x === '1'));
    const Match = input;
    const dp = new Array(N)[_0x1e6cbd(0x4)](0x0)[_0x1e6cbd(0x3)]((x, j) => new Object());
    dp[-0x1] = { 0x0: 0x1 };
    const p = new Array(N)[_0x1e6cbd(0x4)](0x0)[_0x1e6cbd(0x3)]((x, i) => 0x1 << i);
    for (let i = -0x1; i < N - 0x1; i++) {
        Object[_0x1e6cbd(0x5)](dp[i])[_0x1e6cbd(0x6)](function (J) {
            J = J - 0x0;
            dp[i][J] %= K;
            for (let j = 0x0; j < N; j++) {
                if ((J & p[j]) > 0x0)
                    continue;
                if (Match[i + 0x1][j])
                    dp[i + 0x1][J + p[j]] = (dp[i + 0x1][J + p[j]] || 0x0) + dp[i][J];
            }
        });
    }
    console['log']((dp[N - 0x1][M - 0x1] || 0x0) % K);
}
function a0_0x5ad6() {
    const _0x46b977 = [
        'split',
        'shift',
        'pow',
        'map',
        'fill',
        'keys',
        'forEach',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5ad6 = function () {
        return _0x46b977;
    };
    return a0_0x5ad6();
}
function a0_0x2274(vdLXMy, key) {
    const stringArray = a0_0x5ad6();
    a0_0x2274 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2274(vdLXMy, key);
}
Main(require('fs')[a0_0x536a9e(0x7)](a0_0x536a9e(0x8), a0_0x536a9e(0x9)));