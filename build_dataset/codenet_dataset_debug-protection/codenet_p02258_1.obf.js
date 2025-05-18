function main(input) {
    var _0x2c9774 = (function () {
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
        _0x2c9774(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4dc7ee('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4dc7ee();
            }
        })();
    }());
    input = input['split']('\x0a');
    var values = input['map'](function (v) {
        return parseInt(v);
    });
    var min = Number['MAX_VALUE'], val = -Number['MAX_VALUE'];
    var N = values[0x0];
    for (var i = 0x1; i <= N - 0x1; i++) {
        if (min >= values[i]) {
            min = values[i];
        }
        if (values[i + 0x1] - min >= val) {
            val = values[i + 0x1] - min;
        }
    }
    console['log'](val);
    return val;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4dc7ee(ret) {
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