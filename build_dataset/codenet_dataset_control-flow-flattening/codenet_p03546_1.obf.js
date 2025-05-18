console['log']((args => {
    const VxBEoE = {
        'jOFFB': function (x, y) {
            return x < y;
        },
        'ffuES': function (x, y) {
            return x < y;
        },
        'OmExh': function (x, y) {
            return x === y;
        }
    };
    const [[H, W], ...tmp] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => v | 0x0));
    const A = tmp['slice'](0xa);
    const dp = tmp['slice'](0x0, 0xa);
    for (let k = 0x0; VxBEoE['jOFFB'](k, 0xa); k++) {
        for (let i = 0x0; i < 0xa; i++) {
            for (let j = 0x0; j < 0xa; j++) {
                dp[i][j] = Math['min'](dp[i][j], dp[i][k] + dp[k][j]);
            }
        }
    }
    let cost = 0x0;
    for (let i = 0x0; VxBEoE['ffuES'](i, H); i++) {
        for (let j = 0x0; j < W; j++) {
            if (VxBEoE['OmExh'](A[i][j], -0x1) || VxBEoE['OmExh'](A[i][j], 0x1))
                continue;
            cost += dp[A[i][j]][0x1];
        }
    }
    return '' + cost;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));