var a0_0x326ca9 = (function () {
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
    a0_0x326ca9(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5e0b8f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5e0b8f();
        }
    })();
}());
inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
l = inp['shift']()['split']('\x20');
x = l[0x0] * 0x1;
y = l[0x1] * 0x1;
cnt = 0x0;
if (x == y) {
} else if (Math['abs'](x) == Math['abs'](y)) {
    cnt++;
} else if (x == 0x0 || y == 0x0) {
    if (y < x) {
        cnt++;
    }
    cnt += Math['abs'](Math['abs'](x) - Math['abs'](y));
} else {
    if (x > y) {
        if (x > 0x0 && y > 0x0) {
            cnt += 0x2;
        } else if (x > 0x0 && y < 0x0) {
            cnt += 0x1;
        } else {
            cnt += 0x2;
        }
    } else {
        if (x < 0x0 && y > 0x0) {
            cnt += 0x1;
        }
    }
    cnt += Math['abs'](Math['abs'](x) - Math['abs'](y));
}
console['log'](cnt);
function a0_0x5e0b8f(ret) {
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