var a0_0x36b5cf = (function () {
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
    a0_0x36b5cf(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1095b6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1095b6();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('');
    var a1 = arr[0x0];
    var a2 = arr[0x1];
    var a3 = arr[0x2];
    var a4 = arr[0x3];
    var a5 = arr[0x4];
    var a6 = arr[0x5];
    var a7 = arr[0x6];
    var a8 = arr[0x7];
    var a9 = arr[0x8];
    var d = 0x0;
    for (var j = 0x0; j < 0x2; j++) {
        var s = j == 0x0 ? 'o' : 'x';
        var S = s + s + s;
        if (a1 + a2 + a3 == S) {
            console['log'](s);
            break;
        }
        if (a4 + a5 + a6 == S) {
            console['log'](s);
            break;
        }
        if (a7 + a8 + a9 == S) {
            console['log'](s);
            break;
        }
        if (a1 + a4 + a7 == S) {
            console['log'](s);
            break;
        }
        if (a2 + a5 + a8 == S) {
            console['log'](s);
            break;
        }
        if (a3 + a6 + a9 == S) {
            console['log'](s);
            break;
        }
        if (a1 + a5 + a9 == S) {
            console['log'](s);
            break;
        }
        if (a3 + a5 + a7 == S) {
            console['log'](s);
            break;
        }
        d++;
    }
    if (d == 0x2)
        console['log']('d');
}
function a0_0x1095b6(ret) {
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