console['log'](function (args) {
    const WogIIf = {
        'rKKTx': function (x, y) {
            return x | y;
        },
        'nYBfC': function (x, y) {
            return x - y;
        },
        'yvekN': function (x, y) {
            return x < y;
        },
        'AWfZX': function (x, y) {
            return x - y;
        },
        'OaSYD': function (x, y) {
            return x <= y;
        },
        'jfPRH': function (x, y) {
            return x + y;
        },
        'DRRvf': function (x, y) {
            return x + y;
        },
        'eCiFt': function (x, y) {
            return x + y;
        },
        'lqykb': function (x, y) {
            return x + y;
        },
        'fsECi': function (x, y) {
            return x * y;
        },
        'ZPnlr': function (x, y) {
            return x + y;
        },
        'OnoEH': function (x, y) {
            return x - y;
        },
        'EgBSz': function (x, y) {
            return x + y;
        }
    };
    const tmp = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20'));
    const N = WogIIf['rKKTx'](tmp['shift']()[0x0], 0x0);
    const p = tmp[0x0]['map'](parseFloat);
    const dp = Array(N)['fill'](0x0)['map'](r => Array(N + 0x1)['fill'](0x0));
    dp[0x0][0x0] = WogIIf['nYBfC'](0x1, p[0x0]);
    dp[0x0][0x1] = p[0x0];
    for (let i = 0x0; WogIIf['yvekN'](i, WogIIf['AWfZX'](N, 0x1)); i++) {
        for (let j = 0x0; WogIIf['OaSYD'](j, WogIIf['jfPRH'](i, 0x1)); j++) {
            dp[WogIIf['jfPRH'](i, 0x1)][WogIIf['DRRvf'](j, 0x1)] += dp[i][j] * p[WogIIf['eCiFt'](i, 0x1)];
            dp[WogIIf['lqykb'](i, 0x1)][j] += WogIIf['fsECi'](dp[i][j], WogIIf['AWfZX'](0x1, p[WogIIf['ZPnlr'](i, 0x1)]));
        }
    }
    return dp[WogIIf['OnoEH'](N, 0x1)]['slice'](WogIIf['EgBSz'](N, 0x1) / 0x2)['reduce']((a, b) => a + b)['toString']();
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));