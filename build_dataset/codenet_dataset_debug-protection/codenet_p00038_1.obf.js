var a0_0x1259a0 = (function () {
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
    a0_0x1259a0(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xbc26ab('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xbc26ab();
        }
    })();
}());
require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](function (i) {
    f = function (a, b) {
        return b - a;
    };
    a = [], c = i['split'](',')['sort'](f);
    c['map'](function (j) {
        a[j] ? a[j]++ : a[j] = 0x1;
    });
    a['sort'](f);
    l = a[0x0], n = a[0x1];
    console['log'](l == 0x4 ? 'four\x20card' : l == 0x3 ? n == 0x2 ? 'full\x20house' : 'three\x20card' : l == 0x2 ? n == 0x2 ? 'two\x20pair' : 'one\x20pair' : 0x4 == c[0x0] - c[0x4] || c[0x0] - c[0x3] == 0x3 && +c[0x4] == 0x1 ? 'straight' : 'null');
});
function a0_0xbc26ab(ret) {
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