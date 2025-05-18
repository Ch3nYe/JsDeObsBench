function toNum(str) {
    return parseInt(str, 0xa);
}
function gcd(a, b) {
    if (a % b === 0x0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}
function Main(input) {
    var _0x5d2641 = (function () {
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
        _0x5d2641(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x454285('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x454285();
            }
        })();
    }());
    var N = toNum(input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    var M = toNum(input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    var S = input['split']('\x0a')[0x1];
    var T = input['split']('\x0a')[0x2];
    var L = lcm(N, M);
    var flag = !![];
    var X = [];
    for (var i = 0x0; i < L; i++) {
        X['push']('');
    }
    X[0x0] = S[0x0];
    for (var i = 0x1; i < S['length']; i++) {
        X[i * (L / N)] = S[i];
    }
    if (X[0x0] != T[0x0]) {
        console['log']('-1');
    } else {
        for (var i = 0x1; i < T['length']; i++) {
            if (X[i * (L / M)] != '' && X[i * (L / M)] != T[i]) {
                console['log']('-1');
                flag = ![];
                break;
            }
        }
    }
    if (flag) {
        console['log'](L);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x454285(ret) {
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