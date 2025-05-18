var a0_0x278a10 = (function () {
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
    a0_0x278a10(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x26d7af('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x26d7af();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var data = input['trim']()['split']('\x0a');
while (!![]) {
    var str = data['shift']();
    if (str == '#')
        break;
    str = str['replace'](/\d/g, function (v) {
        return 'n'['repeat'](v - 0x0);
    });
    var arr = str['split']('/');
    arr = arr['map'](v => v['split'](''));
    var [a, b, c, d] = data['shift']()['split']('\x20')['map'](Number);
    arr[a - 0x1][b - 0x1] = 'n';
    arr[c - 0x1][d - 0x1] = 'b';
    arr = arr['map'](v => v['join'](''));
    str = arr['join']('/');
    str = str['replace'](/n+/g, function (v) {
        return v['length'];
    });
    console['log'](str);
}
function a0_0x26d7af(ret) {
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