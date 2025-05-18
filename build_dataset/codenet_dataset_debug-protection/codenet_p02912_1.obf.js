const a0_0x26e96e = (function () {
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
    a0_0x26e96e(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x3e9ac0('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3e9ac0();
        }
    })();
}());
'use strict';
const arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
const args_lines = arg_str['split']('\x0a');
const n_m = args_lines[0x0]['split']('\x20');
const N = n_m[0x0];
const M = n_m[0x1];
let A_array = args_lines[0x1]['split']('\x20');
A_array = A_array['map'](x => parseInt(x));
for (let i = 0x0; i < M; i++) {
    const max_value = Math['max']['apply'](null, A_array);
    const max_index = A_array['indexOf'](max_value);
    A_array[max_index] = A_array[max_index] / 0x2;
}
const result = A_array['map'](x => Math['floor'](x))['reduce']((a, x) => a += x, 0x0);
console['log'](result);
function a0_0x3e9ac0(ret) {
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