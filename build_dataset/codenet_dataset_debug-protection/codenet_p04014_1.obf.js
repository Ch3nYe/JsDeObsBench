function Main(s) {
    const _0x14b440 = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
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
        _0x14b440(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x400d24('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x400d24();
            }
        })();
    }());
    s = s['split']('\x0a')['map'](a => parseInt(a));
    const n = s[0x0];
    s = s[0x1];
    const sn = Math['ceil'](Math['sqrt'](n));
    if (s === n) {
        console['log'](n + 0x1);
        return;
    }
    for (var b = 0x2; b < sn; b++) {
        if (s === f(b, n)) {
            console['log'](b);
            return;
        }
    }
    var p = Math['floor']((n - s) / (sn - 0x1));
    for (; p > 0x0; p--) {
        b = Math['floor']((n - s) / p + 0x1);
        if (s === f(b, n)) {
            console['log'](b);
            return;
        }
    }
    console['log'](-0x1);
}
function f(b, n) {
    if (n < b)
        return n;
    return f(b, Math['floor'](n / b)) + n % b;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x400d24(ret) {
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