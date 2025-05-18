var a0_0x581200 = (function () {
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
    a0_0x581200(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x335d58('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x335d58();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == '#')
        break;
    var p = 'A';
    for (var i = 0x0; i < str['length']; i++) {
        var s = str[i] - 0x0;
        if (p == 'A' && s === 0x0)
            p = 'X';
        else if (p == 'A' && s === 0x1)
            p = 'Y';
        else if (p == 'B' && s === 0x0)
            p = 'Y';
        else if (p == 'B' && s === 0x1)
            p = 'X';
        else if (p == 'W' && s === 0x0)
            p = 'B';
        else if (p == 'W' && s === 0x1)
            p = 'Y';
        else if (p == 'X' && s === 0x0)
            p = '';
        else if (p == 'X' && s === 0x1)
            p = 'Z';
        else if (p == 'Y' && s === 0x0)
            p = 'X';
        else if (p == 'Y' && s === 0x1)
            p = '';
        else if (p == 'Z' && s === 0x0)
            p = 'W';
        else if (p == 'Z' && s === 0x1)
            p = 'B';
    }
    console['log'](p == 'B' ? 'Yes' : 'No');
}
function a0_0x335d58(ret) {
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