function gcd(i, j, k) {
    var max = 0x0;
    if (max < i) {
        max = i;
    }
    if (max < j) {
        max = j;
    }
    if (max < k) {
        max = k;
    }
    var a = 0x0;
    for (var count = 0x1; count <= max; count++) {
        if (i % count == 0x0 && i >= count && (j % count == 0x0 && j >= count) && (k % count == 0x0 && k >= count)) {
            a = count;
        }
    }
    return a;
}
function Main(input) {
    var _0x15b075 = (function () {
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
        _0x15b075(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4c9f7d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4c9f7d();
            }
        })();
    }());
    var N = parseInt(input, 0xa);
    var sum = 0x0;
    for (var i = 0x1; i <= N; i++) {
        for (var j = 0x1; j <= N; j++) {
            for (var k = 0x1; k <= N; k++) {
                sum += gcd(i, j, k);
            }
        }
    }
    console['log'](sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4c9f7d(ret) {
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