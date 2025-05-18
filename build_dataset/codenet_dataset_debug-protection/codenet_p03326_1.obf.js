function Main(s) {
    var _0x82dcbe = (function () {
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
        _0x82dcbe(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xf3d819('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xf3d819();
            }
        })();
    }());
    s = s['split']('\x0a');
    var n = s[0x0]['split']('\x20')['map'](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var x;
    var a = Array(0x4)['fill'](0x0)['map'](a => Array(n));
    for (var i = 0x0; i < n; i++) {
        x = s[i + 0x1]['split']('\x20')['map'](a => +a);
        a[0x0][i] = x[0x0] + x[0x1] + x[0x2];
        a[0x1][i] = x[0x0] + x[0x1] - x[0x2];
        a[0x2][i] = x[0x0] - x[0x1] + x[0x2];
        a[0x3][i] = -x[0x0] + x[0x1] + x[0x2];
    }
    var ans = 0x0;
    for (i = 0x0; i < 0x4; i++) {
        a[i]['sort']((a, b) => a - b);
        var t = 0x0;
        for (var j = 0x0; j < m; j++) {
            t += a[i][j];
        }
        ans = Math['max'](ans, Math['abs'](t));
        t = 0x0;
        for (j = n; j > n - m;) {
            t += a[i][--j];
        }
        ans = Math['max'](ans, Math['abs'](t));
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xf3d819(ret) {
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