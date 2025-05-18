const a0_0x4f7da5 = (function () {
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
    a0_0x4f7da5(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x18bfbd('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x18bfbd();
        }
    })();
}());
'use strict';
const arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
const args_lines = arg_str['split']('\x0a');
const n = args_lines[0x0];
const a = args_lines[0x1]['split']('\x20')['map'](x => parseInt(x));
const b = args_lines[0x2]['split']('\x20')['map'](x => parseInt(x));
let cnt = 0x0;
let current_b = b;
while (!![]) {
    const max_index = current_b['indexOf'](Math['max'](...current_b));
    if (max_index == 0x0) {
        current_b[max_index] = current_b[max_index] - current_b[0x1] - current_b[n - 0x1];
    } else if (max_index == n - 0x1) {
        current_b[max_index] = current_b[max_index] - current_b[n - 0x2] - current_b[0x0];
    } else {
        current_b[max_index] = current_b[max_index] - current_b[max_index - 0x1] - current_b[max_index + 0x1];
    }
    cnt++;
    if (JSON['stringify'](current_b) == JSON['stringify'](a)) {
        console['log'](cnt);
        break;
    }
    if (current_b['find'](x => x < 0x1)) {
        console['log'](-0x1);
        break;
    }
}
function a0_0x18bfbd(ret) {
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