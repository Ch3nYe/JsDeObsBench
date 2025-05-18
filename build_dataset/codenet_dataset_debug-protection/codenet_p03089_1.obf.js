var a0_0x57c08c = (function () {
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
    a0_0x57c08c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x49bdf5('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x49bdf5();
        }
    })();
}());
input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
lines = input['split']('\x0a');
N = lines['shift']() * 0x1;
b = lines['shift']()['split']('\x20');
a = [];
for (i = N; i > 0x0; i--) {
    found = ![];
    for (j = i; j > 0x0; j--) {
        if (b[j - 0x1] == j) {
            a['push'](b['splice'](j - 0x1, 0x1));
            found = !![];
            break;
        }
    }
    if (!found) {
        a = [-0x1];
        break;
    }
}
console['log'](a['reverse']()['join']('\x0a'));
function a0_0x49bdf5(ret) {
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