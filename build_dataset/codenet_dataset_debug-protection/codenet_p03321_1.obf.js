function Main(s) {
    var _0x1e9b86 = (function () {
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
        _0x1e9b86(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x7f82af('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x7f82af();
            }
        })();
    }());
    s = s['split']('\x0a');
    var n = s[0x0]['split']('\x20')['map'](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var b = Array(n)['fill'](0x0)['map'](a => Array(n)['fill'](0x0));
    for (var i = 0x0; i < m; i++) {
        var a = s[i + 0x1]['split']('\x20')['map'](a => a - 0x1);
        b[a[0x0]][a[0x1]] = b[a[0x1]][a[0x0]] = 0x1;
    }
    var k = 0x218711a00;
    var x;
    for (i = 0x0; i < n; i++) {
        var t = b[i]['reduce']((a, b) => a + b);
        if (k > t) {
            k = t;
            x = i;
        }
    }
    var y = [], z = [];
    for (i = 0x0; i < n; i++) {
        if (i === x)
            continue;
        if (b[x][i])
            y['push'](i);
        else
            z['push'](i);
    }
    for (i = 0x0; i < y['length']; i++)
        for (var j = i + 0x1; j < y['length']; j++) {
            if (!b[y[i]][y[j]]) {
                console['log'](-0x1);
                return;
            }
        }
    for (i = 0x0; i < z['length']; i++)
        for (j = i + 0x1; j < z['length']; j++) {
            if (!b[z[i]][z[j]]) {
                console['log'](-0x1);
                return;
            }
        }
    console['log'](k * (k + 0x1) / 0x2 + (n - k - 0x1) * (n - k - 0x2) / 0x2);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x7f82af(ret) {
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