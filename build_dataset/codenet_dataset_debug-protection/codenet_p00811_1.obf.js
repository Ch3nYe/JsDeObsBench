function prime(max) {
    var _0x3b93c1 = (function () {
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
        _0x3b93c1(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x37e993('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x37e993();
            }
        })();
    }());
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result['push'](arr[i]);
    }
    return result;
}
var PRIME = prime(0x186a0);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['some'](function (v) {
    if (v == '0\x200\x200')
        return !![];
    var mab = v['split']('\x20')['map'](Number);
    var m = mab[0x0];
    var a = mab[0x1];
    var b = mab[0x2];
    var ans = [
        0x0,
        0x0,
        0x0
    ];
    for (var p = 0x0; p < PRIME['length']; p++) {
        for (var q = p; q < PRIME['length']; q++) {
            var pq = PRIME[p] * PRIME[q];
            if (pq > m)
                break;
            if (PRIME[q] * a <= PRIME[p] * b && ans[0x2] < pq)
                ans = [
                    PRIME[p],
                    PRIME[q],
                    pq
                ];
        }
    }
    console['log'](ans[0x0] + '\x20' + ans[0x1]);
});
function _0x37e993(ret) {
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