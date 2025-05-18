const a0_0x338467 = (function () {
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
    a0_0x338467(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x49f644('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x49f644();
        }
    })();
}());
'use strict';
const main = arg => {
    arg = arg['trim']()['split']('\x0a');
    const D = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const N = parseInt(arg[0x0]['split']('\x20')[0x1]);
    let temp = [...Array(D * 0x2)]['fill'](0x0);
    let answer = parseInt(N + String(temp['join']('')));
    let plus = parseInt(0x1 + String(temp['join']('')));
    console['log'](N !== 0x64 ? answer : answer + plus);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x49f644(ret) {
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