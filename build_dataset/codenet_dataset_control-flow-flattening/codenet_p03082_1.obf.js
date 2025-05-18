'use strict';
function Main(input) {
    const fvyrIi = {
        'WQTOC': function (x, y) {
            return x != y;
        },
        'CHGZO': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'Pbvze': function (x, y) {
            return x + y;
        },
        'RNWGY': function (x, y) {
            return x - y;
        },
        'HQaqF': function (x, y) {
            return x + y;
        }
    };
    let lines = input['split']('\x0a');
    let NX = lines['shift']()['trim']()['split'](/\s/)['map'](v => v - 0x0);
    let n = NX[0x0], x = NX[0x1];
    let S = lines['shift']()['trim']()['split'](/\s/)['map'](v => v - 0x0);
    const MOD = fvyrIi['Pbvze'](0x3b9aca00, 0x7), MAX_N = 0xd2, MAX_VAL = fvyrIi['HQaqF'](0x186a0, 0xa);
    const add = (a, b) => (a + b) % MOD;
    const mul = (a, b) => a * b % MOD;
    let dp = new Array(MAX_N)['fill'](0x0)['map'](() => new Array(MAX_VAL)['fill'](-0x1));
    const rec = (pos, rem) => {
        if (pos == n)
            return rem;
        let ret = dp[pos][rem];
        if (fvyrIi['WQTOC'](ret, -0x1))
            return ret;
        ret = 0x0;
        dp[pos][rem] = fvyrIi['CHGZO'](add, ret, fvyrIi['CHGZO'](rec, fvyrIi['Pbvze'](pos, 0x1), rem % S[pos]));
        dp[pos][rem] = add(dp[pos][rem], mul(fvyrIi['RNWGY'](fvyrIi['RNWGY'](n, pos), 0x1), rec(fvyrIi['Pbvze'](pos, 0x1), rem)));
        return dp[pos][rem];
    };
    S['sort']((a, b) => b - a);
    console['log'](fvyrIi['CHGZO'](rec, 0x0, x));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));