'use strict';
function Main(input) {
    const _0x439b89 = (function () {
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
        _0x439b89(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x2e9915('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2e9915();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const N = Number(input[0x0]['trim']());
    const A = input[0x1]['trim']()['split']('\x20')['map'](Number);
    let ret = 'YES';
    for (let i = 0x0; i < N; i++) {
        let tmp = A['slice'](i + 0x1);
        let r = tmp['indexOf'](A[i]);
        if (r !== -0x1) {
            ret = 'NO';
            break;
        }
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2e9915(ret) {
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