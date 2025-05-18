console['log']((args => {
    const JZSmBU = {
        'ENAXi': function (callee, param1) {
            return callee(param1);
        },
        'iGsZz': function (x, y) {
            return x < y;
        },
        'ZqqkZ': function (x, y) {
            return x + y;
        }
    };
    const [N, ...P] = args['trim']()['split']('\x0a')['map'](v => v | 0x0);
    const dp = JZSmBU['ENAXi'](Array, N)['fill'](0x0);
    for (let i = 0x0; JZSmBU['iGsZz'](i, N); i++)
        dp[P[i] + 0x1] = JZSmBU['ZqqkZ'](dp[P[i]], 0x1);
    return '' + (N - dp['reduce']((a, b) => a > b ? a : b, 0x0));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));