'use strict';
function Main(input) {
    const _0x259fef = (function () {
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
        _0x259fef(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xf1e3ae('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xf1e3ae();
            }
        })();
    }());
    const arr = [
        'dream',
        'dreamer',
        'erase',
        'eraser'
    ];
    for (let i in arr) {
        arr[i] = reverse(arr[i]);
    }
    input = reverse(input);
    while (input['length'] > 0x0) {
        let flag = ![];
        for (let s of arr) {
            if (input['slice'](0x0, s['length']) == s) {
                input = input['substr'](s['length']);
                flag = !![];
            }
        }
        if (flag == ![])
            break;
    }
    if (input['length'] <= 0x0) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
function reverse(str) {
    return str['split']('')['reverse']()['join']('');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
function _0xf1e3ae(ret) {
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