var mod = 0x3b9aca00 + 0x7;
function Main(s) {
    var _0x1a56ba = (function () {
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
        _0x1a56ba(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4eefaa('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4eefaa();
            }
        })();
    }());
    var n = parseInt(s[0x0]);
    var sl = s[0x1]['length'];
    var a = Array(n + 0x1)['fill'](0x0)['map'](a => Array(n + 0x2)['fill'](0x0));
    a[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= n; i++) {
        a[i][0x0] = a[i - 0x1][0x0] + a[i - 0x1][0x1];
        a[i][0x0] %= mod;
        for (var j = 0x1; j <= i; j++) {
            a[i][j] = a[i - 0x1][j - 0x1] * 0x2 + a[i - 0x1][j + 0x1];
            a[i][j] %= mod;
        }
    }
    console['log'](permod(a[n][sl], powmod(0x2, sl)));
}
function abmod() {
    var rt = arguments[0x0];
    for (var i = 0x1; i < arguments['length']; i++) {
        rt = (rt >>> 0x10) * arguments[i] % mod * 0x10000 + (rt & 0xffff) * arguments[i];
        rt %= mod;
    }
    return rt;
}
function powmod(a, n) {
    var rt = 0x1;
    while (n) {
        if (n & 0x1)
            rt = abmod(a, rt);
        a = abmod(a, a);
        n >>>= 0x1;
    }
    return rt;
}
function permod(a, n) {
    var rt = powmod(n, mod - 0x2);
    rt = abmod(rt, a);
    return rt;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));
function _0x4eefaa(ret) {
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