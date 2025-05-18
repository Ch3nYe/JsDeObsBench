console['log'](function (args) {
    const _0x129818 = (function () {
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
        _0x129818(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x7133b2('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x7133b2();
            }
        })();
    }());
    const tmp = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20'));
    const N = tmp['shift']()[0x0] | 0x0;
    const p = tmp[0x0]['map'](parseFloat);
    const dp = Array(N)['fill'](0x0)['map'](r => Array(N + 0x1)['fill'](0x0));
    dp[0x0][0x0] = 0x1 - p[0x0];
    dp[0x0][0x1] = p[0x0];
    for (let i = 0x0; i < N - 0x1; i++) {
        for (let j = 0x0; j <= i + 0x1; j++) {
            dp[i + 0x1][j + 0x1] += dp[i][j] * p[i + 0x1];
            dp[i + 0x1][j] += dp[i][j] * (0x1 - p[i + 0x1]);
        }
    }
    return dp[N - 0x1]['slice']((N + 0x1) / 0x2)['reduce']((a, b) => a + b)['toString']();
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x7133b2(ret) {
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