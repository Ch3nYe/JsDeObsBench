const a0_0x1a4fde = a0_0xc931;
function a0_0x393b() {
    const _0xbbf5e3 = [
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'push',
        'abs',
        'min'
    ];
    a0_0x393b = function () {
        return _0xbbf5e3;
    };
    return a0_0x393b();
}
function Main(input) {
    const _0x1054af = a0_0xc931;
    input = input[_0x1054af(0x0)]('\x0a');
    const [N, K] = input[0x0]['split']('\x20')[_0x1054af(0x1)](n => {
        return parseInt(n, 0xa);
    });
    const hn = input[0x1][_0x1054af(0x0)]('\x20')[_0x1054af(0x1)](n => {
        return parseInt(n, 0xa);
    });
    const h_max = Math['pow'](0xa, 0x9);
    console[_0x1054af(0x2)](dp(N, K, hn, h_max));
}
Main(require('fs')[a0_0x1a4fde(0x3)](a0_0x1a4fde(0x4), a0_0x1a4fde(0x5)));
function a0_0xc931(hcINBa, key) {
    const stringArray = a0_0x393b();
    a0_0xc931 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xc931(hcINBa, key);
}
function dp(N, K, hn, h_max) {
    const _0x44f297 = a0_0xc931;
    const dp = [];
    let dp_work = [];
    dp[0x0] = 0x0;
    for (var i = 0x1; i < N; i++) {
        dp['push'](h_max);
        dp_work = [];
        dp_work[_0x44f297(0x6)](dp[i]);
        for (var dp_work_i = 0x1; dp_work_i <= K; dp_work_i++) {
            if (i - dp_work_i < 0x0)
                continue;
            dp_work[_0x44f297(0x6)](dp[i - dp_work_i] + Math[_0x44f297(0x7)](hn[i - dp_work_i] - hn[i]));
        }
        dp[i] = Math[_0x44f297(0x8)](...dp_work);
    }
    return dp[N - 0x1];
}