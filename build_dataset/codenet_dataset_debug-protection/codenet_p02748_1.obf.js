const a0_0x4320d1 = (function () {
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
    a0_0x4320d1(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x48d19f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x48d19f();
        }
    })();
}());
'use strict';
const main = arg => {
    arg = arg['trim']()['split']('\x0a');
    const A = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const B = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const M = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const freezer = arg[0x1]['split']('\x20')['map'](n => parseInt(n));
    const renzi = arg[0x2]['split']('\x20')['map'](n => parseInt(n));
    const xyc = arg['slice'](0x3, M + 0x4);
    const minFreeze = Math['min'](...freezer);
    const minRenzi = Math['min'](...renzi);
    let temp = minFreeze + minRenzi;
    for (let i in xyc) {
        let x = parseInt(xyc[i]['split']('\x20')[0x0]);
        let y = parseInt(xyc[i]['split']('\x20')[0x1]);
        let c = parseInt(xyc[i]['split']('\x20')[0x2]);
        let cost = freezer[x - 0x1] + renzi[y - 0x1] - c;
        if (cost <= temp) {
            temp = cost;
        }
    }
    console['log'](temp);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x48d19f(ret) {
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