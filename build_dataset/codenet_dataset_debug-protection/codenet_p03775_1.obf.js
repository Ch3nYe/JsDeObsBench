function divisor(n) {
    var ret = [];
    for (var i = 0x1; i * i <= n; i++) {
        if (n % i == 0x0) {
            ret['push'](i);
            if (i * i != n)
                ret['push'](n / i);
        }
    }
    return ret;
}
function f(a, b) {
    return Math['max'](('' + a)['length'], ('' + b)['length']);
}
function main(input) {
    var _0x11d75d = (function () {
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
        _0x11d75d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xd55e9d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xd55e9d();
            }
        })();
    }());
    var inputs = input['split']('\x0a');
    var n = parseInt(inputs[0x0], 0xa);
    var divisors = divisor(n)['sort']((a, b) => a - b);
    var surplus = divisors['length'] % 0x2;
    var lastIndex = divisors['length'] - 0x1;
    var halfLen = Math['floor'](divisors['length'] / 0x2);
    var minF = ('' + n)['length'];
    for (var i = 0x0; i < halfLen - surplus; i++) {
        minF = Math['min'](minF, f(divisors[i], divisors[lastIndex - i]));
    }
    if (surplus == 0x1)
        minF = Math['min'](minF, ('' + divisors[halfLen])['length']);
    console['log'](minF);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xd55e9d(ret) {
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