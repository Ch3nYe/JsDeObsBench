function main(input) {
    var _0x43b2aa = (function () {
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
        _0x43b2aa(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x576508('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x576508();
            }
        })();
    }());
    var n = parseInt(input);
    var map = {};
    for (var i = 0x2; i <= n; i++) {
        var t = i;
        for (var j = 0x2; j * j <= t; j++) {
            if (t % j == 0x0) {
                var cnt = 0x0;
                while (t % j == 0x0) {
                    cnt++;
                    t /= j;
                }
                if (map[j]) {
                    map[j] = map[j] + cnt;
                } else {
                    map[j] = cnt;
                }
            }
        }
        if (t != 0x1) {
            if (map[t]) {
                map[t]++;
            } else {
                map[t] = 0x1;
            }
        }
    }
    var ans = 0x1;
    var mod = 0x3b9aca07;
    for (var x in map) {
        ans = ans * (map[x] + 0x1) % mod;
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x576508(ret) {
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