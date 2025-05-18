var a0_0x1e1878 = (function () {
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
    a0_0x1e1878(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1ae88e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1ae88e();
        }
    })();
}());
function heron(a, b, c) {
    var s = (a + b + c) / 0x2;
    var S = Math['sqrt'](s * (s - a) * (s - b) * (s - c));
    return S;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split'](',')['map'](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var d12 = Math['sqrt'](Math['pow'](x1 - x2, 0x2) + Math['pow'](y1 - y2, 0x2));
        var d23 = Math['sqrt'](Math['pow'](x2 - x3, 0x2) + Math['pow'](y2 - y3, 0x2));
        var d34 = Math['sqrt'](Math['pow'](x3 - x4, 0x2) + Math['pow'](y3 - y4, 0x2));
        var d41 = Math['sqrt'](Math['pow'](x4 - x1, 0x2) + Math['pow'](y4 - y1, 0x2));
        var d13 = Math['sqrt'](Math['pow'](x1 - x3, 0x2) + Math['pow'](y1 - y3, 0x2));
        var d24 = Math['sqrt'](Math['pow'](x2 - x4, 0x2) + Math['pow'](y2 - y4, 0x2));
        var A = heron(d12, d24, d41) + heron(d23, d34, d24);
        var B = heron(d12, d23, d13) + heron(d13, d34, d41);
        var ans = Math['abs'](A - B) < 0.00001 ? 'YES' : 'NO';
        console['log'](ans);
    }['apply'](null, arr));
}
function a0_0x1ae88e(ret) {
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