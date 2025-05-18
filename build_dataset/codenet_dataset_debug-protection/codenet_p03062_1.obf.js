function main(input) {
    var _0x165756 = (function () {
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
        _0x165756(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4a4ed8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4a4ed8();
            }
        })();
    }());
    const formatted_input = input['split']('\x0a');
    const N = parseInt(formatted_input[0x0], 0xa);
    const As = formatted_input[0x1]['split']('\x20')['map'](x => parseInt(x));
    dp = [];
    for (var i = 0x0; i < N; i++) {
        var results = [];
        if (i == 0x0) {
            results = [
                As[i],
                As[i] * -0x1
            ];
        } else {
            var not_flipped = Math['max'](dp[i - 0x1][0x0] + As[i], dp[i - 0x1][0x1] - As[i]);
            var flipped = Math['max'](dp[i - 0x1][0x0] - As[i], dp[i - 0x1][0x1] + As[i]);
            results = [
                not_flipped,
                flipped
            ];
        }
        dp['push'](results);
    }
    console['log'](dp[N - 0x1][0x0]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4a4ed8(ret) {
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