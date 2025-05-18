var a0_0x9af224 = (function () {
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
    a0_0x9af224(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x38a3a2('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x38a3a2();
        }
    })();
}());
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
M = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline']);
M = M['map'](function (line) {
    return line['split']('\x20')['map'](Number);
});
n = M[0x0][0x0];
min = {};
for (i = 0x1; i <= n; i++)
    min[i] = {};
for (i = 0x1; i <= n; i++)
    min[i][i] = 0x0;
for (i = 0x1; i < n; i++) {
    for (j = 0x1, k = 0x1 + i; k <= n; j++, k++) {
        min[j][k] = Number['MAX_VALUE'];
        for (l = j; l < k; l++) {
            min[j][k] = Math['min'](min[j][k], M[j][0x0] * M[l][0x1] * M[k][0x1] + min[j][l] + min[l + 0x1][k]);
        }
    }
}
console['log'](min[0x1][n]);
function a0_0x38a3a2(ret) {
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