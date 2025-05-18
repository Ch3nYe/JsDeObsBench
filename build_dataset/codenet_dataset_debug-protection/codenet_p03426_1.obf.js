function Main(input) {
    var _0xa3f365 = (function () {
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
        _0xa3f365(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xd1f291('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xd1f291();
            }
        })();
    }());
    input = input['split']('\x0a');
    var H = input[0x0]['split']('\x20')['map'](a => parseInt(a));
    var W = H[0x1];
    var D = H[0x2];
    H = H[0x0];
    var A;
    var x = new Array(H * W + 0x1)['fill'](0x0)['map'](a => new Array(0x2));
    for (var i = 0x0; i < H; i++) {
        A = input[i + 0x1]['split']('\x20')['map'](a => parseInt(a));
        for (var j = 0x0; j < W; j++) {
            x[A[j]][0x0] = i;
            x[A[j]][0x1] = j;
        }
    }
    var y = new Array(H * W + 0x1)['fill'](0x0);
    for (i = D + 0x1; i <= H * W; i++) {
        y[i] = y[i - D] + Math['abs'](x[i - D][0x0] - x[i][0x0]) + Math['abs'](x[i - D][0x1] - x[i][0x1]);
    }
    var Q = parseInt(input[H + 0x1]);
    var ans = new Array(Q)['fill'](0x0);
    for (i = 0x0; i < Q; i++) {
        var L = input[H + 0x2 + i]['split']('\x20')['map'](a => parseInt(a));
        var R = L[0x1];
        L = L[0x0];
        ans[i] = y[R] - y[L];
    }
    console['log'](ans['join']('\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xd1f291(ret) {
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