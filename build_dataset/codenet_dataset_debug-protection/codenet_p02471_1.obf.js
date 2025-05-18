function euc(a, b) {
    var _0x3aa2b5 = (function () {
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
        _0x3aa2b5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x197f2e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x197f2e();
            }
        })();
    }());
    var r0 = a;
    var r1 = b;
    var x0 = 0x1;
    var x1 = 0x0;
    var y0 = 0x0;
    var y1 = 0x1;
    while (r1 > 0x0) {
        var q = Math['floor'](r0 / r1);
        var r2 = r0 % r1;
        var x2 = x0 - q * x1;
        var y2 = y0 - q * y1;
        r0 = r1;
        r1 = r2;
        x0 = x1;
        x1 = x2;
        y0 = y1;
        y1 = y2;
    }
    return [
        x0,
        y0
    ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var nums = input['split']('\x20')['map'](function (num) {
    return +num;
});
var a = nums[0x0];
var b = nums[0x1];
console['log'](euc(a, b)['join']('\x20'));
function _0x197f2e(ret) {
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