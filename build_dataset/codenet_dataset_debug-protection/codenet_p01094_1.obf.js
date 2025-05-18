var a0_0x8d13a1 = (function () {
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
    a0_0x8d13a1(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2bb960('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2bb960();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var ans = '';
while (arr['shift']() != 0x0) {
    var a = arr['shift']()['split']('\x20');
    var obj = {};
    for (var i = 0x0; i < a['length']; i++) {
        obj[a[i]] = obj[a[i]] + 0x1 || 0x1;
        var s = [];
        for (var k in obj)
            s['push']([
                obj[k],
                k
            ]);
        s['sort'](function (a, b) {
            return b[0x0] - a[0x0];
        });
        if (s['length'] == 0x1)
            s[0x1] = [0x0];
        if (s[0x0][0x0] > s[0x1][0x0] + a['length'] - (i + 0x1)) {
            ans += s[0x0][0x1] + '\x20' + (i + 0x1) + '\x0a';
            break;
        }
    }
    if (i == a['length'])
        ans += 'TIE' + '\x0a';
}
console['log'](ans['trim']());
function a0_0x2bb960(ret) {
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