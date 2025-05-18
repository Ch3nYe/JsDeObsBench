function prime(max) {
    var _0x317618 = (function () {
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
        _0x317618(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x41fa04('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x41fa04();
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
var p = prime(0x2710);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
var cnt = [];
for (var i = 0x0; i <= 0x2710; i++)
    cnt[i] = 0x0;
p['forEach'](function (v, index) {
    cnt[v]++;
    for (var i = index + 0x1; i < p['length']; i++) {
        v += p[i];
        if (v > 0x2710)
            break;
        cnt[v]++;
    }
});
arr['some'](function (v) {
    if (v == 0x0)
        return !![];
    console['log'](cnt[v]);
});
function _0x41fa04(ret) {
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