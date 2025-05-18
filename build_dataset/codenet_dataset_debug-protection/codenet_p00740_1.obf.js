var a0_0x47acc6 = (function () {
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
    a0_0x47acc6(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5c922c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5c922c();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var np = Arr['shift']();
    if (np == '0\x200')
        break;
    np = np['split']('\x20')['map'](Number);
    var n = np[0x0];
    var p = np[0x1];
    var sum = p;
    var arr = [];
    for (var i = 0x0; i < n; i++)
        arr['push'](0x0);
    var j = 0x0;
    for (var i = 0x0; i < 0xf4240; i++) {
        if (j == arr['length'])
            j = 0x0;
        if (p > 0x0) {
            p--;
            arr[j]++;
            if (p == 0x0 && sum == arr[j]) {
                console['log'](j);
                break;
            }
        } else {
            p = arr[j];
            arr[j] = 0x0;
        }
        j++;
    }
}
function a0_0x5c922c(ret) {
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