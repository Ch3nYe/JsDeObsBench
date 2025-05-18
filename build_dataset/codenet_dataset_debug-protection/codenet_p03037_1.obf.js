'use strict';
function main(stdin) {
    const _0x4ef599 = (function () {
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
        _0x4ef599(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x48bf10('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x48bf10();
            }
        })();
    }());
    const input = stdin['split']('\x0a');
    const N = input['shift']()['split']('\x20')['map'](v => parseInt(v, 0xa))[0x0];
    const gates = input['map'](g => g['split']('\x20')['map'](v => parseInt(v, 0xa)));
    const cards = new Array(N)['fill'](!![]);
    gates['forEach'](g => {
        for (let i = 0x0; i < g[0x0] - 0x1; ++i) {
            cards[i] = ![];
        }
        for (let i = g[0x1]; i < N; ++i) {
            cards[i] = ![];
        }
    });
    console['log'](cards['filter'](c => c)['length']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x48bf10(ret) {
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