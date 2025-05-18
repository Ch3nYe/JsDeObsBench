function Main(input) {
    var _0x3fb203 = (function () {
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
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    a = new Array(n - 0x1)['fill'](0x0);
    b = new Array(n - 0x1)['fill'](0x0);
    for (i = 0x0; i < n - 0x1; i++) {
        tmp = input[i + 0x1]['split']('\x20');
        a[i] = parseInt(tmp[0x0]) - 0x1;
        b[i] = parseInt(tmp[0x1]) - 0x1;
    }
    d1 = new Array(n)['fill'](n);
    d1[0x0] = 0x0;
    d2 = new Array(n)['fill'](n);
    d2[n - 0x1] = 0x0;
    function f(x, d) {
        (function () {
            _0x3fb203(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x76ef18('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x76ef18();
                }
            })();
        }());
        for (i = 0x0; i < n - 0x1; i++) {
            if (a[i] == x && d[b[i]] > d[a[i]]) {
                d[b[i]] = d[a[i]] + 0x1;
                var j = i;
                f(b[i], d);
                i = j;
            }
            if (b[i] == x && d[a[i]] > d[b[i]]) {
                d[a[i]] = d[b[i]] + 0x1;
                var j = i;
                f(a[i], d);
                i = j;
            }
        }
        return d;
    }
    d1 = f(0x0, d1);
    d2 = f(n - 0x1, d2);
    var x = 0x0;
    for (i = 0x0; i < n; i++) {
        if (i != 0x0 && i != n - 0x1) {
            if (d1[i] <= d2[i]) {
                x++;
            }
        }
    }
    var ans = 'Fennec';
    if (x <= n - 0x2 - x) {
        ans = 'Snuke';
    }
    console['log']('%s', ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x76ef18(ret) {
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