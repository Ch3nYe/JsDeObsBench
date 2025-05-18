var a0_0x224355 = (function () {
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
    a0_0x224355(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x515656('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x515656();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var a = [
    0x0,
    0x0
];
var b = [
    0x0,
    0x0
];
var c = [
    0x0,
    0x0
];
var d = [
    0x0,
    0x0
];
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    for (var j = 0x0; j < 0x2; j++) {
        if (arr[j] >= 1.1)
            a[j]++;
        else if (arr[j] >= 0.6)
            b[j]++;
        else if (arr[j] >= 0.2)
            c[j]++;
        else
            d[j]++;
    }
}
console['log'](a[0x0] + '\x20' + a[0x1]);
console['log'](b[0x0] + '\x20' + b[0x1]);
console['log'](c[0x0] + '\x20' + c[0x1]);
console['log'](d[0x0] + '\x20' + d[0x1]);
function a0_0x515656(ret) {
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