const a0_0x30d7fd = (function () {
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
    a0_0x30d7fd(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x227e1e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x227e1e();
        }
    })();
}());
'use strict';
const Main = input => {
    const tmp = input['trim']()['split']('\x0a');
    const N = parseInt(tmp[0x0]['split']('\x20')[0x0]);
    const A = parseInt(tmp[0x0]['split']('\x20')[0x1]);
    const B = parseInt(tmp[0x0]['split']('\x20')[0x2]);
    const S = tmp[0x1];
    let result = [];
    let count = 0x0;
    let overseas = 0x0;
    for (let i = 0x0; i < N; i++) {
        const participant = S['split']('')[i];
        if (participant === 'a') {
            if (count < A + B) {
                result['push']('Yes');
                count += 0x1;
            } else {
                result['push']('No');
            }
        } else if (participant === 'b') {
            if (count < A + B && overseas < B) {
                result['push']('Yes');
                count += 0x1;
                overseas += 0x1;
            } else {
                result['push']('No');
            }
        } else {
            result['push']('No');
        }
    }
    result = result['join']('\x0a');
    console['log'](result);
    return result;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x227e1e(ret) {
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