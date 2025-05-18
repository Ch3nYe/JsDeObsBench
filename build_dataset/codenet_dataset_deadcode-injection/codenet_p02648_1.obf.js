const a0_0x62c58 = a0_0x1071;
console[a0_0x62c58(0x0)](function (args) {
    const _0x4e8490 = a0_0x1071;
    const tmp = args[_0x4e8490(0x1)]()[_0x4e8490(0x2)]('\x0a')[_0x4e8490(0x3)](r => r[_0x4e8490(0x2)]('\x20')['map'](v => v | 0x0));
    const N = tmp[0x0][0x0], Q = tmp[N + 0x1][0x0];
    const V = [0x0], W = [0x0], v = [], L = [];
    for (let i = 0x1; i <= N; i++) {
        V[_0x4e8490(0x4)](tmp[i][0x0]);
        W[_0x4e8490(0x4)](tmp[i][0x1]);
    }
    let Lmax = 0x0;
    for (let i = 0x1; i <= Q; i++) {
        if (_0x4e8490(0x5) !== _0x4e8490(0x5)) {
            V[_0x4e8490(0x4)](tmp[i][0x0]);
            W[_0x4e8490(0x4)](tmp[i][0x1]);
        } else {
            v['push'](tmp[N + 0x1 + i][0x0]);
            L[_0x4e8490(0x4)](tmp[N + 0x1 + i][0x1]);
            if (L[i - 0x1] > Lmax)
                Lmax = L[i - 0x1];
        }
    }
    const dp = [Array(Lmax + 0x1)[_0x4e8490(0x6)](0x0)];
    for (let i = 0x1; i <= N; i++) {
        dp[i] = [];
        for (let w = 0x0; w <= Lmax; w++) {
            if (w >= W[i])
                dp[i][w] = Math['max'](dp[i >> 0x1][w - W[i]] + V[i], dp[i >> 0x1][w]);
            else
                dp[i][w] = dp[i >> 0x1][w];
        }
    }
    const max = [];
    for (let i = 0x0; i < Q; i++) {
        if (_0x4e8490(0x7) === _0x4e8490(0x7)) {
            max[_0x4e8490(0x4)](dp[v[i]][L[i]]);
        } else {
            dp[i] = [];
            for (let w = 0x0; w <= Lmax; w++) {
                if (w >= W[i])
                    dp[i][w] = Math[_0x4e8490(0x8)](dp[i >> 0x1][w - W[i]] + V[i], dp[i >> 0x1][w]);
                else
                    dp[i][w] = dp[i >> 0x1][w];
            }
        }
    }
    return max[_0x4e8490(0x9)]('\x0a');
}(require('fs')['readFileSync'](a0_0x62c58(0xa), a0_0x62c58(0xb))));
function a0_0x1071(izEoRD, key) {
    const stringArray = a0_0x2762();
    a0_0x1071 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1071(izEoRD, key);
}
function a0_0x2762() {
    const _0x1d5203 = [
        'log',
        'trim',
        'split',
        'map',
        'push',
        'fNgrG',
        'fill',
        'pwFbk',
        'max',
        'join',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2762 = function () {
        return _0x1d5203;
    };
    return a0_0x2762();
}