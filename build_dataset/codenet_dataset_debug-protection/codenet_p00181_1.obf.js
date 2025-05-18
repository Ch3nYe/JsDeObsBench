function seach(x) {
    var _0xb11fdf = (function () {
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
        _0xb11fdf(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5f4e1d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5f4e1d();
            }
        })();
    }());
    var flag = !![];
    var cnt = 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < ary['length']; i++) {
        if (x < ary[i]) {
            flag = ![];
            break;
        } else if (sum + ary[i] == x) {
            sum = 0x0;
            cnt++;
        } else if (sum + ary[i] > x) {
            sum = ary[i];
            cnt++;
        } else if (sum + ary[i] < x) {
            sum += ary[i];
        }
        if (cnt == m) {
            flag = ![];
            break;
        }
    }
    return flag;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var mn = arr['shift']();
    if (mn == '0\x200')
        break;
    mn = mn['split']('\x20')['map'](Number);
    var m = mn[0x0];
    var n = mn[0x1];
    var ary = [];
    while (n--)
        ary['push'](arr['shift']() - 0x0);
    var L = 0x0;
    var R = 0x16e360;
    while (!![]) {
        var middle = Math['floor']((L + R) / 0x2);
        if (seach(middle)) {
            R = middle - 0x1;
        } else {
            L = middle + 0x1;
        }
        if (L > R)
            break;
    }
    console['log'](R + 0x1);
}
function _0x5f4e1d(ret) {
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