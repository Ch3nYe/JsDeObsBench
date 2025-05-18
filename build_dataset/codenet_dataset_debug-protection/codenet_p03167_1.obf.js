function Main(input) {
    const _0x380a7a = (function () {
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
        _0x380a7a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x492734('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x492734();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    let C = 0x3b9aca00 + 0x7;
    let H = parseInt(input[0x0][0x0], 0xa);
    let W = parseInt(input[0x0][0x1], 0xa);
    let DP = [];
    for (let i = 0x0; i < H; i++) {
        DP['push'](Array['from']({ 'length': W }, () => 0x0));
    }
    DP[0x0][0x0] = 0x1;
    for (let i = 0x1; i < H + W - 0x1; i++) {
        for (let j = 0x0; j <= Math['min'](i, H - 0x1); j++) {
            if (input[j + 0x1][0x0][i - j] === '#' || i - j >= W)
                continue;
            if (j > 0x0 && i - j > 0x0) {
                DP[j][i - j] = (DP[j - 0x1][i - j] + DP[j][i - j - 0x1]) % C;
            } else if (j > 0x0) {
                DP[j][i - j] = DP[j - 0x1][i - j];
            } else {
                DP[j][i - j] = DP[j][i - j - 0x1];
            }
        }
    }
    console['log'](DP['pop']()['pop']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x492734(ret) {
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