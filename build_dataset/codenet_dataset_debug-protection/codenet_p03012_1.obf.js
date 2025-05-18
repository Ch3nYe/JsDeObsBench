'use strict';
const INF = 0x3333333333333;
function mapint(temp) {
    return temp['split']('\x20')['map'](v => parseInt(v));
}
function Main(input) {
    const _0x1e549c = (function () {
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
        _0x1e549c(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x408ffb('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x408ffb();
            }
        })();
    }());
    let temp = input['trim']()['split']('\x0a');
    let n = parseInt(temp[0x0]);
    let w = mapint(temp[0x1]);
    let s1 = w[0x0];
    let s2 = 0x0;
    for (let i = 0x1; i < n; i++) {
        s2 += w[i];
    }
    let sa = Math['abs'](s1 - s2);
    let sa2;
    for (let i = 0x1; i < n; i++) {
        s1 += w[i];
        s2 -= w[i];
        sa = Math['min'](sa, Math['abs'](s1 - s2));
    }
    console['log'](sa);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x408ffb(ret) {
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