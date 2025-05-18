'use strict';
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](line => line['split']('\x20')['map'](val => parseInt(val), 0xa));
const N = input[0x0][0x0];
const M = input[0x0][0x1];
const ans = [];
const par = [];
for (let i = 0x1; i <= N; i++) {
    par[i] = -0x1;
}
function root(x) {
    if (par[x] < 0x0) {
        return x;
    }
    return par[x] = root(par[x]);
}
function unite(x, y) {
    const rx = root(x);
    const ry = root(y);
    if (rx === ry) {
        return;
    }
    par[ry] += par[rx];
    par[rx] = ry;
}
function isSame(x, y) {
    return root(x) === root(y);
}
function getSize(x) {
    const _0x3a9c48 = (function () {
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
        _0x3a9c48(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4edec1('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4edec1();
            }
        })();
    }());
    return -par[root(x)];
}
ans[M] = N * (N - 0x1) / 0x2;
for (let i = M; i > 0x1; i--) {
    const x = input[i][0x0];
    const y = input[i][0x1];
    if (isSame(x, y)) {
        ans[i - 0x1] = ans[i];
        continue;
    }
    ans[i - 0x1] = ans[i] - getSize(x) * getSize(y);
    unite(x, y);
}
for (let i = 0x1; i <= M; i++) {
    console['log'](ans[i]);
}
function _0x4edec1(ret) {
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