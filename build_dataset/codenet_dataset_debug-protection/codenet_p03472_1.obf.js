const a0_0x2bc8ce = (function () {
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
    a0_0x2bc8ce(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x8de05a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x8de05a();
        }
    })();
}());
'use strict';
const main = arg => {
    arg = arg['trim']()['split']('\x0a');
    const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
    let H = parseInt(arg[0x0]['split']('\x20')[0x1]);
    let ab = arg['slice'](0x1, N + 0x1)['map'](n => n['split']('\x20')['map'](l => parseInt(l)));
    ab['sort']((a, b) => b[0x0] - a[0x0]);
    const aMax = ab[0x0][0x0];
    ab = ab['sort']((a, b) => b[0x1] - a[0x1])['filter'](n => n[0x1] > aMax);
    let damage = 0x0;
    let throwAttack = 0x0;
    for (let i in ab) {
        H -= ab[i][0x1];
        throwAttack++;
        if (H <= 0x0) {
            console['log'](throwAttack);
            return;
        }
    }
    const directAttack = Math['ceil'](H / aMax);
    console['log'](throwAttack + directAttack);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x8de05a(ret) {
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