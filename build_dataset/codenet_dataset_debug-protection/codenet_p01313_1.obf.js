var a0_0x92e14e = (function () {
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
    a0_0x92e14e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4fb82f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4fb82f();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var n = -0x1, i = function (d) {
        return Math['pow'](0xa, ~~d);
    }, l, p, c, r, o, a, b, am, bm, d;
process['stdin']['on']('data', function (ip) {
    p = ip['split']('\x0a');
    l = ~~p[0x0];
    for (c = 0x0; c < l; ++c) {
        r = [], o = p[c + 0x1]['split']('\x20'), d = 0x0;
        for (a = i(o[0x0] - 0x1), am = i(o[0x0]) - 0x1; a < am; ++a)
            for (b = i(o[0x1] - 0x1), bm = i(o[0x1]) - 0x1; b < bm; ++b)
                (b * b + b - a * a + a) / 0x2 == '' + a + b && (console['log'](a + '\x20' + b), ++d);
        d || console['log']('No\x20cats.');
    }
});
function a0_0x4fb82f(ret) {
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