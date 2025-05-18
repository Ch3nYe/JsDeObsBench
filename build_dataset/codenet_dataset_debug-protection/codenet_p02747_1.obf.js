const a0_0x9487ca = (function () {
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
    a0_0x9487ca(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x11d6da('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x11d6da();
        }
    })();
}());
'use strict';
const Main = input => {
    let xs = input['trim']()['split']('');
    let len = xs['length'];
    let ans = 0x0;
    for (let i = 0x0; i <= len; i++) {
        if (i % 0x2 == 0x0 && xs[i] == 'h' && [i + 0x1] != 'h') {
            ans += 0x1;
        } else if (i % 0x2 == 0x1 && xs[i] == 'i' && xs[i + 0x1] != 'i') {
            ans += 0x1;
        } else {
            ans += 0x0;
        }
    }
    if (ans >= 0x2) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x11d6da(ret) {
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