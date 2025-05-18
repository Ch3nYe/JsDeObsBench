function f(use, x, n, acc) {
    if (x > n)
        return acc;
    if (use === 0x7)
        acc += 0x1;
    acc += f(use | 0x1, x * 0xa + 0x3, n, 0x0);
    acc += f(use | 0x2, x * 0xa + 0x5, n, 0x0);
    acc += f(use | 0x4, x * 0xa + 0x7, n, 0x0);
    return acc;
}
function Main(input) {
    var _0x165545 = (function () {
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
        _0x165545(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1c863c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1c863c();
            }
        })();
    }());
    var n = parseInt(input);
    console['log'](f(0x0, 0x0, n, 0x0));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1c863c(ret) {
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