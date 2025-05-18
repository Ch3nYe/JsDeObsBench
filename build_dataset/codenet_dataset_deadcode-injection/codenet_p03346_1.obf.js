function a0_0xfb5c() {
    const _0x3cfc4a = [
        'trim',
        'split',
        'map',
        'fill',
        'reduce',
        'readFileSync',
        'utf8'
    ];
    a0_0xfb5c = function () {
        return _0x3cfc4a;
    };
    return a0_0xfb5c();
}
function a0_0x580a(BgwwGh, key) {
    const stringArray = a0_0xfb5c();
    a0_0x580a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x580a(BgwwGh, key);
}
const a0_0x33191c = a0_0x580a;
console['log']((args => {
    const _0x42a357 = a0_0x580a;
    const [N, ...P] = args[_0x42a357(0x0)]()[_0x42a357(0x1)]('\x0a')[_0x42a357(0x2)](v => v | 0x0);
    const dp = Array(N)[_0x42a357(0x3)](0x0);
    for (let i = 0x0; i < N; i++)
        dp[P[i] + 0x1] = dp[P[i]] + 0x1;
    return '' + (N - dp[_0x42a357(0x4)]((a, b) => a > b ? a : b, 0x0));
})(require('fs')[a0_0x33191c(0x5)]('/dev/stdin', a0_0x33191c(0x6))));