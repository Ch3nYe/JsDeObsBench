var a0_0x219bc6 = (function () {
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
    a0_0x219bc6(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3c76d7('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3c76d7();
        }
    })();
}());
require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\s/)['map'](function (i) {
    (j = +i) ? console['log'](j <= 0x30 ? 'light\x20fly' : j <= 0x33 ? 'fly' : j <= 0x36 ? 'bantam' : j <= 0x39 ? 'feather' : j <= 0x3c ? 'light' : j <= 0x40 ? 'light\x20welter' : j <= 0x45 ? 'welter' : j <= 0x4b ? 'light\x20middle' : j <= 0x51 ? 'middle' : j <= 0x5b ? 'light\x20heavy' : 'heavy') : 0x0;
});
function a0_0x3c76d7(ret) {
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