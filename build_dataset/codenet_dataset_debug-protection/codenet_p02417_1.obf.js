var a0_0x3e162c = (function () {
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
    a0_0x3e162c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x6b3d47('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x6b3d47();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['trim']();
input = input['toLowerCase']();
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
var obj = {};
for (var i = 0x0; i < abc['length']; i++)
    obj[abc[i]] = 0x0;
input = input['replace'](/[a-z]/g, function (str) {
    obj[str]++;
    return str;
});
abc['forEach'](function (v, i) {
    console['log'](v + '\x20:\x20' + obj[v]);
});
function a0_0x6b3d47(ret) {
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