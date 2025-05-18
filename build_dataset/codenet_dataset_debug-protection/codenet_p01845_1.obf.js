function Main(input) {
    var _0x457248 = (function () {
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
        _0x457248(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x18a836('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x18a836();
            }
        })();
    }());
    input = input['split']('\x0a');
    for (var i = 0x0; 0x1; i++) {
        input[i] = input[i]['split']('\x20');
        var r0 = parseInt(input[i][0x0], 0xa);
        var w0 = parseInt(input[i][0x1], 0xa);
        var c = parseInt(input[i][0x2], 0xa);
        var r = parseInt(input[i][0x3], 0xa);
        if (r0 == 0x0 && w0 == 0x0 && c == 0x0 && r == 0x0)
            break;
        var a = c * w0;
        if (a <= r0)
            console['log']('0');
        else {
            console['log'](Math['floor']((a - r0 + r - 0x1) / r));
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x18a836(ret) {
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