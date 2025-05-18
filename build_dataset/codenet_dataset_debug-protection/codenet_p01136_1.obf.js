var a0_0x3e5f91 = (function () {
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
    a0_0x3e5f91(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4b046d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4b046d();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr['slice'](0x0, n);
    ary = ary['map'](v => v['split']('\x20')['map'](Number)['slice'](0x1));
    var flag = !![];
    var h = [];
    for (var i = 0x0; i < n; i++)
        h['push']([i]);
    for (var i = 0x1; i <= 0x1e; i++) {
        var a = [];
        ary['forEach']((v, j) => {
            if (v['includes'](i))
                a['push'](j);
        });
        var b = [];
        a['forEach'](v => b['push'](...h[v]));
        b = b['filter']((x, i, self) => self['indexOf'](x) == i);
        if (b['length'] == n) {
            flag = ![];
            console['log'](i);
            break;
        }
        a['forEach'](v => h[v] = b);
    }
    if (flag)
        console['log'](-0x1);
    arr = arr['slice'](n);
}
function a0_0x4b046d(ret) {
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