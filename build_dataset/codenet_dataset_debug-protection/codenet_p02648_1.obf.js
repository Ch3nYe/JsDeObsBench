console['log'](function (args) {
    const _0x1f768a = (function () {
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
        _0x1f768a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4b04b6('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4b04b6();
            }
        })();
    }());
    const tmp = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const N = tmp[0x0][0x0], Q = tmp[N + 0x1][0x0];
    const V = [0x0], W = [0x0], v = [], L = [];
    for (let i = 0x1; i <= N; i++) {
        V['push'](tmp[i][0x0]);
        W['push'](tmp[i][0x1]);
    }
    let Lmax = 0x0;
    for (let i = 0x1; i <= Q; i++) {
        v['push'](tmp[N + 0x1 + i][0x0]);
        L['push'](tmp[N + 0x1 + i][0x1]);
        if (L[i - 0x1] > Lmax)
            Lmax = L[i - 0x1];
    }
    const dp = [Array(Lmax + 0x1)['fill'](0x0)];
    for (let i = 0x1; i <= N; i++) {
        dp[i] = [];
        for (let w = 0x0; w <= Lmax; w++) {
            if (w >= W[i])
                dp[i][w] = Math['max'](dp[i >> 0x1][w - W[i]] + V[i], dp[i >> 0x1][w]);
            else
                dp[i][w] = dp[i >> 0x1][w];
        }
    }
    const max = [];
    for (let i = 0x0; i < Q; i++) {
        max['push'](dp[v[i]][L[i]]);
    }
    return max['join']('\x0a');
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x4b04b6(ret) {
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