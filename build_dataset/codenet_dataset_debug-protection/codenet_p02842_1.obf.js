function Main(input) {
    var _0x278470 = (function () {
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
        _0x278470(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x147bd4('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x147bd4();
            }
        })();
    }());
    var tax = 1.08;
    var invalid = ':(';
    var input = input['split']('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var x = Math['floor'](n / tax);
    var reverse_n = Math['floor'](x * tax);
    if (n == reverse_n) {
        console['log'](x);
        return;
    }
    var x_u = x + 0x1;
    if (Math['floor'](x_u * tax) == n) {
        console['log'](x_u);
        return;
    }
    var x_u2 = x + 0x2;
    if (Math['floor'](x_u2 * tax) == n) {
        console['log'](x_u2);
        return;
    }
    var x_d = x - 0x1;
    if (Math['floor'](x_d * tax) == n) {
        console['log'](x_d);
        return;
    }
    var x_d = x - 0x2;
    if (Math['floor'](x_d * tax) == n) {
        console['log'](x_d);
        return;
    }
    console['log'](invalid);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x147bd4(ret) {
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