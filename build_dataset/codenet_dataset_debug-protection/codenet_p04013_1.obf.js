function Main(input) {
    var _0x16c31e = (function () {
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
        _0x16c31e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3f1272('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f1272();
            }
        })();
    }());
    input = input['split']('\x0a');
    tmp1 = input[0x0]['split']('\x20');
    var n = parseInt(tmp1[0x0]);
    var a = parseInt(tmp1[0x1]);
    tmp = input[0x1]['split']('\x20');
    x = new Array(n);
    var sum2 = 0x0;
    for (i = 0x0; i < tmp['length']; i++) {
        x[i] = parseInt(tmp[i]);
    }
    var s = 0x0;
    for (i = 0x0; i < n; i++) {
        sum2 = sum2 + x[i];
    }
    var b = new Array(sum2 + 0x1);
    for (var y = 0x0; y < sum2 + 0x1; y++) {
        b[y] = new Array(n + 0x1)['fill'](0x0);
    }
    b[0x0][0x0] = 0x1;
    for (j = 0x0; j < n; j++) {
        for (i = sum2; i >= 0x0; i--) {
            for (k = 0x0; k < n + 0x1; k++) {
                if (b[i][k] >= 0x1) {
                    b[i + x[j]][k + 0x1] = b[i + x[j]][k + 0x1] + b[i][k];
                }
            }
        }
    }
    for (i = 0x1; i <= n && i * a <= sum2; i++) {
        s = s + b[i * a][i];
    }
    console['log']('%s', s);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3f1272(ret) {
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