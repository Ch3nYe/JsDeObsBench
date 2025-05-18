const a0_0x3d9e88 = (function () {
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
    a0_0x3d9e88(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x1eeda6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1eeda6();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['split']('\x0a');
let [X, K, D] = lines[0x0]['split']('\x20')['map'](Number);
X = Math['abs'](X);
const div = Math['min'](Math['floor'](X / D), K);
let x = X - div * D;
let k = K - div;
for (let i = 0x0; i < k; i++) {
    x -= D;
    if (x <= 0x0) {
        if (!((k - i) % 0x2)) {
            x += D;
        }
        break;
    }
}
console['log'](Math['abs'](x));
function a0_0x1eeda6(ret) {
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