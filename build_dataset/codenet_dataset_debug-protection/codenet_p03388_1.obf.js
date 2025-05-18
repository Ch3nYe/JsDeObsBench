function Main(s) {
    var _0x18bc67 = (function () {
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
        _0x18bc67(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x403837('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x403837();
            }
        })();
    }());
    s = s['split']('\x0a');
    const q = +s[0x0];
    for (var i = 0x0; i < q; i++) {
        var a = s[i + 0x1]['split']('\x20')['map'](a => +a);
        var b = Math['max'](a[0x0], a[0x1]);
        a = Math['min'](a[0x0], a[0x1]);
        var c = Math['ceil'](Math['sqrt'](a * b));
        var ans = (a - 0x1) * 0x2;
        if (a < b - 0x1)
            ans++;
        for (var j = a + 0x1; j < c; j++) {
            if (Math['floor'](a / j * b) === j)
                ans++;
            else
                ans += 0x2;
        }
        console['log'](ans);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x403837(ret) {
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