const a0_0x1a2acd = (function () {
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
    a0_0x1a2acd(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x95835('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x95835();
        }
    })();
}());
'use strict';
const main = arg => {
    const times = arg['trim']()['split']('\x0a')['map'](n => parseInt(n));
    let min = 0xa;
    let sum = 0x0;
    for (let i = 0x0; i < times['length']; i++) {
        let digitOne = String(times[i])['split']('');
        digitOne = parseInt(digitOne[digitOne['length'] - 0x1]);
        let digitMinus = 0xa - digitOne;
        sum += parseInt(times[i]);
        if (digitMinus !== 0xa) {
            sum += digitMinus;
        }
        if (digitMinus !== 0xa && digitOne < min) {
            min = digitOne;
        }
    }
    console['log'](parseInt(sum - (0xa - min)));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x95835(ret) {
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