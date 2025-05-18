function Main(s) {
    var _0x667b38 = (function () {
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
        _0x667b38(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x9a275e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x9a275e();
            }
        })();
    }());
    s = s['split']('\x0a');
    var n = parseInt(s[0x0]);
    var a = Array(n);
    var c = Array(n);
    for (var i = 0x0; i < n; i++) {
        a[i] = s[i + 0x1]['split']('\x20')['map'](a => parseInt(a));
    }
    for (var i = 0x0; i < n; i++) {
        c[i] = s[i + n + 0x1]['split']('\x20')['map'](a => parseInt(a));
    }
    a = a['sort']((a, b) => a[0x1] - b[0x1]);
    a = a['sort']((a, b) => a[0x0] - b[0x0]);
    c = c['sort']((a, b) => a[0x0] - b[0x0]);
    c = c['sort']((a, b) => b[0x1] - a[0x1]);
    var ans = 0x0;
    for (i = n - 0x1; i >= 0x0; i--) {
        for (var j = c['length'] - 0x1; j >= 0x0; j--) {
            if (a[i][0x0] < c[j][0x0] && a[i][0x1] < c[j][0x1]) {
                ans++;
                c['splice'](j, 0x1);
                break;
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x9a275e(ret) {
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