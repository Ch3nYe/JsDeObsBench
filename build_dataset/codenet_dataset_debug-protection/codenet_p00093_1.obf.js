var a0_0x3f74b8 = (function () {
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
    a0_0x3f74b8(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x181e48('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x181e48();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
x = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\s/);
for (i = 0x0; i < x['length']; i += 0x2) {
    count = 0x0;
    y = x[i];
    if (y + x[i + 0x1] == 0x0)
        break;
    for (; y <= x[i + 0x1]; y++) {
        if (y % 0x190 == 0x0 || y % 0x4 == 0x0 && y % 0x64 != 0x0) {
            console['log'](String(y)['trim']());
            count++;
        }
    }
    if (i != 0x0 || i == x['length'] - 0x1)
        console['log']();
    if (count == 0x0) {
        console['log']('NA\x0a');
    }
}
function a0_0x181e48(ret) {
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