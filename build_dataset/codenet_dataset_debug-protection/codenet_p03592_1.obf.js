function Main(input) {
    const _0x3734c5 = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
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
        _0x3734c5(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x1d2a40('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1d2a40();
            }
        })();
    }());
    const Param = input['split']('\x20');
    const N = i(Param[0x0]);
    const M = i(Param[0x1]);
    const K = i(Param[0x2]);
    for (var n = 0x0; n < N; n++) {
        for (var m = 0x0; m < M; m++) {
            var b = calcBlack(n, m, N, M);
            if (b == K)
                return console['log']('Yes');
        }
    }
    console['log']('No');
}
function calcBlack(n, m, N, M) {
    return N * n - m * n + (M * m - n * m);
}
function i(x) {
    return parseInt(x, 0xa);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1d2a40(ret) {
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