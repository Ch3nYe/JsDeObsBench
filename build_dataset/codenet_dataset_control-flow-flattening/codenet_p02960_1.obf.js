'use strict';
function main(inp) {
    const iQOENS = {
        'YxwTB': function (x, y) {
            return x < y;
        },
        'gfRJc': function (x, y) {
            return x === y;
        },
        'esoAQ': function (x, y) {
            return x - y;
        },
        'JILRA': function (x, y) {
            return x !== y;
        },
        'zBsVI': function (x, y) {
            return x !== y;
        },
        'DOHNb': function (x, y) {
            return x + y;
        },
        'mMxUw': function (x, y) {
            return x % y;
        },
        'Kutwi': function (x, y) {
            return x * y;
        },
        'jjtAt': function (x, y) {
            return x < y;
        }
    };
    inp = inp['trim']();
    const MOD = 0x3b9aca07;
    let dp = [new Array(0xd)['fill'](0x0)];
    dp[0x0][0x0] = 0x1;
    for (let i = 0x0; iQOENS['YxwTB'](i, inp['length']); i++) {
        dp[i + 0x1] = new Array(0xd)['fill'](0x0);
        const c = iQOENS['gfRJc'](inp[i], '?') ? -0x1 : iQOENS['esoAQ'](inp[i], 0x0);
        for (let j = 0x0; iQOENS['YxwTB'](j, 0xa); j++) {
            if (iQOENS['JILRA'](c, -0x1) && iQOENS['zBsVI'](c, j))
                continue;
            for (let k = 0x0; iQOENS['YxwTB'](k, 0xd); k++) {
                dp[iQOENS['DOHNb'](i, 0x1)][iQOENS['mMxUw'](iQOENS['DOHNb'](iQOENS['Kutwi'](k, 0xa), j), 0xd)] += dp[i][k];
            }
        }
        for (let j = 0x0; iQOENS['jjtAt'](j, 0xd); j++) {
            dp[iQOENS['DOHNb'](i, 0x1)][j] %= MOD;
        }
    }
    console['log'](dp[inp['length']][0x5]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));