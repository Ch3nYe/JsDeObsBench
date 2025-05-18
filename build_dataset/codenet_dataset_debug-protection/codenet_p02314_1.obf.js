const a0_0x29cb96 = (function () {
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
    a0_0x29cb96(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x3a8277('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3a8277();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const list = input['trim']()['split']('\x0a');
let [n, m] = list[0x0]['split']('\x20');
n = Number(n);
m = Number(m);
let cm = list[0x1]['trim']()['split']('\x20');
cm = cm['map'](c => Number(c));
const dp = new Map();
for (let i = 0x0; i < m; i++) {
    dp['set'](cm[i], 0x1);
}
const max = n + 0x1;
for (let i = 0x0; i <= n; i++) {
    if (dp['has'](i)) {
        continue;
    }
    let min = max;
    for (let j = 0x0; j < m; j++) {
        const target = i - cm[j];
        if (target < 0x0 || !dp['has'](target)) {
            continue;
        }
        const count = dp['get'](target);
        min = Math['min'](count, min);
    }
    if (min < max) {
        dp['set'](i, min + 0x1);
    }
}
console['log'](dp['get'](n));
function a0_0x3a8277(ret) {
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