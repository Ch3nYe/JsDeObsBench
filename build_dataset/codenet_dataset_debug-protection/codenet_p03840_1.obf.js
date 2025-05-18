'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
function next(a) {
    return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var a = arguments, l = a['length'], r = 'Array(a[' + --l + ']).fill().map(x=>{return\x20' + v + ';})';
    while (--l)
        r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    var _0x42de9d = (function () {
        var firstCall = !![];
        return function (context, fn) {
            var rfn = firstCall ? function () {
                if (fn) {
                    var res = fn['apply'](context, arguments);
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
        _0x42de9d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4496a6('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4496a6();
            }
        })();
    }());
    var a = nexts(0x7);
    var ans = a[0x1] + ((a[0x0] / 0x2 | 0x0) + (a[0x3] / 0x2 | 0x0) + (a[0x4] / 0x2 | 0x0)) * 0x2;
    switch (a[0x0] % 0x2 + a[0x3] % 0x2 + a[0x4] % 0x2) {
    case 0x3:
        ans += 0x3;
        break;
    case 0x2:
        if (a[0x0] * a[0x3] * a[0x4])
            ans += 0x1;
        break;
    }
    return ans;
}
function _0x4496a6(ret) {
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