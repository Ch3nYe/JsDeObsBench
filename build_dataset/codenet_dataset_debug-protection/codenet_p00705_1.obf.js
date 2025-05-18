var a0_0x2416e7 = (function () {
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
    a0_0x2416e7(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x418a4e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x418a4e();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var v = Arr['shift']();
    if (v == '0\x200')
        break;
    var NQ = v['split']('\x20')['map'](Number);
    var arr = [];
    for (var i = 0x0; i < 0x32; i++)
        arr[i] = 0x0;
    for (var i = 0x0; i < NQ[0x0]; i++) {
        var day = Arr['shift']()['split']('\x20')['map'](Number);
        var L = day['shift']();
        for (var j = 0x0; j < L; j++) {
            arr[day[j]]++;
        }
    }
    var result = 0x0;
    var max = Math['max']['apply'](null, arr);
    if (max >= NQ[0x1])
        NQ[0x1] = max;
    for (var i = 0x0; i < arr['length']; i++) {
        if (arr[i] >= NQ[0x1]) {
            result = i;
            break;
        }
    }
    console['log'](result);
}
function a0_0x418a4e(ret) {
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