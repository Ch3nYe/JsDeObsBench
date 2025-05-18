function Main(input) {
    const _0x350aee = (function () {
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
        _0x350aee(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x10fd29('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x10fd29();
            }
        })();
    }());
    'use strict';
    const temp = input['split']('\x0a');
    const s = temp['shift']()['split']();
    const q = parseInt(temp['shift']());
    const queries = temp['map'](query => query['split']('\x20'));
    let reverse_flag = 0x0;
    for (let i = 0x0; i < q; i++) {
        const query = queries[i];
        if (query['length'] == 0x1)
            reverse_flag = (reverse_flag + 0x1) % 0x2;
        else if (query['length'] == 0x3) {
            if (reverse_flag + parseInt(query[0x1]) % 0x2 == 0x0)
                s['push'](query[0x2]);
            else
                s['unshift'](query[0x2]);
        }
    }
    if (reverse_flag)
        console['log'](s['reverse']()['join']('') + '\x0a');
    else
        console['log'](s['join']('') + '\x0a');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x10fd29(ret) {
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