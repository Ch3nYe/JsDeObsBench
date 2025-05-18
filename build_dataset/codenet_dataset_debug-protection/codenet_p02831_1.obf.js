const a0_0x236cdd = (function () {
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
    a0_0x236cdd(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x7263b8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x7263b8();
        }
    })();
}());
'use strict';
const Main = input => {
    let xs = input['trim']()['split']('\x20')['map'](v => parseInt(v, 0xa));
    let m = xs[0x0];
    let n = xs[0x1];
    let r = 0x0;
    let d = 0x0;
    let x = m;
    let y = n;
    if (m >= n) {
        while (n > 0x0) {
            let r = m % n;
            m = n;
            n = r;
        }
        d = m;
    } else {
        while (m > 0x0) {
            r = n % m;
            n = m;
            m = r;
        }
        d = n;
    }
    let ans = x * y / d;
    console['log'](ans);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x7263b8(ret) {
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