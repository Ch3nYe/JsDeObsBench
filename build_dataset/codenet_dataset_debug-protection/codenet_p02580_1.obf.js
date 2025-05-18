'use strict';
function Main(input) {
    const _0x1a4513 = (function () {
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
        _0x1a4513(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x1f2835('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1f2835();
            }
        })();
    }());
    const tmp = input['trim']()['split']('\x0a');
    const [H, W, M] = tmp['shift']()['split']('\x20')['map'](v => Number(v));
    const hw = tmp['map'](v => v['split']('\x20')['map'](v => Number(v)));
    let result = 0x0;
    for (let i = 0x1; i <= H; i++) {
        const harr = hw['filter'](v => v[0x0] !== i);
        const hlen = hw['length'] - harr['length'];
        for (let j = 0x1; j <= W; j++) {
            const warr = harr['filter'](v => v[0x1] === j);
            if (result < hlen + warr['length']) {
                result = hlen + warr['length'];
            }
        }
    }
    console['log'](result);
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1f2835(ret) {
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