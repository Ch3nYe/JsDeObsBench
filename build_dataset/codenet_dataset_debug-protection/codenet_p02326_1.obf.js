var a0_0x475c2b = (function () {
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
    a0_0x475c2b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xee9336('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xee9336();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [h, w] = arr['shift']()['split']('\x20')['map'](Number);
var yx = [];
for (var i = 0x0; i < h; i++) {
    yx[i] = arr['shift']()['split']('\x20')['map'](v => 0x1 - (v - 0x0));
}
for (var y = 0x1; y < h; y++) {
    for (var x = 0x1; x < w; x++) {
        if (yx[y][x] == 0x1)
            yx[y][x] = Math['min'](yx[y - 0x1][x], yx[y][x - 0x1], yx[y - 0x1][x - 0x1]) + 0x1;
    }
}
var max = 0x0;
for (var y = 0x0; y < h; y++) {
    for (var x = 0x0; x < w; x++) {
        max = Math['max'](max, yx[y][x]);
    }
}
console['log'](max * max);
function a0_0xee9336(ret) {
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