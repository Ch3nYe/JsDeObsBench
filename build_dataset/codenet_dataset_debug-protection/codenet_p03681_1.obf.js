'use strict';
function main(input) {
    const _0x12c827 = (function () {
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
        _0x12c827(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x47fe8e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x47fe8e();
            }
        })();
    }());
    input = input['split']('\x20')['map'](v => ~~v);
    const n = input[0x0];
    const m = input[0x1];
    const limit = 0x3b9aca00 + 0x7;
    if (Math['abs'](n - m) >= 0x2) {
        console['log'](0x0);
        return;
    }
    let nn = 0x1;
    for (let i = 0x2; i <= n; i++) {
        nn *= i;
        if (nn >= limit) {
            nn = nn % limit;
        }
    }
    for (let i = 0x2; i <= m; i++) {
        nn *= i;
        if (nn >= limit) {
            nn = nn % limit;
        }
    }
    let tmp = nn % limit;
    if (n == m) {
        tmp = 0x2 * tmp;
    }
    const ans = tmp % limit;
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x47fe8e(ret) {
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