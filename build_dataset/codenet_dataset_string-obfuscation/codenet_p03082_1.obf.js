'use strict';
const a0_0x2cb839 = a0_0x4b46;
(function (stringArrayFunction, comparisonValue) {
    const _0x2d85eb = a0_0x4b46;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2d85eb(0x14d)) / 0x1 + parseInt(_0x2d85eb(0x148)) / 0x2 + -parseInt(_0x2d85eb(0x150)) / 0x3 + -parseInt(_0x2d85eb(0x159)) / 0x4 + -parseInt(_0x2d85eb(0x152)) / 0x5 * (parseInt(_0x2d85eb(0x151)) / 0x6) + -parseInt(_0x2d85eb(0x14e)) / 0x7 + parseInt(_0x2d85eb(0x155)) / 0x8 * (parseInt(_0x2d85eb(0x14b)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x138e, 0x1fc3e));
function a0_0x4b46(UabhYK, key) {
    const stringArray = a0_0x138e();
    a0_0x4b46 = function (index, key) {
        index = index - 0x148;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4b46(UabhYK, key);
}
function a0_0x138e() {
    const _0x215822 = [
        'split',
        '279AuIXwY',
        'fill',
        '19270uqKNLt',
        '1174789FWDSoQ',
        'utf8',
        '124569rgMvdo',
        '42nmhcRg',
        '163245LMPClI',
        'map',
        'shift',
        '152552MoyzaN',
        'sort',
        'readFileSync',
        '/dev/stdin',
        '934932HgGjwS',
        '382654UcziVF',
        'log'
    ];
    a0_0x138e = function () {
        return _0x215822;
    };
    return a0_0x138e();
}
function Main(input) {
    const _0x2d6d7b = a0_0x4b46;
    let lines = input[_0x2d6d7b(0x14a)]('\x0a');
    let NX = lines[_0x2d6d7b(0x154)]()['trim']()[_0x2d6d7b(0x14a)](/\s/)[_0x2d6d7b(0x153)](v => v - 0x0);
    let n = NX[0x0], x = NX[0x1];
    let S = lines['shift']()['trim']()['split'](/\s/)[_0x2d6d7b(0x153)](v => v - 0x0);
    const MOD = 0x3b9aca00 + 0x7, MAX_N = 0xd2, MAX_VAL = 0x186a0 + 0xa;
    const add = (a, b) => (a + b) % MOD;
    const mul = (a, b) => a * b % MOD;
    let dp = new Array(MAX_N)[_0x2d6d7b(0x14c)](0x0)['map'](() => new Array(MAX_VAL)[_0x2d6d7b(0x14c)](-0x1));
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
    S[_0x2d6d7b(0x156)]((a, b) => b - a);
    console[_0x2d6d7b(0x149)](rec(0x0, x));
}
Main(require('fs')[a0_0x2cb839(0x157)](a0_0x2cb839(0x158), a0_0x2cb839(0x14f)));