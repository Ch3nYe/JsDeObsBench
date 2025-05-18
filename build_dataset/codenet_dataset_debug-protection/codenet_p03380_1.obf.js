function Main(s) {
    var _0x5b3988 = (function () {
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
        _0x5b3988(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xeca6d9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xeca6d9();
            }
        })();
    }());
    s = s['split']('\x0a');
    var a = s[0x1]['split']('\x20')['map'](a => +a);
    const n = +s[0x0];
    var m = Math['max'](...a);
    var b = [...a]['sort']((a, b) => a - b);
    var c = 0x218711a00;
    for (var i = 0x0; i < n - 0x1; i++) {
        if (Math['abs'](m / 0x2 - b[i]) < c)
            c = Math['abs'](m / 0x2 - b[i]);
        else
            break;
    }
    console['log']('%d\x20%d', m, b[i - 0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xeca6d9(ret) {
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