var a0_0x5cc1dd = (function () {
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
    a0_0x5cc1dd(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x290feb('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x290feb();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [w, h, c] = input['trim']()['split']('\x20');
w = w - 0x0;
h = h - 0x0;
var ans = [];
ans['push']('+' + '-'['repeat'](w - 0x2) + '+');
for (var i = 0x0; i < h - 0x2; i++)
    ans['push']('|' + '.'['repeat'](w - 0x2) + '|');
ans['push']('+' + '-'['repeat'](w - 0x2) + '+');
ans[Math['floor'](h / 0x2)] = '|' + '.'['repeat']((w - 0x3) / 0x2) + c + '.'['repeat']((w - 0x3) / 0x2) + '|';
console['log'](ans['join']('\x0a')['trim']());
function a0_0x290feb(ret) {
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