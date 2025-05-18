function Main(input) {
    var _0x10d898 = (function () {
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
        _0x10d898(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5c54d6('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5c54d6();
            }
        })();
    }());
    input = input['split']('\x0a');
    var N = parseInt(input[0x0]['split']('\x20')[0x0]);
    var K = parseInt(input[0x0]['split']('\x20')[0x1]);
    var anssub = new Array();
    var mod = Math['pow'](0xa, 0x9) + 0x7;
    for (var i = 0x1; i <= K; i++) {
        var a = combination(N - K + 0x1, i) % mod;
        var b = combination(K - 0x1, i - 0x1) % mod;
        var c = a * b % mod;
        anssub['push'](c);
    }
    var ans = anssub['join']('\x0a');
    console['log']('%s', ans);
    return ans;
}
function permutation(n, r) {
    for (var i = 0x0, res = 0x1; i < r; i++) {
        res *= n - i;
    }
    return res;
}
function combination(n, r) {
    return permutation(n, r) / permutation(r, r);
}
function debug(n) {
    var input = document['getElementById']('input' + n)['value'];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document['getElementById']('output' + n)['value']['split']('\x0a')[0x0]) {
        result = 'AC';
    }
    document['getElementById']('result' + n)['innerHTML'] = result;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5c54d6(ret) {
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