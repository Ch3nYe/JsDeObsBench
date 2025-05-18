log = console['log'];
var stdin = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
var lines = stdin['split']('\x0a');
var N = lines[0x0]['split']('\x20')['map'](Number)[0x0];
var T = lines['slice'](0x1)['filter'](v => v !== '')['map'](Number);
function gcd(a, b) {
    if (b === 0x0)
        return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    var _0x428a25 = (function () {
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
        _0x428a25(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x962e00('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x962e00();
            }
        })();
    }());
    return a * b / gcd(a, b);
}
for (var i = 0x1; i < N; i++) {
    T[i] = lcm(T[i], T[i - 0x1]);
}
log(T[N - 0x1]);
function _0x962e00(ret) {
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