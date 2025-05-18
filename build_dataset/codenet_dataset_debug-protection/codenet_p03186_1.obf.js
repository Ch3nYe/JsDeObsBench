'use strict';
function Main(input) {
    const _0x186bd0 = (function () {
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
        _0x186bd0(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3e5dba('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3e5dba();
            }
        })();
    }());
    input = input['trim']()['split']('\x20')['map'](Number);
    let badKusuri = input[0x0];
    let goodKusuri = input[0x1];
    let goodPoison = input[0x2];
    for (; goodKusuri > 0x0 && goodPoison > 0x0;) {
        goodKusuri--;
        goodPoison--;
    }
    if (goodPoison == 0x0) {
        goodKusuri = 0x0;
    } else {
        for (; badKusuri > 0x0 && goodPoison > 0x0;) {
            badKusuri--;
            goodPoison--;
        }
    }
    if (goodPoison > 0x0) {
        goodPoison--;
    }
    console['log'](input[0x1] + input[0x2] - (goodKusuri + goodPoison));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3e5dba(ret) {
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