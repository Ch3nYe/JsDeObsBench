function Main(s) {
    var _0x3800d1 = (function () {
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
        _0x3800d1(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x47bf9c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x47bf9c();
            }
        })();
    }());
    s = s['split']('\x0a');
    s[0x0] = s[0x0]['split']('\x20')['map'](a => +a);
    var n = s[0x0][0x0];
    var c = s[0x0][0x1];
    var d = [], a = [];
    for (var i = 0x0; i < c; i++) {
        d[i] = s[i + 0x1]['split']('\x20')['map'](a => +a);
    }
    for (i = 0x0; i < n; i++) {
        a[i] = s[i + 0x1 + c]['split']('\x20')['map'](a => +a - 0x1);
    }
    var z = Array(0x3)['fill'](0x0)['map'](a => Array(c)['fill'](0x0));
    for (i = 0x0; i < n; i++)
        for (var j = 0x0; j < n; j++) {
            var t = (i + j) % 0x3;
            z[t][a[i][j]]++;
        }
    var ans = 0x218711a00;
    for (i = 0x0; i < c; i++) {
        for (j = 0x0; j < c; j++) {
            if (i === j)
                continue;
            for (var k = 0x0; k < c; k++) {
                if (i === k || j === k)
                    continue;
                t = 0x0;
                for (var l = 0x0; l < c; l++) {
                    t += z[0x0][l] * d[l][i];
                    t += z[0x1][l] * d[l][j];
                    t += z[0x2][l] * d[l][k];
                }
                ans = Math['min'](ans, t);
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x47bf9c(ret) {
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