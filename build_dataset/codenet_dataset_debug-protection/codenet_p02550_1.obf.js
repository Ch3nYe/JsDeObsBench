const a0_0x4181ad = (function () {
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
    a0_0x4181ad(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x50c401('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x50c401();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['split']('\x0a');
const [N, X, M] = lines[0x0]['split']('\x20')['map'](Number);
let a = X;
const map = {};
const loop = [];
const pre = [a];
for (let i = 0x1; i < N; i++) {
    a = a * a % M;
    if (map[a] === 0x2) {
        break;
    } else if (map[a]) {
        loop['push'](a);
        pre['pop']();
    } else {
        pre['push'](a);
    }
    map[a] = (map[a] || 0x0) + 0x1;
}
const suf = [];
for (let i = 0x0; i < (N - pre['length']) % (loop['length'] || 0x1); i++) {
    suf['push'](loop[i]);
}
const sum = loop['reduce']((a, b) => a + b, 0x0);
const lt = loop['length'] ? Math['floor']((N - pre['length']) / loop['length']) : 0x0;
console['log'](pre['reduce']((a, b) => a + b, 0x0) + sum * lt + suf['reduce']((a, b) => a + b, 0x0));
function a0_0x50c401(ret) {
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