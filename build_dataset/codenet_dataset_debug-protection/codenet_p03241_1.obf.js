function Main(input) {
    var _0x3294ec = (function () {
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
        _0x3294ec(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x481500('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x481500();
            }
        })();
    }());
    input = input['split']('\x0a');
    tmp = input[0x0]['split']('\x20');
    var N = parseInt(tmp[0x0], 0xa);
    var M = parseInt(tmp[0x1], 0xa);
    var divisors = divisor(M);
    var max = 0x0;
    for (var i = 0x0; i < divisors['length']; i++) {
        var d = divisors[i];
        if (M / d >= N) {
            max = Math['max'](max, d);
        }
    }
    console['log']('%d', max);
}
function divisor(n) {
    var res = [];
    for (var i = 0x1; i * i <= n; i++) {
        if (n % i == 0x0) {
            res['push'](i);
            if (n / i != i) {
                res['push'](n / i);
            }
        }
    }
    return res;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x481500(ret) {
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