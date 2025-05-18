'use strict';
function main(input) {
    const _0x418b55 = (function () {
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
        _0x418b55(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3ab56f('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3ab56f();
            }
        })();
    }());
    input = input['split'](/\n/);
    let S = input[0x0]['split']('');
    const T = input[0x1]['split']('');
    const us = 'UNRESTORABLE';
    for (let i = S['length'] - T['length']; i >= 0x0; i--) {
        let x = 0x0;
        for (let j = 0x0; j < T['length']; j++) {
            if (S[i + j] == T[j] || S[i + j] == '?') {
            } else {
                x++;
                continue;
            }
        }
        if (x > 0x0)
            continue;
        for (let k = 0x0; k < T['length']; k++) {
            S[i + k] = T[k];
        }
        for (let i = 0x0; i < S['length']; i++) {
            S[i] = S[i] == '?' ? 'a' : S[i];
        }
        console['log'](S = S['join'](''));
        return;
    }
    console['log'](us);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3ab56f(ret) {
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