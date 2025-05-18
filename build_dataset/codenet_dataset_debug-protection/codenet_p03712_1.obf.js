'use strict';
function main(input) {
    const _0x2025da = (function () {
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
        _0x2025da(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x42c2dd('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x42c2dd();
            }
        })();
    }());
    input = input['split']('\x0a');
    input[0x0] = input[0x0]['split']('\x20')['map'](v => ~~v);
    const h = input[0x0][0x0];
    const w = input[0x0][0x1];
    let tmp = '#'['repeat'](w + 0x2) + '\x0a';
    for (let i = 0x1; i <= h; i++) {
        tmp += '#' + input[i] + '#\x0a';
    }
    tmp += '#'['repeat'](w + 0x2);
    console['log'](tmp);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x42c2dd(ret) {
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