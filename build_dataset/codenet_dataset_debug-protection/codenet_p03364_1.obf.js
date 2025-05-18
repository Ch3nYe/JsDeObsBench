var lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
var n = lines[0x0] | 0x0;
var s = lines['slice'](0x1);
function good(a, b) {
    var _0x44169a = (function () {
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
        _0x44169a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1edf47('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1edf47();
            }
        })();
    }());
    for (var i = 0x0; i < n; ++i) {
        for (var j = 0x0; j < n; ++j) {
            if (s[(i + a) % n][(j + b) % n] !== s[(j + a) % n][(i + b) % n])
                return 0x0;
        }
    }
    return 0x1;
}
var ans = 0x0;
for (var a = 0x0; a < n; ++a) {
    for (var b = 0x0; b < n; ++b) {
        ans += good(a, b);
    }
}
console['log'](ans);
function _0x1edf47(ret) {
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