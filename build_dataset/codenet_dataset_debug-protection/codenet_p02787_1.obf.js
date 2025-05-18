'use strict';
function Main(input) {
    const _0x2a3034 = (function () {
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
        _0x2a3034(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3f53ad('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f53ad();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const array = input[0x0]['split']('\x20')['map'](s => parseInt(s));
    const rest = input['slice'](0x1);
    const H = array[0x0];
    const N = array[0x1];
    const magic = [];
    for (let i = 0x0; i < rest['length']; ++i) {
        const a = rest[i]['split']('\x20')['map'](s => parseInt(s));
        magic['push']([
            a[0x0],
            a[0x1]
        ]);
    }
    magic['sort']((a, b) => a[0x0] - b[0x0]);
    let dp = Array(H + 0x1)['fill'](Infinity);
    dp[0x0] = 0x0;
    for (let i = 0x0; i < N; ++i) {
        const w = magic[i][0x0];
        const v = magic[i][0x1];
        for (let j = 0x0; j <= H; ++j) {
            const min = Math['min'](j + w, H);
            dp[min] = Math['min'](dp[min], dp[j] + v);
        }
    }
    console['log'](dp[H]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3f53ad(ret) {
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