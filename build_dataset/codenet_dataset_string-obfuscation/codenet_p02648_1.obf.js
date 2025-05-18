function a0_0x233e(OAMmyE, key) {
    const stringArray = a0_0x4315();
    a0_0x233e = function (index, key) {
        index = index - 0x1f0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x233e(OAMmyE, key);
}
function a0_0x4315() {
    const _0xe5801 = [
        'max',
        'push',
        'fill',
        '4462434WLggfy',
        'readFileSync',
        'trim',
        '2991190KQJegF',
        '82zmCvvl',
        '7jMMrOP',
        'join',
        'log',
        'split',
        '1212715XkTXxU',
        '2093176BeQdtH',
        '1051560gpkrMl',
        '778456pUvGbG',
        'map',
        'utf8',
        '46533NaalwO',
        '18MLyzBU'
    ];
    a0_0x4315 = function () {
        return _0xe5801;
    };
    return a0_0x4315();
}
const a0_0x4ec3d7 = a0_0x233e;
(function (stringArrayFunction, comparisonValue) {
    const _0x525890 = a0_0x233e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x525890(0x1f3)) / 0x1 + parseInt(_0x525890(0x1ff)) / 0x2 * (parseInt(_0x525890(0x1f6)) / 0x3) + parseInt(_0x525890(0x1f2)) / 0x4 + -parseInt(_0x525890(0x1f0)) / 0x5 + -parseInt(_0x525890(0x1fb)) / 0x6 * (parseInt(_0x525890(0x200)) / 0x7) + parseInt(_0x525890(0x1f1)) / 0x8 * (-parseInt(_0x525890(0x1f7)) / 0x9) + parseInt(_0x525890(0x1fe)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4315, 0x71f98));
console[a0_0x4ec3d7(0x202)](function (args) {
    const _0x33ccc7 = a0_0x4ec3d7;
    const tmp = args[_0x33ccc7(0x1fd)]()[_0x33ccc7(0x203)]('\x0a')[_0x33ccc7(0x1f4)](r => r[_0x33ccc7(0x203)]('\x20')[_0x33ccc7(0x1f4)](v => v | 0x0));
    const N = tmp[0x0][0x0], Q = tmp[N + 0x1][0x0];
    const V = [0x0], W = [0x0], v = [], L = [];
    for (let i = 0x1; i <= N; i++) {
        V[_0x33ccc7(0x1f9)](tmp[i][0x0]);
        W[_0x33ccc7(0x1f9)](tmp[i][0x1]);
    }
    let Lmax = 0x0;
    for (let i = 0x1; i <= Q; i++) {
        v[_0x33ccc7(0x1f9)](tmp[N + 0x1 + i][0x0]);
        L[_0x33ccc7(0x1f9)](tmp[N + 0x1 + i][0x1]);
        if (L[i - 0x1] > Lmax)
            Lmax = L[i - 0x1];
    }
    const dp = [Array(Lmax + 0x1)[_0x33ccc7(0x1fa)](0x0)];
    for (let i = 0x1; i <= N; i++) {
        dp[i] = [];
        for (let w = 0x0; w <= Lmax; w++) {
            if (w >= W[i])
                dp[i][w] = Math[_0x33ccc7(0x1f8)](dp[i >> 0x1][w - W[i]] + V[i], dp[i >> 0x1][w]);
            else
                dp[i][w] = dp[i >> 0x1][w];
        }
    }
    const max = [];
    for (let i = 0x0; i < Q; i++) {
        max['push'](dp[v[i]][L[i]]);
    }
    return max[_0x33ccc7(0x201)]('\x0a');
}(require('fs')[a0_0x4ec3d7(0x1fc)]('/dev/stdin', a0_0x4ec3d7(0x1f5))));