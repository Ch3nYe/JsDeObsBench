function Main(input) {
    var _0x24d49e = (function () {
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
        _0x24d49e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x246bf2('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x246bf2();
            }
        })();
    }());
    input = input['split']('\x0a');
    var N = input[0x0]['split']('\x20')['map'](a => parseInt(a));
    var K = N[0x1];
    N = N[0x0];
    var x = [], y = [], c = [];
    for (var i = 0x0; i < N; i++) {
        x[i] = input[i + 0x1]['split']('\x20');
        y[i] = parseInt(x[i][0x1]) % (K * 0x2);
        c[i] = x[i][0x2] === 'W' ? 0x0 : 0x1;
        x[i] = parseInt(x[i][0x0]) % (K * 0x2);
    }
    var ans = 0x0;
    for (i = 0x0; i < K; i++) {
        var now = 0x0;
        var Y1 = new Array(K * 0x2)['fill'](0x0), Y2 = new Array(K * 0x2)['fill'](0x0);
        for (var k = 0x0; k < N; k++) {
            if ((((x[k] + i) / K ^ y[k] / K) & 0x1) === c[k]) {
                now++;
                Y1[y[k]]++;
            } else
                Y2[y[k]]++;
        }
        if (ans < now)
            ans = now;
        if (ans < N - now)
            ans = N - now;
        for (var j = 0x0; j < K - 0x1; j++) {
            now += Y2[j] - Y1[j] + Y2[j + K] - Y1[j + K];
            if (ans < now)
                ans = now;
            if (ans < N - now)
                ans = N - now;
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x246bf2(ret) {
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