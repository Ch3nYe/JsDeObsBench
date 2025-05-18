const a0_0x30c02b = (function () {
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
    a0_0x30c02b(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x1ef4fc('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1ef4fc();
        }
    })();
}());
'use strict';
const main = arg => {
    arg = arg['trim']()['split']('\x0a');
    const A = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const B = parseInt(arg[0x0]['split']('\x20')[0x1]);
    for (let i = 0x1; i <= 0x2710; i++) {
        const temp1 = Math['floor'](i * 0.08);
        const temp2 = Math['floor'](i * 0.1);
        if (temp1 === A && temp2 === B) {
            console['log'](i);
            return;
        }
    }
    console['log'](-0x1);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x1ef4fc(ret) {
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