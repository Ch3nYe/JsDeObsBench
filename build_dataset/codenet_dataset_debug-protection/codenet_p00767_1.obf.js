function HW() {
    var _0x2384a5 = (function () {
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
        _0x2384a5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x129ac7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x129ac7();
            }
        })();
    }());
    var arr = [];
    for (var i = 0x1; i < 0x96; i++) {
        for (var j = i + 0x1; j <= 0x96; j++) {
            arr['push']([
                i,
                j,
                i * i + j * j
            ]);
        }
    }
    arr['sort'](function (a, b) {
        if (a[0x2] == b[0x2])
            return a[0x0] - b[0x0];
        else
            return a[0x2] - b[0x2];
    });
    return arr;
}
var Rectangles = HW();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var hw = Arr['shift']()['split']('\x20')['map'](Number);
    var h = hw[0x0];
    var w = hw[0x1];
    if (h == 0x0 && w == 0x0)
        break;
    var num = h * h + w * w;
    for (var i = 0x0; i < Rectangles['length']; i++) {
        if (Rectangles[i][0x0] == h && Rectangles[i][0x1] == w)
            break;
    }
    console['log'](Rectangles[i + 0x1][0x0] + '\x20' + Rectangles[i + 0x1][0x1]);
}
function _0x129ac7(ret) {
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