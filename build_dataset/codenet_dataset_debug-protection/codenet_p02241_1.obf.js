var a0_0x3793eb = (function () {
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
    a0_0x3793eb(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4f9003('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4f9003();
        }
    })();
}());
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
A = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['map'](function (line) {
    return line['trim']()['split']('\x20')['map'](Number);
});
n = Number(A['shift']()[0x0]);
cnt = 0x1;
cost = 0x0;
conn = new Array(n);
conn[0x0] = !![];
for (i = 0x1; i < n; i++)
    conn[i] = ![];
while (cnt < n) {
    min = Number['MAX_SAFE_INTEGER'];
    for (i in conn) {
        if (!conn[i])
            continue;
        Ai = A[i];
        for (j in conn) {
            if (conn[j])
                continue;
            if (Ai[j] !== -0x1 && Ai[j] < min) {
                min = Ai[j];
                min_j = j;
            }
        }
    }
    conn[min_j] = !![];
    cost += min;
    cnt++;
}
console['log'](cost);
function a0_0x4f9003(ret) {
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