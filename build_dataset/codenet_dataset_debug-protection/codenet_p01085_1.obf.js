function Main(input) {
    var _0x4627b5 = (function () {
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
        _0x4627b5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x57a18a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x57a18a();
            }
        })();
    }());
    input = input['split']('\x0a');
    var k = 0x0;
    while (0x1) {
        input[k] = input[k]['split']('\x20');
        var m = parseInt(input[k][0x0], 0xa);
        var nmin = parseInt(input[k][0x1], 0xa);
        var nmax = parseInt(input[k++][0x2], 0xa);
        if (m == 0x0 && nmin == 0x0 && nmax == 0x0)
            break;
        var maxg = 0x0, maxn = 0x0;
        var p = [];
        for (var i = 0x0; i < m; i++)
            p[i] = parseInt(input[k++], 0xa);
        for (var i = nmin - 0x1; i < nmax; i++) {
            if (p[i] - p[i + 0x1] >= maxg) {
                maxg = p[i] - p[i + 0x1];
                maxn = i;
            }
        }
        console['log'](maxn + 0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x57a18a(ret) {
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