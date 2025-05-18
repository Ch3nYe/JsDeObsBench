function Main(input) {
    var _0x2977fa = (function () {
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
        _0x2977fa(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2e8bdd('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2e8bdd();
            }
        })();
    }());
    const S = parseInt(input);
    const MOD = 0x3b9aca00 + 0x7;
    var upr = 0x0, i = 0x1;
    do {
        if (S <= Math['pow'](0xa, i - 0x1) * 0x9 * i)
            upr = i;
        i++;
    } while (!upr);
    i = Math['floor'](S / upr);
    var ans = 0x0;
    var l = Math['pow'](0xa, upr - 0x1), r = l + i - 0x1;
    var flr = i * f(l);
    do {
        if (S % i)
            ans++;
        else
            ans += powmod(0xa, S / i - 0x1, MOD) * 0x9 - i + 0x1;
    } while (--i);
    while (--l) {
        flr += f(l);
        if (flr > S)
            flr -= f(r--);
        if (flr === S)
            ans++;
    }
    console['log']((ans + MOD) % MOD);
}
function powmod(a, b, c) {
    const N = 0x2710;
    var rt = 0x1;
    while (b) {
        if (b & 0x1)
            rt = (Math['floor'](a / N) * rt % c * N + a % N * rt) % c;
        a = (Math['floor'](a / N) * a % c * N + a % N * a) % c;
        b >>>= 0x1;
    }
    return rt;
}
function f(n) {
    if (n < 0xa)
        return 0x1;
    if (n < 0x64)
        return 0x2;
    if (n < 0x3e8)
        return 0x3;
    if (n < 0x2710)
        return 0x4;
    if (n < 0x186a0)
        return 0x5;
    if (n < 0xf4240)
        return 0x6;
    if (n < 0x989680)
        return 0x7;
    return 0x8;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2e8bdd(ret) {
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