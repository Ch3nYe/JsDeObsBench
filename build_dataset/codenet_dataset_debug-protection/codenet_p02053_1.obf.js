var a0_0x31c846 = (function () {
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
    a0_0x31c846(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5c0412('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5c0412();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [h, w] = arr['shift']()['split']('\x20')['map'](Number);
var b = [];
for (var i = 0x0; i < h; i++) {
    var two = [];
    arr[i]['split']('')['forEach']((v, j) => {
        if (v == 'B')
            two['push']([
                i,
                j
            ]);
    });
    if (two['length'] == 0x1)
        b['push'](two[0x0]);
    else if (two['length'] >= 0x2)
        b['push'](two[0x0], two[two['length'] - 0x1]);
}
var max = 0x0;
for (var i = 0x0; i < b['length']; i++) {
    for (var j = i + 0x1; j < b['length']; j++) {
        var d = Math['abs'](b[i][0x0] - b[j][0x0]) + Math['abs'](b[i][0x1] - b[j][0x1]);
        max = Math['max'](max, d);
    }
}
console['log'](max);
function a0_0x5c0412(ret) {
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