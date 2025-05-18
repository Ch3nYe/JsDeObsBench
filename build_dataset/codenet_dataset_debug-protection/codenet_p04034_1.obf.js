var a0_0x4153ef = (function () {
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
    a0_0x4153ef(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x9c674d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x9c674d();
        }
    })();
}());
input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
lines = input['split']('\x0a');
line = lines['shift']()['split']('\x20');
N = line[0x0] * 0x1;
M = line[0x1] * 0x1;
b = [];
r = [];
for (i = 0x1; i <= N; i++) {
    b[i] = 0x1;
    r[i] = 0x0;
}
r[0x1] = 0x1;
for (i = 0x0; i < M; i++) {
    l = lines[i]['split']('\x20');
    x = l[0x0] * 0x1;
    y = l[0x1] * 0x1;
    if (r[x]) {
        r[y] += 0x1;
    }
    if (r[x] && b[x] == 0x1) {
        r[x] = 0x0;
    }
    b[x] -= 0x1;
    b[y] += 0x1;
}
cnt = 0x0;
for (i = 0x1; i <= N; i++) {
    if (r[i] > 0x0) {
        cnt++;
    }
}
console['log'](cnt);
function a0_0x9c674d(ret) {
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