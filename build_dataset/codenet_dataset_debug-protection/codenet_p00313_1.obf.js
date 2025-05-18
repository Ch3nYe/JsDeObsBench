var a0_0x11247d = (function () {
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
    a0_0x11247d(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x44f79c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x44f79c();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var xyz = [];
for (var i = 0x0; i <= n; i++)
    xyz[i] = [
        0x0,
        0x0,
        0x0
    ];
var x = arr['shift']()['split']('\x20')['map'](Number);
var y = arr['shift']()['split']('\x20')['map'](Number);
var z = arr['shift']()['split']('\x20')['map'](Number);
x['shift']();
y['shift']();
z['shift']();
x['forEach'](v => {
    xyz[v][0x0] = 0x1;
});
y['forEach'](v => {
    xyz[v][0x1] = 0x1;
});
z['forEach'](v => {
    xyz[v][0x2] = 0x1;
});
xyz['shift']();
var cnt = 0x0;
xyz['forEach'](v => {
    if (v[0x0] == 0x0 && v[0x2] == 0x1)
        cnt++;
    else if (v[0x1] == 0x1 && v[0x2] == 0x1)
        cnt++;
});
console['log'](cnt);
function a0_0x44f79c(ret) {
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