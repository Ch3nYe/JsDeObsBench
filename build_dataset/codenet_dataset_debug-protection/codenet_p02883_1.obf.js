function Main(input) {
    var _0x5543a2 = (function () {
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
        _0x5543a2(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4050cc('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4050cc();
            }
        })();
    }());
    input = input['split']('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const K = input[0x0]['split']('\x20')[0x1] - 0x0;
    var A = input[0x1]['split']('\x20')['map'](e => {
        return e - 0x0;
    })['sort']((a, b) => {
        return a - b;
    });
    var F = input[0x2]['split']('\x20')['map'](e => {
        return e - 0x0;
    })['sort']((a, b) => {
        return b - a;
    });
    var possible = 0x0;
    for (var i = 0x0; i < N; i++) {
        possible = Math['max'](possible, A[i] * F[i]);
    }
    var impossible = -0x1;
    var temp;
    var sum;
    while (possible - impossible > 0x1) {
        temp = Math['ceil']((impossible + possible) / 0x2);
        sum = 0x0;
        for (var i = 0x0; i < N; i++) {
            sum += Math['max'](0x0, A[i] - Math['floor'](temp / F[i]));
        }
        if (sum <= K) {
            possible = temp;
        } else {
            impossible = temp;
        }
    }
    console['log'](possible);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4050cc(ret) {
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