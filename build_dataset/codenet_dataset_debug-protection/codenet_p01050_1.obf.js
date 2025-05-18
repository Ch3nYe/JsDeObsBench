var a0_0x5349ab = (function () {
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
    a0_0x5349ab(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4be493('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4be493();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var s = input['trim']();
var len = s['length'];
var abc = '0123456789AabcdefghijklmnopqrstuvwxyzA'['split']('');
var sum = 0x0;
while (!![]) {
    if (s == '')
        break;
    var cnt = 0x0;
    var flag = ![];
    abc['forEach'](v => {
        var re = new RegExp(v);
        if (re['test'](s)) {
            if (flag)
                cnt++;
            flag = !![];
            s = s['replace'](re, '');
        } else {
            if (cnt >= 0x3)
                sum += cnt - 0x2;
            cnt = 0x0;
            flag = ![];
        }
    });
}
console['log'](len - sum);
function a0_0x4be493(ret) {
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