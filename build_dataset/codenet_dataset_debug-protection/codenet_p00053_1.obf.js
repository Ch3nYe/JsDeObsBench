var m = [
    -0x1,
    0x2,
    0x3,
    0x5,
    0x7,
    0xb,
    0xd
];
function p(n) {
    var _0x30a3bc = (function () {
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
        _0x30a3bc(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2a2239('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2a2239();
            }
        })();
    }());
    if (m[n])
        return m[n];
    var found = m['length'] - 0x1;
    var foundP = m[found];
    for (var i = foundP + 0x2;; i += 0x2) {
        if (isPrime(i)) {
            found++;
            m[found] = i;
            if (found == n)
                return i;
        }
    }
}
function isPrime(num) {
    if (num % 0x3 == 0x0)
        return ![];
    var limit = Math['round'](Math['sqrt'](num));
    var i = 0x1;
    while (i * 0x6 - 0x1 <= limit) {
        if (num % (i * 0x6 - 0x1) == 0x0 || num % (i * 0x6 + 0x1) == 0x0)
            return ![];
        i++;
    }
    return !![];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var num = +line;
    if (num == 0x0)
        break;
    var s = 0x0;
    for (var i = num; i > 0x0; i--) {
        s += p(i);
    }
    console['log'](s);
}
function _0x2a2239(ret) {
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