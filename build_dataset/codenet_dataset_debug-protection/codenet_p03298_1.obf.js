var a0_0x6fd92a = (function () {
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
    a0_0x6fd92a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x204935('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x204935();
        }
    })();
}());
m = ('' + require('fs')['readFileSync'](0x0))['split']`
`;
n = m[a = 0x0];
s = m[0x1];
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[i] + u : u + s[i];
    m[u] = -~m[u];
}
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[0x2 * n + ~i] + u : u + s[0x2 * n + ~i];
    a += ~~m[u];
}
console['log'](a);
function a0_0x204935(ret) {
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