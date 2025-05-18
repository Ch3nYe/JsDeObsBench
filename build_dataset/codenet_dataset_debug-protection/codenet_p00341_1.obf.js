var a0_0x249b03 = (function () {
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
    a0_0x249b03(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4063a8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4063a8();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x20')['map'](Number);
arr['sort'](function (a, b) {
    return a - b;
});
var sum = 0x0;
if (arr[0x0] == arr[0x1] && arr[0x1] == arr[0x2] && arr[0x2] == arr[0x3])
    sum++;
if (arr[0x0 + 0x4] == arr[0x1 + 0x4] && arr[0x1 + 0x4] == arr[0x2 + 0x4] && arr[0x2 + 0x4] == arr[0x3 + 0x4])
    sum++;
if (arr[0x0 + 0x8] == arr[0x1 + 0x8] && arr[0x1 + 0x8] == arr[0x2 + 0x8] && arr[0x2 + 0x8] == arr[0x3 + 0x8])
    sum++;
console['log'](sum == 0x3 ? 'yes' : 'no');
function a0_0x4063a8(ret) {
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