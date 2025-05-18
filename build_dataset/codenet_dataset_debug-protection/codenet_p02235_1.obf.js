function lcs(x, y) {
    var _0x4fee79 = (function () {
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
        _0x4fee79(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x11ccc0('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x11ccc0();
            }
        })();
    }());
    var m = x['length'];
    var n = y['length'];
    for (var i = 0x1; i <= m; i++) {
        c[i][0x0] = 0x0;
    }
    for (var j = 0x1; j <= n; j++) {
        c[0x0][j] = 0x0;
    }
    for (var i = 0x1; i <= m; i++) {
        for (var j = 0x1; j <= n; j++) {
            if (x[i] == y[j]) {
                c[i][j] = c[i - 0x1][j - 0x1] + 0x1;
            } else if (c[i - 0x1][j] >= c[i][j - 0x1]) {
                c[i][j] = c[i - 0x1][j];
            } else {
                c[i][j] = c[i][j - 0x1];
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var n = +lines['shift']() - 0x0;
for (var idx = 0x0; idx < n; idx++) {
    var a = lines['shift']();
    var b = lines['shift']();
    var c = [[0x0]];
    for (var i = 0x1; i <= a['length']; i++) {
        var arr = [-0x1];
        c['push'](arr);
    }
    lcs(a, b);
    console['log'](c[a['length']][b['length']]);
}
function _0x11ccc0(ret) {
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