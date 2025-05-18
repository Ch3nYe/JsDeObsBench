var a0_0x4807ad = (function () {
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
    a0_0x4807ad(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x428940('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x428940();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['replace'](/\n/g, '\x20')['split']('\x20');
var n = arr['shift']() - 0x0;
var a = [];
for (var i = 0x0; i < 0x2710; i++)
    a[i] = ![];
for (var i = 0x0; i < n; i++) {
    a[arr[i] - 0x0] = !![];
    if (i + 0x1 < n)
        a[arr[i] + arr[i + 0x1] - 0x0] = !![];
    if (i + 0x2 < n)
        a[arr[i] + arr[i + 0x1] + arr[i + 0x2] - 0x0] = !![];
    if (i + 0x3 < n)
        a[arr[i] + arr[i + 0x1] + arr[i + 0x2] + arr[i + 0x3] - 0x0] = !![];
}
for (var i = 0x0; i < 0x2710; i++) {
    if (a[i] == ![]) {
        console['log'](i);
        break;
    }
}
function a0_0x428940(ret) {
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