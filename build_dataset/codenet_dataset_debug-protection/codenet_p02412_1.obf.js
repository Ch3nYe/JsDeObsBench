const a0_0x4e1d3a = (function () {
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
    a0_0x4e1d3a(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x4b9992('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4b9992();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\n/);
for (let i = 0x0; i < input['length']; i++) {
    let [n, x] = input[i]['split']('\x20')['map'](Number);
    if (n === 0x0 && x === 0x0) {
        break;
    }
    let count = 0x0;
    for (let j = 0x1; j <= n; j++) {
        for (let k = 0x1; k <= n; k++) {
            if (j === k) {
                break;
            }
            for (let l = 0x1; l <= n; l++) {
                if (j === l || k === l || j === k) {
                    break;
                }
                if (j + k + l === x) {
                    count++;
                }
            }
        }
    }
    console['log'](count);
}
function a0_0x4b9992(ret) {
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