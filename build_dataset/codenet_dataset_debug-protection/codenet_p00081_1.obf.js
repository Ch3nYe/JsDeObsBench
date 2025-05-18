var a0_0x23e995 = (function () {
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
    a0_0x23e995(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x35024a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x35024a();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split'](',')['map'](Number);
    (function (x1, y1, x2, y2, xq, yq) {
        var k = x2 - x1 == 0x0 ? Infinity : (y2 - y1) / (x2 - x1);
        var ans;
        if (k == 0x0)
            ans = [
                xq,
                y1 - (yq - y1)
            ];
        else if (k == Infinity)
            ans = [
                x1 - (xq - x1),
                yq
            ];
        else {
            var a1 = (y2 - y1) / (x2 - x1);
            var a2 = -0x1 / a1;
            var b1 = y1 - a1 * x1;
            var b2 = yq - a2 * xq;
            var xm = (b2 - b1) / (a1 - a2);
            var x = 0x2 * xm - xq;
            var y = a2 * x + b2;
            ans = [
                x,
                y
            ];
        }
        console['log'](ans[0x0]['toFixed'](0x6) + '\x20' + ans[0x1]['toFixed'](0x6));
    }['apply'](null, arr));
}
function a0_0x35024a(ret) {
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