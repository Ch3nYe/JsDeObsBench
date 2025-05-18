function Main(input) {
    const fPVLnA = {
        'RNgXA': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'FZgzl': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'dJdwN': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        }
    };
    input = input['split']('\x0a');
    const [N, K] = input[0x0]['split']('\x20')['map'](n => {
        return fPVLnA['RNgXA'](parseInt, n, 0xa);
    });
    const hn = input[0x1]['split']('\x20')['map'](n => {
        return fPVLnA['FZgzl'](parseInt, n, 0xa);
    });
    const h_max = Math['pow'](0xa, 0x9);
    console['log'](fPVLnA['dJdwN'](dp, N, K, hn, h_max));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function dp(N, K, hn, h_max) {
    const mViuIb = {
        'JaSAh': function (x, y) {
            return x <= y;
        },
        'PDMrm': function (x, y) {
            return x - y;
        },
        'XhEst': function (x, y) {
            return x - y;
        }
    };
    const dp = [];
    let dp_work = [];
    dp[0x0] = 0x0;
    for (var i = 0x1; i < N; i++) {
        dp['push'](h_max);
        dp_work = [];
        dp_work['push'](dp[i]);
        for (var dp_work_i = 0x1; mViuIb['JaSAh'](dp_work_i, K); dp_work_i++) {
            if (mViuIb['PDMrm'](i, dp_work_i) < 0x0)
                continue;
            dp_work['push'](dp[mViuIb['XhEst'](i, dp_work_i)] + Math['abs'](hn[mViuIb['XhEst'](i, dp_work_i)] - hn[i]));
        }
        dp[i] = Math['min'](...dp_work);
    }
    return dp[mViuIb['XhEst'](N, 0x1)];
}