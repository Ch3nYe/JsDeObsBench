const a0_0x517f36 = (function () {
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
    a0_0x517f36(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x5c2dec('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5c2dec();
        }
    })();
}());
'use strict';
let lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
let N = +lines[0x0]['split']('\x20')[0x0];
let ABs = lines['slice'](0x1)['map'](line => line['split']('\x20')['map'](Number));
let res = [];
for (let i = 0x0; i < N; i++)
    res[i] = 0x0;
ABs['forEach'](ab => {
    res[ab[0x0] - 0x1]++;
    res[ab[0x1] - 0x1]++;
});
res['forEach'](n => console['log'](n));
function a0_0x5c2dec(ret) {
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