function str1(x) {
    var _0x33edc0 = (function () {
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
        _0x33edc0(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1d10ca('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1d10ca();
            }
        })();
    }());
    x = x + '';
    while (x['length'] != b)
        x = '0' + x;
    return x;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var ab = Arr['shift']()['split']('\x20')['map'](Number);
    if (ab[0x0] == 0x0 && ab[0x1] == 0x0)
        break;
    var str = ab[0x0] + '';
    var b = ab[0x1];
    var arr = [];
    str = str1(str);
    arr['push'](str);
    var i = 0x0;
    while (!![]) {
        i++;
        var s = str['split']('');
        s['sort'](function (a, b) {
            return b - a;
        });
        var A = parseInt(s['join'](''), 0xa);
        var B = parseInt(s['reverse']()['join'](''), 0xa);
        var C = A - B;
        var Cstr = str1(C);
        if (arr['indexOf'](Cstr) != -0x1)
            break;
        arr['push'](Cstr);
        str = Cstr;
    }
    console['log'](arr['indexOf'](Cstr) + '\x20' + parseInt(Cstr, 0xa) + '\x20' + (i - arr['indexOf'](Cstr)));
}
function _0x1d10ca(ret) {
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