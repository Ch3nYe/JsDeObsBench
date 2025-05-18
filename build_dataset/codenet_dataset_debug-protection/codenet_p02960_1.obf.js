'use strict';
function main(inp) {
    const _0x1b295f = (function () {
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
        _0x1b295f(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x36afdb('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x36afdb();
            }
        })();
    }());
    inp = inp['trim']();
    const MOD = 0x3b9aca07;
    let dp = [new Array(0xd)['fill'](0x0)];
    dp[0x0][0x0] = 0x1;
    for (let i = 0x0; i < inp['length']; i++) {
        dp[i + 0x1] = new Array(0xd)['fill'](0x0);
        const c = inp[i] === '?' ? -0x1 : inp[i] - 0x0;
        for (let j = 0x0; j < 0xa; j++) {
            if (c !== -0x1 && c !== j)
                continue;
            for (let k = 0x0; k < 0xd; k++) {
                dp[i + 0x1][(k * 0xa + j) % 0xd] += dp[i][k];
            }
        }
        for (let j = 0x0; j < 0xd; j++) {
            dp[i + 0x1][j] %= MOD;
        }
    }
    console['log'](dp[inp['length']][0x5]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x36afdb(ret) {
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