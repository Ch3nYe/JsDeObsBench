function a0_0x5965(qeVnQr, key) {
    const stringArray = a0_0x3539();
    a0_0x5965 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5965(qeVnQr, key);
}
function a0_0x3539() {
    const _0x17b379 = [
        'log',
        'trim',
        'split',
        'map',
        'shift',
        'fill',
        'slice',
        'reduce',
        'toString',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3539 = function () {
        return _0x17b379;
    };
    return a0_0x3539();
}
const a0_0xac9029 = a0_0x5965;
console[a0_0xac9029(0x0)](function (args) {
    const _0x47f940 = a0_0x5965;
    const tmp = args[_0x47f940(0x1)]()[_0x47f940(0x2)]('\x0a')[_0x47f940(0x3)](r => r['split']('\x20'));
    const N = tmp[_0x47f940(0x4)]()[0x0] | 0x0;
    const p = tmp[0x0][_0x47f940(0x3)](parseFloat);
    const dp = Array(N)[_0x47f940(0x5)](0x0)['map'](r => Array(N + 0x1)[_0x47f940(0x5)](0x0));
    dp[0x0][0x0] = 0x1 - p[0x0];
    dp[0x0][0x1] = p[0x0];
    for (let i = 0x0; i < N - 0x1; i++) {
        for (let j = 0x0; j <= i + 0x1; j++) {
            dp[i + 0x1][j + 0x1] += dp[i][j] * p[i + 0x1];
            dp[i + 0x1][j] += dp[i][j] * (0x1 - p[i + 0x1]);
        }
    }
    return dp[N - 0x1][_0x47f940(0x6)]((N + 0x1) / 0x2)[_0x47f940(0x7)]((a, b) => a + b)[_0x47f940(0x8)]();
}(require('fs')[a0_0xac9029(0x9)](a0_0xac9029(0xa), 'utf8')));