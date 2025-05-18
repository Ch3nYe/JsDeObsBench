var a0_0x4c6b54 = (function () {
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
    a0_0x4c6b54(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2a970b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2a970b();
        }
    })();
}());
console['log'](require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/[ |\n]/)['slice'](0x1)['map']((k, i, a) => 'node\x20' + ++i + ':\x20key\x20=\x20' + k + ',\x20' + (i - 0x1 ? 'parent\x20key\x20=\x20' + a[Math['floor'](i / 0x2) - 0x1] + ',\x20' : '') + (0x2 * i - 0x1 < a['length'] ? 'left\x20key\x20=\x20' + a[0x2 * i - 0x1] + ',\x20' : '') + (0x2 * i < a['length'] ? 'right\x20key\x20=\x20' + a[0x2 * i] + ',\x20' : ''))['join']('\x0a'));
function a0_0x2a970b(ret) {
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