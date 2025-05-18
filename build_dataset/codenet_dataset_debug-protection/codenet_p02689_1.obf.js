const a0_0x2ff259 = (function () {
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
    a0_0x2ff259(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x57bd40('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x57bd40();
        }
    })();
}());
'use strict';
const inputs = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
inputs['shift']();
const heights = inputs['shift']()['split']('\x20')['map'](v => parseInt(v, 0xa));
const towers = new Array(heights['length'])['fill']()['map'](_ => new Array());
inputs['forEach'](v => {
    const splited = v['split']('\x20')['map'](w => parseInt(w, 0xa) - 0x1);
    towers[splited[0x0]]['push'](splited[0x1]);
    towers[splited[0x1]]['push'](splited[0x0]);
});
let result = 0x0;
towers['forEach']((t, i) => {
    let good = !![];
    if (t['length']) {
        t['forEach'](t2 => {
            if (heights[i] <= heights[t2]) {
                good = ![];
            }
        });
    }
    if (good) {
        ++result;
    }
});
console['log'](result);
function a0_0x57bd40(ret) {
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