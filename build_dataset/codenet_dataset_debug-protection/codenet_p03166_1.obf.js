'use strict';
console['log'](function (args) {
    const _0x13dc1e = (function () {
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
        _0x13dc1e(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x225594('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x225594();
            }
        })();
    }());
    const tmp = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const N = tmp[0x0][0x0], M = tmp[0x0][0x1];
    const x = [], y = [];
    for (let i = 0x0; i < M; i++) {
        x['push'](tmp[0x1 + i][0x0]);
        y['push'](tmp[0x1 + i][0x1]);
    }
    const dp = Array(M + 0x1)['fill'](0x0)['map'](_ => Array(N + 0x1)['fill'](0x0));
    for (let i = 0x1; i <= M; i++) {
        for (let j = 0x0; j < M; j++) {
            dp[i][y[j]] = Math['max'](dp[i][y[j]], dp[i - 0x1][x[j]] + 0x1);
        }
    }
    return Math['max'](...dp[M])['toString']();
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x225594(ret) {
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