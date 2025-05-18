function main(input) {
    var _0x39c18a = (function () {
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
        _0x39c18a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x395342('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x395342();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    const NW = lines['shift']()['split']('\x20')['map'](x => parseInt(x));
    const N = NW[0x0];
    const W = NW[0x1];
    const items = lines['map'](line => line['split']('\x20')['map'](x => parseInt(x)));
    dp = [];
    for (var i = 0x0; i < W + 0x1; i++) {
        dp['push'](Array(N + 0x1)['fill'](0x0));
    }
    var result = 0x0;
    for (var i = 0x0; i < N; i++) {
        for (var w = 0x0; w <= W; w++) {
            var weight = items[i][0x0];
            var value = items[i][0x1];
            if (weight <= w) {
                dp[w][i + 0x1] = Math['max'](dp[w][i], dp[w - weight][i] + value);
            } else {
                dp[w][i + 0x1] = dp[w][i];
            }
            if (dp[w][i + 0x1] > result) {
                result = dp[w][i + 0x1];
            }
        }
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x395342(ret) {
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