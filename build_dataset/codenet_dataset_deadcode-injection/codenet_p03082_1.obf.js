'use strict';
const a0_0x1fcff7 = a0_0x1e80;
function a0_0x2f61() {
    const _0x450aaf = [
        'shift',
        'trim',
        'split',
        'map',
        'fill',
        'sort',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2f61 = function () {
        return _0x450aaf;
    };
    return a0_0x2f61();
}
function a0_0x1e80(OEyJTb, key) {
    const stringArray = a0_0x2f61();
    a0_0x1e80 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e80(OEyJTb, key);
}
function Main(input) {
    const _0x1a4c5e = a0_0x1e80;
    let lines = input['split']('\x0a');
    let NX = lines[_0x1a4c5e(0x0)]()[_0x1a4c5e(0x1)]()['split'](/\s/)['map'](v => v - 0x0);
    let n = NX[0x0], x = NX[0x1];
    let S = lines[_0x1a4c5e(0x0)]()[_0x1a4c5e(0x1)]()[_0x1a4c5e(0x2)](/\s/)[_0x1a4c5e(0x3)](v => v - 0x0);
    const MOD = 0x3b9aca00 + 0x7, MAX_N = 0xd2, MAX_VAL = 0x186a0 + 0xa;
    const add = (a, b) => (a + b) % MOD;
    const mul = (a, b) => a * b % MOD;
    let dp = new Array(MAX_N)[_0x1a4c5e(0x4)](0x0)[_0x1a4c5e(0x3)](() => new Array(MAX_VAL)['fill'](-0x1));
    const rec = (pos, rem) => {
        if (pos == n)
            return rem;
        let ret = dp[pos][rem];
        if (ret != -0x1)
            return ret;
        ret = 0x0;
        dp[pos][rem] = add(ret, rec(pos + 0x1, rem % S[pos]));
        dp[pos][rem] = add(dp[pos][rem], mul(n - pos - 0x1, rec(pos + 0x1, rem)));
        return dp[pos][rem];
    };
    S[_0x1a4c5e(0x5)]((a, b) => b - a);
    console[_0x1a4c5e(0x6)](rec(0x0, x));
}
Main(require('fs')['readFileSync'](a0_0x1fcff7(0x7), a0_0x1fcff7(0x8)));