function hamming() {
    var _0x17bff2 = (function () {
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
        _0x17bff2(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4b2554('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4b2554();
            }
        })();
    }());
    var obj = {};
    for (var i = 0x1; i <= 0xf4240; i++) {
        var h = i;
        while (h % 0x2 == 0x0)
            h /= 0x2;
        while (h % 0x3 == 0x0)
            h /= 0x3;
        while (h % 0x5 == 0x0)
            h /= 0x5;
        if (h == 0x1)
            obj[i] = !![];
    }
    return obj;
}
var Numbers = hamming();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var mn = Arr['shift']()['split']('\x20')['map'](Number);
    if (mn[0x0] == 0x0)
        break;
    var cnt = 0x0;
    for (var i = mn[0x0]; i <= mn[0x1]; i++) {
        if (Numbers[i])
            cnt++;
    }
    console['log'](cnt);
}
function _0x4b2554(ret) {
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