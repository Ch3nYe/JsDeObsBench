console['log'](function (args) {
    const adgoXD = {
        'RYmgH': function (x, y) {
            return x + y;
        },
        'LBtqA': function (x, y) {
            return x <= y;
        },
        'QdLBs': function (x, y) {
            return x + y;
        },
        'fiPwC': function (x, y) {
            return x + y;
        },
        'QXYfb': function (x, y) {
            return x > y;
        },
        'DcGGT': function (x, y) {
            return x - y;
        },
        'mCmpT': function (callee, param1) {
            return callee(param1);
        },
        'DjiYo': function (x, y) {
            return x >= y;
        },
        'TdGAY': function (x, y) {
            return x >> y;
        },
        'eysSp': function (x, y) {
            return x < y;
        }
    };
    const tmp = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const N = tmp[0x0][0x0], Q = tmp[adgoXD['RYmgH'](N, 0x1)][0x0];
    const V = [0x0], W = [0x0], v = [], L = [];
    for (let i = 0x1; i <= N; i++) {
        V['push'](tmp[i][0x0]);
        W['push'](tmp[i][0x1]);
    }
    let Lmax = 0x0;
    for (let i = 0x1; adgoXD['LBtqA'](i, Q); i++) {
        v['push'](tmp[adgoXD['QdLBs'](adgoXD['RYmgH'](N, 0x1), i)][0x0]);
        L['push'](tmp[adgoXD['fiPwC'](adgoXD['fiPwC'](N, 0x1), i)][0x1]);
        if (adgoXD['QXYfb'](L[adgoXD['DcGGT'](i, 0x1)], Lmax))
            Lmax = L[i - 0x1];
    }
    const dp = [adgoXD['mCmpT'](Array, Lmax + 0x1)['fill'](0x0)];
    for (let i = 0x1; i <= N; i++) {
        dp[i] = [];
        for (let w = 0x0; adgoXD['LBtqA'](w, Lmax); w++) {
            if (adgoXD['DjiYo'](w, W[i]))
                dp[i][w] = Math['max'](dp[adgoXD['TdGAY'](i, 0x1)][adgoXD['DcGGT'](w, W[i])] + V[i], dp[adgoXD['TdGAY'](i, 0x1)][w]);
            else
                dp[i][w] = dp[adgoXD['TdGAY'](i, 0x1)][w];
        }
    }
    const max = [];
    for (let i = 0x0; adgoXD['eysSp'](i, Q); i++) {
        max['push'](dp[v[i]][L[i]]);
    }
    return max['join']('\x0a');
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));