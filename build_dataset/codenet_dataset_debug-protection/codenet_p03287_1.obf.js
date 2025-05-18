function Main(s) {
    var _0x57ddbe = (function () {
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
        _0x57ddbe(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5c5061('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5c5061();
            }
        })();
    }());
    s = s['split']('\x0a');
    var n = s[0x0]['split']('\x20')['map'](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var a = s[0x1]['split']('\x20')['map'](a => +a);
    var ans = 0x0;
    var b = {};
    var t = 0x0;
    for (var i = 0x0; i < n; i++) {
        t = (t + a[i]) % m;
        if (b[t])
            b[t]++;
        else
            b[t] = 0x1;
    }
    for (i in b) {
        i = +i;
        if (i === 0x0)
            ans += b[i] * (b[i] + 0x1) / 0x2;
        else if (b[i] > 0x1)
            ans += b[i] * (b[i] - 0x1) / 0x2;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5c5061(ret) {
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