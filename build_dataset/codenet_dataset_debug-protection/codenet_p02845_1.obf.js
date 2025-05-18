function Main(input) {
    var _0x4df5cb = (function () {
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
        _0x4df5cb(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x28008e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x28008e();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var RGBWithoutOrder = [
        0x1,
        0x0,
        0x0
    ];
    var tmp1, tmp2, flag;
    var ans = 0x3;
    for (var i = 0x1; i < N; i++) {
        tmp2 = 0x0;
        tmp1 = parseInt(input[0x1][i], 0xa);
        for (var x of RGBWithoutOrder) {
            if (x === tmp1)
                tmp2++;
        }
        ans *= tmp2;
        ans %= 0x3b9aca00 + 0x7;
        for (var j = 0x0; j < 0x3; j++) {
            if (RGBWithoutOrder[j] === tmp1) {
                RGBWithoutOrder[j]++;
                break;
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x28008e(ret) {
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