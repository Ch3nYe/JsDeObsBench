const a0_0x94cd00 = (function () {
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
    a0_0x94cd00(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x59ef25('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x59ef25();
        }
    })();
}());
'use strict';
const main = input => {
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const M = parseInt(args[0x0][0x0], 0xa);
    const D = parseInt(args[0x0][0x1], 0xa);
    let cnt = 0x0;
    for (let m = 0x1; m <= M; m++) {
        for (let j = 0x1; j <= D; j++) {
            const d1 = j % 0xa;
            const d10 = Math['floor'](j / 0xa);
            if (d1 >= 0x2 && d10 >= 0x2 && d1 * d10 === m) {
                cnt++;
            }
        }
    }
    console['log'](cnt);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x59ef25(ret) {
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