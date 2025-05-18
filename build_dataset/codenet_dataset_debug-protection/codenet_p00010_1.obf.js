var a0_0x5cbb60 = (function () {
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
    a0_0x5cbb60(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x12aa96('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x12aa96();
        }
    })();
}());
require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['some'](function (i) {
    j = i['split']('\x20');
    if (j['length'] == 0x6)
        a = j[0x0], b = j[0x1], c = j[0x2], d = j[0x3], e = j[0x4], f = j[0x5], g = a * a, h = b * b, k = c * c, l = d * d, m = e * e, n = f * f, p = ((b - f) * (h - l + g - k) - (b - d) * (h - n + g - m)) / (0x2 * (b - f) * (a - c) - 0x2 * (b - d) * (a - e)), q = ((a - e) * (g - k + h - l) - (a - c) * (g - m + h - n)) / (0x2 * (a - e) * (b - d) - 0x2 * (a - c) * (b - f)), console['log'](p['toFixed'](0x3), q['toFixed'](0x3), Math['sqrt']((a - p) * (a - p) + (b - q) * (b - q))['toFixed'](0x3));
});
function a0_0x12aa96(ret) {
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