function Main(s) {
    var _0x41748a = (function () {
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
    s = s['split']('\x0a');
    var n = +s[0x0];
    var m = 0x1 << n;
    var a = s[0x1]['split']('\x20')['map'](a => +a);
    var b = [a[0x0]], c = [[
                a[0x0],
                0x0
            ]], d = [[
                -0x1,
                -0x1
            ]];
    for (var i = 0x1; i < m; i++) {
        f(i);
    }
    console['log'](b['slice'](0x1)['join']('\x0a'));
    function f(n) {
        (function () {
            _0x41748a(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x8dac9d('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x8dac9d();
                }
            })();
        }());
        var q = {}, s = n, t = 0x0;
        while (s) {
            t++;
            s >>= 0x1;
        }
        for (var i = 0x0; i < t; i++) {
            var u = n & (0x1 << i ^ 0xfffff);
            if (u === n)
                continue;
            q[c[u][0x1]] = c[u][0x0];
            q[d[u][0x1]] = d[u][0x0];
        }
        s = [
            a[n],
            n
        ], t = [
            -0x1,
            -0x1
        ];
        for (i in q) {
            if (t[0x0] > q[i])
                continue;
            if (s[0x0] > q[i])
                t = [
                    q[i],
                    i
                ];
            else {
                t = s;
                s = [
                    q[i],
                    i
                ];
            }
        }
        b[n] = Math['max'](b[n - 0x1], t[0x0] + s[0x0]);
        c[n] = t;
        d[n] = s;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x8dac9d(ret) {
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