var a0_0x193d70 = (function () {
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
    a0_0x193d70(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2fdbbe('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2fdbbe();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var nt = Arr['shift']()['split']('\x20');
    var str = nt[0x0];
    var type = nt[0x1];
    if (type == 'X')
        break;
    str = str['replace'](/^./, function (s) {
        return s['toLowerCase']();
    });
    str = str['replace'](/[A-Z]/g, function (s) {
        return '_' + s;
    });
    var arr = str['split']('_');
    for (var i = 0x1; i < arr['length']; i++) {
        arr[i] = arr[i]['replace'](/./, function (s) {
            return s['toUpperCase']();
        });
    }
    if (type == 'U') {
        arr[0x0] = arr[0x0]['replace'](/^./, function (s) {
            return s['toUpperCase']();
        });
        console['log'](arr['join'](''));
    }
    if (type == 'L')
        console['log'](arr['join'](''));
    if (type == 'D')
        console['log'](arr['join']('_')['toLowerCase']());
}
function a0_0x2fdbbe(ret) {
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