var a0_0x1fd96f = (function () {
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
    a0_0x1fd96f(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5d3e3d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5d3e3d();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr = arr['map'](v => v['split']('\x20')['map'](Number));
var n = arr['shift']();
var c = arr['shift']();
var q = arr['shift']();
var apple = [];
for (var i = 0x0; i <= n; i++)
    apple[i] = 0x0;
var ans = 0x0;
for (var i = 0x0; i < arr['length']; i++) {
    var [t, x, d] = arr[i];
    if (t == 0x1) {
        apple[x] += d;
        if (c[x - 0x1] < apple[x]) {
            ans = x;
            break;
        }
    } else {
        if (apple[x] < d) {
            ans = x;
            break;
        } else {
            apple[x] -= d;
        }
    }
}
console['log'](ans);
function a0_0x5d3e3d(ret) {
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