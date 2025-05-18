'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['trim']()['split'](/ |\n/), cid = 0x0;
console['log'](main()['toString']());
function main() {
    const _0x1eddaf = (function () {
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
        _0x1eddaf(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x53828e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x53828e();
            }
        })();
    }());
    let n = +cin['shift']();
    let a = Array(n);
    let b = Array(n);
    for (let i = 0x0; i < n; i++) {
        a[i] = +cin['shift']();
        b[i] = +cin['shift']();
    }
    a = a['sort']((x, y) => x - y);
    b = b['sort']((x, y) => x - y);
    let min, max;
    if (n % 0x2 == 0x0) {
        if (a[n / 0x2 - 0x1] != a[n / 0x2])
            min = a[n / 0x2] - 0x1 / 0x2;
        else
            min = a[0x2 / n];
        if (b[n / 0x2 - 0x1] != b[n / 0x2])
            max = b[n / 0x2 - 0x1] + 0x1 / 0x2;
        else
            max = b[n / 0x2 - 0x1];
        return (max - min) * 0x2 + 0x1;
    } else {
        min = a[(n - 0x1) / 0x2];
        max = b[(n - 0x1) / 0x2];
        return max - min + 0x1;
    }
}
function _0x53828e(ret) {
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