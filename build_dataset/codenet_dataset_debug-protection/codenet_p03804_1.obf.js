const a0_0x1cf409 = (function () {
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
    a0_0x1cf409(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x53017f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x53017f();
        }
    })();
}());
'use strict';
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
const NM = input[0x0]['split']('\x20')['map'](Number);
const N = NM[0x0];
const M = NM[0x1];
const As = input['slice'](0x1, N + 0x1);
const Bs = input['slice'](N + 0x1, N + M + 0x1);
for (let ax = 0x0; ax < N - M; ax++) {
    for (let ay = 0x0; ay < N - M; ay++) {
        let flag = !![];
        for (let bx = 0x0; bx < M; bx++) {
            for (let by = 0x0; by < M; by++) {
                if (As[ax + bx][ay + by] !== Bs[bx][by]) {
                    flag = ![];
                    break;
                }
            }
            if (!flag)
                break;
        }
        if (flag) {
            console['log']('Yes');
            process['exit'](0x0);
        }
    }
}
console['log']('No');
function a0_0x53017f(ret) {
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