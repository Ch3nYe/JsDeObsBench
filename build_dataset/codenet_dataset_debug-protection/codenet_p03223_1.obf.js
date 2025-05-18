console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function main(s) {
    var _0x3c065a = (function () {
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
        _0x3c065a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x676e2d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x676e2d();
            }
        })();
    }());
    s = s['split']('\x0a')['map'](a => +a);
    var n = s[0x0];
    s[0x0] = s[n];
    s['pop']();
    s['sort']((a, b) => a - b);
    var ans = 0x0;
    var m = n + 0x1 >> 0x1;
    for (var i = 0x0; i < m; i++) {
        ans -= s[i] * 0x2;
    }
    for (; i < n; i++) {
        ans += s[i] * 0x2;
    }
    if (n % 0x2 === 0x0)
        return ans - s[m] + s[m - 0x1];
    if (s[m - 0x1] + s[m - 0x2] > s[m - 0x1] * 0x3 - s[m])
        return ans + s[m - 0x1] + s[m - 0x2];
    else
        return ans + s[m - 0x1] * 0x3 - s[m];
}
function _0x676e2d(ret) {
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