function Main(input) {
    var _0xee8a78 = (function () {
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
        _0xee8a78(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x22e2c6('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x22e2c6();
            }
        })();
    }());
    input = input['split']('\x20')['map'](a => parseInt(a));
    var N = input[0x0];
    var M = input[0x1];
    var ans = 0x0;
    if (N === 0x1 && M === 0x1)
        ans = 0x1;
    else if (N === 0x1 || M === 0x1)
        ans = N + M - 0x3;
    else
        ans = (N - 0x2) * (M - 0x2);
    if (ans > 0x1ff973cafa8000) {
        ans = Math['floor']((N - 0x2) / 0x2710) * (M - 0x2);
        tmp = (N - 0x2) % 0x2710 * (M - 0x2);
        ans += Math['floor'](tmp / 0x2710);
        tmp = ('0000' + tmp % 0x2710)['slice'](-0x4);
        ans += tmp;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x22e2c6(ret) {
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