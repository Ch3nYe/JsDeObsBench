function Main(input) {
    const _0x39fbbe = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
                    fn = null;
                    return res;
                }
            } : function () {
            };
            firstCall = ![];
            return rfn;
        };
    }());
    (function () {
        _0x39fbbe(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3a1153('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3a1153();
            }
        })();
    }());
    input = input['split']('\x0a');
    const [N, K] = input[0x0]['split']('\x20')['map'](n => {
        return parseInt(n, 0xa);
    });
    const hn = input[0x1]['split']('\x20')['map'](n => {
        return parseInt(n, 0xa);
    });
    const h_max = Math['pow'](0xa, 0x9);
    console['log'](dp(N, K, hn, h_max));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function dp(N, K, hn, h_max) {
    const dp = [];
    let dp_work = [];
    dp[0x0] = 0x0;
    for (var i = 0x1; i < N; i++) {
        dp['push'](h_max);
        dp_work = [];
        dp_work['push'](dp[i]);
        for (var dp_work_i = 0x1; dp_work_i <= K; dp_work_i++) {
            if (i - dp_work_i < 0x0)
                continue;
            dp_work['push'](dp[i - dp_work_i] + Math['abs'](hn[i - dp_work_i] - hn[i]));
        }
        dp[i] = Math['min'](...dp_work);
    }
    return dp[N - 0x1];
}
function _0x3a1153(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}