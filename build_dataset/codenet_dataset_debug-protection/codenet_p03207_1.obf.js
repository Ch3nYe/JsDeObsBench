const a0_0x5da81d = (function () {
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
    a0_0x5da81d(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x378783('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x378783();
        }
    })();
}());
'use strict';
const main = input => {
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const N = parseInt(args[0x0][0x0], 0xa);
    const p = args['slice'](0x1, N + 0x1)['map'](arg => parseInt(arg[0x0], 0xa))['sort']((a, b) => b - a);
    let sum = p[0x0] / 0x2;
    for (let i = 0x1; i < N; i++) {
        sum += p[i];
    }
    console['log'](sum);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x378783(ret) {
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