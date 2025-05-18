var a0_0x329bf0 = (function () {
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
    a0_0x329bf0(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x445409('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x445409();
        }
    })();
}());
var lines = [];
var result = 0x0;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var N = Number(lines[0x0]);
    var a = lines[0x1]['split']('\x20')['map'](value => Number(value));
    a['sort']((a, b) => a - b);
    var counter = Array(N)['fill'](0x0);
    var j = 0x0;
    counter[0x0] = [
        a[0x0],
        0x1
    ];
    for (var i = 0x1; i < N; i++) {
        if (a[i] !== a[i - 0x1]) {
            j++;
            counter[j] = [
                a[i],
                0x1
            ];
        } else {
            var cnt = counter[j][0x1] + 0x1;
            counter[j] = [
                a[i],
                cnt
            ];
        }
    }
    for (var i = 0x0; i < counter['length']; i++) {
        if (counter[i][0x0] === counter[i][0x1]) {
            continue;
        } else {
            if (counter[i] === 0x0) {
                continue;
            } else {
                result += Math['min'](counter[i][0x1], Math['abs'](counter[i][0x0] - counter[i][0x1]));
            }
        }
    }
    console['log'](result);
});
function a0_0x445409(ret) {
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