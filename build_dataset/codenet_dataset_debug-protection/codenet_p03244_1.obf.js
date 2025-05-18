'use strict';
function Main(input) {
    const _0x335270 = (function () {
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
        _0x335270(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xc637d7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xc637d7();
            }
        })();
    }());
    let lines = input['split']('\x0a');
    let N = lines['shift']() - 0x0;
    let V = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
    let ans = 0x0;
    for (let n = 0x0; n < N - 0x2; n++) {
        if (V[n] == V[n + 0x1])
            ans += 0x1;
        if (V[n] != V[n + 0x2])
            ans += 0x1;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xc637d7(ret) {
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