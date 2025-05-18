const a0_0x2538d5 = (function () {
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
    a0_0x2538d5(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x367083('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x367083();
        }
    })();
}());
'use strict';
const main = arg => {
    arg = arg['trim']()['split']('\x0a');
    const N = parseInt(arg[0x0]);
    const A = arg[0x1]['split']('\x20')['map'](n => parseInt(n));
    const totalSum = A['reduce']((m, n) => m + n);
    let left = A[0x0];
    let right = totalSum - A[0x0];
    let answer = Infinity;
    for (let i = 0x0; i < N - 0x1; i++) {
        let diff = Math['abs'](right - left);
        answer = Math['min'](answer, diff);
        right -= A[parseInt(i) + 0x1];
        left += A[parseInt(i) + 0x1];
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x367083(ret) {
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