var a0_0x3ede0d = (function () {
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
    a0_0x3ede0d(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x342304('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x342304();
        }
    })();
}());
var readline = require('readline');
var lines = [];
var result = 0x0;
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var N = Number(lines[0x0]['split']('\x20')[0x0]);
    var M = Number(lines[0x0]['split']('\x20')[0x1]);
    var X = lines[0x1]['split']('\x20')['map'](value => Number(value));
    X['sort']((a, b) => a - b);
    var sum = Array(M)['fill'](0x0);
    for (var i = 0x1; i < M; i++) {
        sum[i] = X[i] - X[i - 0x1];
    }
    sum['sort']((a, b) => b - a);
    for (var i = N - 0x1; i < M; i++) {
        result += sum[i];
    }
    console['log'](result);
});
function a0_0x342304(ret) {
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