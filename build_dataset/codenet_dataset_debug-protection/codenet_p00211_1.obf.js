function GCD(a, b) {
    var _0x3a36db = (function () {
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
        _0x3a36db(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x16f380('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x16f380();
            }
        })();
    }());
    var m = Math['max'](a, b);
    var n = Math['min'](a, b);
    while (n != 0x0) {
        var N = n;
        n = m % n;
        m = N;
    }
    return m;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var I = 0x0; I < n; I++) {
        var v = Arr['shift']()['split']('\x20')['map'](Number);
        var gcd = GCD(v[0x0], v[0x1]);
        arr['push']([
            v[0x0] / gcd,
            v[0x1] / gcd
        ]);
    }
    var lcm = 0x1;
    arr['forEach'](function (v) {
        var gcd = GCD(v[0x1], lcm);
        lcm = v[0x1] * lcm / gcd;
    });
    arr = arr['map'](function (v, i) {
        return v[0x0] * (lcm / v[0x1]);
    });
    var lcm = 0x1;
    arr['forEach'](function (v) {
        var gcd = GCD(v, lcm);
        lcm = v * lcm / gcd;
    });
    arr['forEach'](function (v) {
        console['log'](lcm / v);
    });
}
function _0x16f380(ret) {
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