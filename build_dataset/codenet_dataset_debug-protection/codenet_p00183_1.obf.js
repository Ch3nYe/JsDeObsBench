var a0_0x294d39 = (function () {
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
    a0_0x294d39(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5250cd('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5250cd();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var x = Arr['shift']()['split']('');
    if (x[0x0] == '0')
        break;
    var y = Arr['shift']()['split']('');
    var z = Arr['shift']()['split']('');
    var ans = 'NA';
    for (var i = 0x0; i < 0x2; i++) {
        var s = [
            'b',
            'w'
        ][i];
        if (x[0x0] + x[0x1] + x[0x2] == s + s + s)
            ans = s;
        if (y[0x0] + y[0x1] + y[0x2] == s + s + s)
            ans = s;
        if (z[0x0] + z[0x1] + z[0x2] == s + s + s)
            ans = s;
        if (x[0x0] + y[0x0] + z[0x0] == s + s + s)
            ans = s;
        if (x[0x1] + y[0x1] + z[0x1] == s + s + s)
            ans = s;
        if (x[0x2] + y[0x2] + z[0x2] == s + s + s)
            ans = s;
        if (x[0x0] + y[0x1] + z[0x2] == s + s + s)
            ans = s;
        if (x[0x2] + y[0x1] + z[0x0] == s + s + s)
            ans = s;
    }
    console['log'](ans);
}
function a0_0x5250cd(ret) {
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