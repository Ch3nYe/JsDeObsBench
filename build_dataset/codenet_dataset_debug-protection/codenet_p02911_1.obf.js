const a0_0x381f13 = (function () {
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
    a0_0x381f13(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x2f174b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2f174b();
        }
    })();
}());
'use strict';
let arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
arg_str = arg_str['split']('\x0a');
const arg_str_0 = arg_str[0x0]['split']('\x20');
const N = arg_str_0[0x0];
const K = arg_str_0[0x1];
const Q = arg_str_0[0x2];
const A_array = arg_str['slice'](0x1);
let result_val = [];
for (let i = 0x0; i < N; i++) {
    result_val[i] = K;
}
A_array['forEach']((item, index) => {
    for (let i = 0x0; i < N; i++) {
        if (item - 0x1 != i) {
            result_val[i]--;
        }
    }
});
result_val['map'](x => x > 0x0 ? console['log']('Yes') : console['log']('No'));
function a0_0x2f174b(ret) {
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