const a0_0x40f64f = (function () {
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
    a0_0x40f64f(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x44b6bd('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x44b6bd();
        }
    })();
}());
'use strict';
const Main = arg => {
    let input = arg['trim']()['split']('\x0a');
    let n = parseInt(input[0x0]);
    let pArr = input[0x1]['split']('\x20')['map'](Number);
    let count = 0x0;
    for (let i = 0x1; i - 0x1 < n; i++) {
        if (pArr[i - 0x1] < pArr[i] && pArr[i] < pArr[i + 0x1] || pArr[i + 0x1] < pArr[i] && pArr[i] < pArr[i - 0x1]) {
            count += 0x1;
        }
    }
    console['log'](count);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x44b6bd(ret) {
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