var a0_0x1d1a63 = (function () {
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
    a0_0x1d1a63(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x340c30('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x340c30();
        }
    })();
}());
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['map'](function (line) {
    return line['split']('\x20')['map'](Number);
});
n = line[0x0][0x0];
m = line[0x0][0x1];
q = line[m + 0x1][0x0];
adj = new Array(n);
for (i = 0x0; i < n; i++)
    adj[i] = null;
conn = line['slice'](0x1, m + 0x1);
conn['sort'](function (a, b) {
    if (a[0x0] === b[0x0])
        return a[0x1] - b[0x1];
    return a[0x0] - b[0x0];
});
for (i in conn) {
    min0 = id0 = conn[i][0x0];
    min1 = id1 = conn[i][0x1];
    while (adj[min0] !== null)
        min0 = adj[min0];
    while (adj[min1] !== null)
        min1 = adj[min1];
    min = Math['min'](min0, min1);
    if (id0 !== min)
        adj[id0] = min;
    if (id1 !== min)
        adj[id1] = min;
}
q = line['slice'](m + 0x2, m + 0x2 + q);
for (i in q) {
    min0 = q[i][0x0];
    min1 = q[i][0x1];
    while (adj[min0] !== null)
        min0 = adj[min0];
    while (adj[min1] !== null)
        min1 = adj[min1];
    console['log'](min0 === min1 ? 'yes' : 'no');
}
function a0_0x340c30(ret) {
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