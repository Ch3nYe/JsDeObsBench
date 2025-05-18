function get_run_length(min, max) {
    var result = 0x0;
    if (max > Math['abs'](min)) {
        result = Math['abs'](min * 0x2) + max;
    } else {
        result = Math['abs'](min) + max * 0x2;
    }
    if (min >= 0x0) {
        result = max;
    }
    if (max <= 0x0) {
        result = Math['abs'](min);
    }
    return result;
}
function main(input) {
    var _0x18f416 = (function () {
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
        _0x18f416(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5a2fdf('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5a2fdf();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    const N = parseInt(lines[0x0]['split']('\x20')[0x0]);
    const K = parseInt(lines[0x0]['split']('\x20')[0x1]);
    const Xs = lines[0x1]['split']('\x20')['map'](x => parseInt(x));
    var result = 0x989680;
    for (var i = 0x0; i < N - K + 0x1; i++) {
        var min = Xs[i];
        var max = Xs[i + K - 0x1];
        var tmp = get_run_length(min, max);
        result = Math['min'](tmp, result);
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5a2fdf(ret) {
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