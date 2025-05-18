function heron(a, b, c) {
    var _0x2ff069 = (function () {
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
        _0x2ff069(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x40acdd('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x40acdd();
            }
        })();
    }());
    var s = (a + b + c) / 0x2;
    var S = Math['sqrt'](s * (s - a) * (s - b) * (s - c));
    return S;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var xy1 = Arr['shift']()['split'](',')['map'](Number);
var xy2 = Arr['shift']()['split'](',')['map'](Number);
var x1 = xy1[0x0];
var y1 = xy1[0x1];
var x2 = xy2[0x0];
var y2 = xy2[0x1];
var sum = 0x0;
for (var I = 0x0; I < Arr['length']; I++) {
    var xy3 = Arr[I]['split'](',')['map'](Number);
    var x3 = xy3[0x0];
    var y3 = xy3[0x1];
    var d12 = Math['sqrt'](Math['pow'](x1 - x2, 0x2) + Math['pow'](y1 - y2, 0x2));
    var d13 = Math['sqrt'](Math['pow'](x1 - x3, 0x2) + Math['pow'](y1 - y3, 0x2));
    var d23 = Math['sqrt'](Math['pow'](x2 - x3, 0x2) + Math['pow'](y2 - y3, 0x2));
    sum += heron(d12, d13, d23);
    x2 = xy3[0x0];
    y2 = xy3[0x1];
}
console['log'](sum['toFixed'](0x6));
function _0x40acdd(ret) {
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