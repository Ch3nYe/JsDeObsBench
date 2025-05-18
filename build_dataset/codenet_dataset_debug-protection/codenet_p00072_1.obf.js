var a0_0x3b71a7 = (function () {
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
    a0_0x3b71a7(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3fa0a7('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3fa0a7();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var m = Arr['shift']() - 0x0;
    var N = [];
    for (var i = 0x0; i < n; i++) {
        N[i] = [];
        for (var j = 0x0; j < n; j++) {
            N[i][j] = Infinity;
            if (i == j)
                N[i][j] = 0x0;
        }
    }
    var arr = [];
    for (var i = 0x0; i < m; i++) {
        var abc = Arr['shift']()['split'](',')['map'](Number);
        var a = abc[0x0];
        var b = abc[0x1];
        var c = abc[0x2] / 0x64;
        N[a][b] = c;
        N[b][a] = c;
    }
    var city = [0x0];
    var cost = 0x0;
    while (!![]) {
        if (city['length'] == n)
            break;
        var min = Infinity;
        var select = -0x1;
        for (var i = 0x0; i < city['length']; i++) {
            for (var j = 0x0; j < n; j++) {
                if (city['indexOf'](j) != -0x1)
                    continue;
                if (N[city[i]][j] < min) {
                    select = j;
                    min = N[city[i]][j] - 0x1;
                }
            }
        }
        if (select != -0x1) {
            cost += min;
            city['push'](select);
        }
    }
    console['log'](cost);
}
function a0_0x3fa0a7(ret) {
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