function Main(arg) {
    var _0x207b95 = (function () {
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
        _0x207b95(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1737cc('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1737cc();
            }
        })();
    }());
    var N = arg['split']('\x0a')[0x0] - 0x0;
    var A = arg['split']('\x0a')[0x1]['split']('\x20')['map'](v => v - 0x0);
    var tmp = new Set(A);
    var ans = [];
    ans['push'](N);
    for (var K = 0x2; K <= N; K++) {
        if (tmp['size'] < K) {
            ans['push'](0x0);
        } else {
            ans['push'](Math['floor'](tmp['size'] / K));
        }
    }
    console['log'](ans['join']('\x0a')['toString']());
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1737cc(ret) {
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