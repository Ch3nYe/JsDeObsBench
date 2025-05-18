var a0_0x372f88 = (function () {
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
    a0_0x372f88(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5cf987('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5cf987();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    Arr = Arr['map'](function (v) {
        return v['length'];
    });
    for (var i = 0x0; i < Arr['length']; i++) {
        var good = [
            0x5,
            0x7,
            0x5,
            0x7,
            0x7
        ];
        var sum = 0x0;
        for (var j = i; j < Arr['length']; j++) {
            if (good['length'] == 0x0)
                break;
            sum += Arr[j];
            if (good[0x0] > sum)
                continue;
            else if (good[0x0] < sum)
                break;
            else if (good[0x0] == sum) {
                good['shift']();
                sum = 0x0;
            }
        }
        if (good['length'] == 0x0) {
            console['log'](i + 0x1);
            break;
        }
    }
}
function a0_0x5cf987(ret) {
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