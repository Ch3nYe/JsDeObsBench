const a0_0x1331d3 = (function () {
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
    a0_0x1331d3(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x112ab1('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x112ab1();
        }
    })();
}());
'use strict';
const arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
const args = arg_str['split']('\x0a');
const N = parseInt(args[0x0]);
const a_array = args[0x1]['split']('\x20')['map'](x => parseInt(x));
for (let i = N; i >= 0x1; i--) {
    let i_n = 0x0;
    if (i == 0x1) {
        i_n = N;
    } else {
        i_n = Math['sqrt'](N);
    }
    for (let j = i_n; j >= 0x1; j--) {
        if (i < j) {
            if (j % i == 0x0) {
                a_array[i - 0x1] ^= a_array[j - 0x1];
            }
        } else {
            continue;
        }
    }
}
const result = [];
a_array['forEach']((item, index) => {
    if (item == 0x1) {
        result['push'](index + 0x1);
    }
});
console['log'](result['length']);
if (result['length'] > 0x0) {
    console['log'](result['join']('\x20'));
}
function a0_0x112ab1(ret) {
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