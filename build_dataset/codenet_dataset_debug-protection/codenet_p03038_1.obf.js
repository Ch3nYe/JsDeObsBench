var a0_0x2f0c4b = (function () {
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
    a0_0x2f0c4b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5ba211('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5ba211();
        }
    })();
}());
var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', x => {
    lines['push'](x);
});
var A;
rl['on']('close', () => {
    var N = Number(lines[0x0]['split']('\x20')[0x0]);
    var M = Number(lines[0x0]['split']('\x20')[0x1]);
    A = lines[0x1]['split']('\x20')['map'](i => Number(i));
    lines['shift']();
    lines['shift']();
    var BC = lines['map'](i => i['split']('\x20')['map'](i => Number(i)));
    A['sort']((a, b) => a - b);
    BC['sort']((a, b) => b[0x1] - a[0x1]);
    var k = 0x0;
    var ans = 0x0;
    for (var i = 0x0; i < M; i++) {
        var b = BC[i][0x0];
        var c = BC[i][0x1];
        var cnt = 0x1;
        for (var j = k; j < N; j++) {
            if (b < cnt) {
                k = j;
                break;
            }
            if (A[j] < c) {
                ans += c;
            } else {
                for (var x = j; x < N; x++) {
                    ans += A[x];
                }
                console['log'](ans);
                return 0x0;
            }
            cnt++;
        }
    }
    for (var x = j; x < N; x++) {
        ans += A[x];
    }
    console['log'](ans);
});
function a0_0x5ba211(ret) {
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