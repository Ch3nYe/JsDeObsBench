var fs = require('fs');
var inn = parseInt(fs['readFileSync'](0x0)['toString']());
function isPrime(n) {
    var _0x69f21a = (function () {
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
        _0x69f21a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1f2e0f('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1f2e0f();
            }
        })();
    }());
    if (n <= 0x3)
        return n > 0x1;
    else if (n % 0x2 === 0x0 || n % 0x3 === 0x0)
        return ![];
    var i = 0x5;
    while (Math['pow'](i, 0x2) <= n) {
        if (n % i === 0x0 || n % (i + 0x2) === 0x0)
            return ![];
        i += 0x6;
    }
    return !![];
}
while (!isPrime(inn)) {
    inn++;
}
console['log'](inn);
function _0x1f2e0f(ret) {
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