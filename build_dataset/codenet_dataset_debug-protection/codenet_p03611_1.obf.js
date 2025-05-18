const a0_0x33c922 = (function () {
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
    a0_0x33c922(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x54c036('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x54c036();
        }
    })();
}());
'use strict';
const main = arg => {
    arg = arg['trim']()['split']('\x0a');
    const N = parseInt(arg[0x0]);
    const a = arg[0x1]['split']('\x20')['map'](n => parseInt(n))['sort']((a, b) => a - b);
    const set = new Set();
    let max = 0x0;
    for (let i = 0x0; i < N; i++) {
        let cnt = 0x0;
        if (set['has'](a[i])) {
            continue;
        }
        set['add'](a[i]);
        for (let j = 0x0; j < N; j++) {
            if (Math['abs'](a[j] - a[i]) <= 0x1) {
                cnt++;
            }
        }
        if (cnt > max) {
            max = cnt;
        }
    }
    console['log'](max);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x54c036(ret) {
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