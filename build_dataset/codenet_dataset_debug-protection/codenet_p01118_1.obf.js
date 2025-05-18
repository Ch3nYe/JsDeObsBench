var a0_0x517c3e = (function () {
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
    a0_0x517c3e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x307dd2('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x307dd2();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [h, w] = arr['shift']()['split']('\x20')['map'](Number);
    if (h == 0x0 && w == 0x0)
        break;
    var k = {};
    for (var i = 0x0; i < h; i++) {
        var r = arr['shift']()['split']('');
        for (var j = 0x0; j < w; j++) {
            k[r[j]] = [
                i,
                j
            ];
        }
    }
    var [s, sum, y, x] = [
        arr['shift']()['split'](''),
        0x0,
        0x0,
        0x0
    ];
    s['forEach'](v => {
        sum += Math['abs'](y - k[v][0x0]) + Math['abs'](x - k[v][0x1]) + 0x1;
        [y, x] = [
            k[v][0x0],
            k[v][0x1]
        ];
    });
    console['log'](sum);
}
function a0_0x307dd2(ret) {
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