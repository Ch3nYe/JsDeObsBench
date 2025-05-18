function Main(s) {
    var _0x5e1f45 = (function () {
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
        _0x5e1f45(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x58a532('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x58a532();
            }
        })();
    }());
    s = s['split']('\x20')['map'](a => +a);
    var n = s[0x0];
    var a = calc(s[0x1]);
    var b = calc(s[0x2]);
    var ans = [];
    var k = 0x0;
    for (var i = 0x0; i < 0x2 * n; i++)
        for (var j = 0x0; j < 0x2 * n; j++) {
            if (f(a, i, j) && f(b, i, j))
                ans[k++] = i + '\x20' + j;
            if (k === n * n) {
                console['log'](ans['join']('\x0a'));
                return;
            }
        }
}
function calc(n) {
    var s = 0x1;
    while ((n & 0x3) === 0x0) {
        s++;
        n >>>= 0x2;
    }
    return [
        s,
        n & 0x1
    ];
}
function f(s, y, x) {
    y = Math['floor'](y / s[0x0]);
    if (!s[0x1])
        return !(y & 0x1);
    x = Math['floor'](x / s[0x0]);
    return !(x + y & 0x1);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x58a532(ret) {
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