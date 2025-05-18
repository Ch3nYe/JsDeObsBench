function maxCards(arr, max) {
    var _0x29c7f0 = (function () {
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
        _0x29c7f0(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x288218('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x288218();
            }
        })();
    }());
    for (var i = 0x0; i < n - (k - 0x1); i++) {
        var x = 0x1;
        var j = 0x0;
        while (j < k) {
            x *= arr[i + j];
            j++;
        }
        max = Math['max'](max, x);
    }
    return max;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var I = 0x0;
while (!![]) {
    var nk = Arr[I]['split']('\x20')['map'](Number);
    I++;
    var n = nk[0x0];
    var k = nk[0x1];
    if (n == 0x0 && k == 0x0)
        break;
    var c = [];
    for (var i = 0x0; i < n; i++) {
        c['push'](Arr[I]);
        I++;
    }
    var maxA = 0x1;
    maxA = maxCards(c, maxA);
    var maxB = 0x1;
    for (var i = 0x0; i < n; i++) {
        for (var j = i + 0x1; j < n; j++) {
            var memo = c[i];
            c[i] = c[j];
            c[j] = memo;
            maxB = maxCards(c, maxB);
            c[j] = c[i];
            c[i] = memo;
        }
    }
    console['log'](maxA > maxB ? 'NO\x20GAME' : maxB - maxA);
}
function _0x288218(ret) {
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