var a0_0xd37563 = (function () {
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
    a0_0xd37563(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3463f4('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3463f4();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    if (n == 0x1) {
        console['log']('');
        continue;
    }
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary[i] = ![];
    for (var i = 0x1; i < n; i++) {
        ary[i * i % n] = !![];
    }
    var m = [];
    ary['forEach'](function (v, i) {
        if (v)
            m['push'](i);
    });
    var ans = [];
    var len = (n - 0x1) / 0x2;
    for (var i = 0x0; i <= len; i++)
        ans[i] = 0x0;
    for (var i = 0x0; i < m['length']; i++) {
        for (var j = i + 0x1; j < m['length']; j++) {
            var x = m[i] - m[j];
            if (x < 0x0)
                x += n;
            if (len < x)
                x = n - x;
            ans[x] += 0x2;
        }
    }
    ans['shift']();
    ans['forEach'](function (v) {
        console['log'](v);
    });
}
function a0_0x3463f4(ret) {
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