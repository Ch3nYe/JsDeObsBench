'use strict';
function Main(input) {
    const _0xa448f6 = (function () {
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
        _0xa448f6(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x5b8e4b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5b8e4b();
            }
        })();
    }());
    const tmp = input['split']('\x20');
    let A = parseInt(tmp[0x0], 0xa);
    let B = parseInt(tmp[0x1], 0xa);
    const K = tmp[0x2];
    for (let i = 0x0; i < K; i++) {
        if (i % 0x2 == 0x0) {
            if (A % 0x2 == 0x1) {
                A--;
            }
            B += A / 0x2;
            A /= 0x2;
        } else {
            if (B % 0x2 == 0x1) {
                B--;
            }
            A += B / 0x2;
            B /= 0x2;
        }
    }
    console['log'](A, B);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5b8e4b(ret) {
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