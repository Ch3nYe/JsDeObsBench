var a0_0x38a5a9 = (function () {
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
    a0_0x38a5a9(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1cdd0e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1cdd0e();
        }
    })();
}());
inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
N = inp['shift']() * 0x1;
A = inp['shift']()['split']('\x20');
B = inp['shift']()['split']('\x20');
sumA = 0x0;
sumB = 0x0;
s = 0x0;
t = [];
cnt = 0x0;
for (i = 0x0; i < N; i++) {
    a = A[i] * 0x1;
    b = B[i] * 0x1;
    d = a - b;
    if (d < 0x0) {
        cnt++;
        s += d;
    } else {
        t['push'](d);
    }
    sumA += a;
    sumB += b;
}
if (sumA >= sumB) {
    t['sort']((a, b) => b - a);
    j = 0x0;
    while (s < 0x0) {
        s += t[j];
        j++;
    }
    console['log'](cnt + j);
} else {
    console['log'](-0x1);
}
function a0_0x1cdd0e(ret) {
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