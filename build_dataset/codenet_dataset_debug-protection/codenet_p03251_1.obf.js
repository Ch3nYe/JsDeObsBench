const a0_0x20bc52 = (function () {
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
    a0_0x20bc52(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0xd8ce36('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xd8ce36();
        }
    })();
}());
'use strict';
const main = input => {
    const num = input[0x0]['split']('\x20')['map'](val => parseInt(val)), N = num[0x0], M = num[0x1], X = num[0x2], Y = num[0x3], x = input[0x1]['split']('\x20')['map'](val => parseInt(val)), y = input[0x2]['split']('\x20')['map'](val => parseInt(val));
    const xMax = Math['max'](...x), yMin = Math['min'](...y);
    let ans = 0x0;
    for (let z = X + 0x1; z <= Y; z++) {
        if (xMax < z && yMin >= z) {
            ans = 0x1;
            break;
        }
    }
    console['log'](ans == 0x1 ? 'No\x20War' : 'War');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));
function a0_0xd8ce36(ret) {
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