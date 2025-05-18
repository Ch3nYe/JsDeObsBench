const a0_0x3b9d8a = (function () {
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
    a0_0x3b9d8a(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x51096f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x51096f();
        }
    })();
}());
'use strict';
const main = arg => {
    const input = arg['trim']()['split']('\x0a');
    const n = parseInt(input[0x0]);
    const arr = input[0x1]['split']('\x20')['map'](n => parseInt(n));
    function cal(i, dst) {
        if (i === -0x1)
            return 0x0;
        const results = [];
        for (const j of dst) {
            const next_dst = dst['filter'](v => v !== j);
            const abs = i > j ? i - j : j - i;
            const val = arr[i] * abs + cal(i - 0x1, next_dst);
            results['push'](val);
        }
        return Math['max'](...results);
    }
    console['log'](cal(n - 0x1, [...Array(n)['keys']()]));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x51096f(ret) {
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