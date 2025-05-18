'use strict';
(function (input) {
    const _0x1ff5fe = (function () {
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
        _0x1ff5fe(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x5a77a0('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5a77a0();
            }
        })();
    }());
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    const N = input['shift']();
    const a = input;
    var ans = 0x0;
    while (a['length'] > 0x1) {
        let x = a['splice'](a['indexOf'](Math['min']['apply'](null, a)), 0x1)[0x0];
        let y = a['splice'](a['indexOf'](Math['min']['apply'](null, a)), 0x1)[0x0];
        a['push'](x + y);
        ans += x + y;
    }
    console['log'](ans);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x5a77a0(ret) {
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