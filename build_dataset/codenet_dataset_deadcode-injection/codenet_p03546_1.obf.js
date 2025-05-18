const a0_0x159506 = a0_0x5e2f;
function a0_0x5e2f(CAjVNa, key) {
    const stringArray = a0_0x4b68();
    a0_0x5e2f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5e2f(CAjVNa, key);
}
function a0_0x4b68() {
    const _0x2205df = [
        'log',
        'trim',
        'split',
        'map',
        'slice',
        'min',
        'readFileSync'
    ];
    a0_0x4b68 = function () {
        return _0x2205df;
    };
    return a0_0x4b68();
}
console[a0_0x159506(0x0)]((args => {
    const _0x289868 = a0_0x5e2f;
    const [[H, W], ...tmp] = args[_0x289868(0x1)]()[_0x289868(0x2)]`\n`[_0x289868(0x3)](r => r[_0x289868(0x2)]` `[_0x289868(0x3)](v => v | 0x0));
    const A = tmp[_0x289868(0x4)](0xa);
    const dp = tmp[_0x289868(0x4)](0x0, 0xa);
    for (let k = 0x0; k < 0xa; k++) {
        for (let i = 0x0; i < 0xa; i++) {
            for (let j = 0x0; j < 0xa; j++) {
                dp[i][j] = Math[_0x289868(0x5)](dp[i][j], dp[i][k] + dp[k][j]);
            }
        }
    }
    let cost = 0x0;
    for (let i = 0x0; i < H; i++) {
        for (let j = 0x0; j < W; j++) {
            if (A[i][j] === -0x1 || A[i][j] === 0x1)
                continue;
            cost += dp[A[i][j]][0x1];
        }
    }
    return '' + cost;
})(require('fs')[a0_0x159506(0x6)]('/dev/stdin', 'utf8')));