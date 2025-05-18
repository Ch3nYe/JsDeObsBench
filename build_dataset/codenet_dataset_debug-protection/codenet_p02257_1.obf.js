var a0_0x49e099 = (function () {
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
    a0_0x49e099(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2c773d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2c773d();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
Arr['shift']();
Arr['sort'](function (a, b) {
    return a - b;
});
var max = Arr[Arr['length'] - 0x1];
var arr = [0x2];
for (var i = 0x3; i <= max; i = i + 0x2) {
    var a = !![];
    var sqrt = ~~Math['sqrt'](i) + 0x1;
    for (var j = 0x0; j < arr['length']; j++) {
        if (arr[j] > sqrt)
            break;
        if (i % arr[j] == 0x0) {
            a = ![];
            break;
        }
    }
    if (a)
        arr['push'](i);
}
var num = 0x0;
var f = 0x0;
for (var i = 0x0; i < Arr['length']; i++) {
    if (Arr[i] != 0x2 && Arr[i] % 0x2 == 0x0)
        continue;
    var index = arr['indexOf'](Arr[i], f);
    if (index != -0x1) {
        f = index;
        num++;
    }
}
console['log'](num);
function a0_0x2c773d(ret) {
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