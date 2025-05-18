const a0_0x3b902d = (function () {
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
    a0_0x3b902d(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x54d5cb('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x54d5cb();
        }
    })();
}());
'use strict';
const main = input => {
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const x = parseInt(args[0x0][0x0], 0xa);
    const y = parseInt(args[0x0][0x1], 0xa);
    const group1 = [
        0x1,
        0x3,
        0x5,
        0x7,
        0x8,
        0xa,
        0xc
    ];
    const group2 = [
        0x4,
        0x6,
        0x9,
        0xb
    ];
    if (group1['includes'](x) && group1['includes'](y))
        console['log']('Yes');
    else if (group2['includes'](x) && group2['includes'](y))
        console['log']('Yes');
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x54d5cb(ret) {
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