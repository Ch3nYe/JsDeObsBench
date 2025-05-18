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
var mod = 0x3b9aca00 + 0x7;
function mul() {
    for (var a = arguments, r = a[0x0], i = a['length']; --i;)
        r = ((r >> 0x10) * a[i] % mod * 0x10000 + (r & 0xffff) * a[i]) % mod;
    return r;
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    var _0x3e80a5 = (function () {
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
        _0x3e80a5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4afbda('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4afbda();
            }
        })();
    }());
    var n = next();
    var x = nexts(n);
    var ans = 0x1, id = 0x1, rem = 0x0;
    for (var i = 0x0; i < n; i++) {
        rem++;
        ans = mul(ans, rem);
        if (x[i] < id) {
            rem--;
        } else {
            id += 0x2;
        }
    }
    return ans;
}
function _0x4afbda(ret) {
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