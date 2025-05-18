'use strict';
function Main(input) {
    const _0x2eb695 = (function () {
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
        _0x2eb695(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3286be('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3286be();
            }
        })();
    }());
    input = input['split']('\x0a');
    const line0 = input[0x0]['split']('\x20');
    let N = parseInt(line0[0x0]);
    let K = parseInt(line0[0x1]);
    if (K % 0x2 === 0x0) {
        console['log'](Math['floor'](N / K) ** 0x3 + Math['floor']((N + K / 0x2) / K) ** 0x3);
    } else {
        console['log'](Math['floor'](N / K) ** 0x3);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3286be(ret) {
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