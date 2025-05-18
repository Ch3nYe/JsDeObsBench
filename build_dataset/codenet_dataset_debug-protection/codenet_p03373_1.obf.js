'use strict';
function main(s) {
    const _0x51bac3 = (function () {
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
        _0x51bac3(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3a1266('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3a1266();
            }
        })();
    }());
    s = s['split']('\x0a')[0x0]['split']('\x20')['map'](n => Number(n));
    const A = s[0x0];
    const B = s[0x1];
    const C = s[0x2];
    const X = s[0x3];
    const Y = s[0x4];
    const min = Math['min'](X, Y);
    const case1 = A * X + B * Y;
    const case2 = 0x2 * C * min + (X - min) * A + (Y - min) * B;
    const case3 = 0x2 * C * Math['max'](X, Y);
    const answer = Math['min'](...[
        case1,
        case2,
        case3
    ]);
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3a1266(ret) {
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