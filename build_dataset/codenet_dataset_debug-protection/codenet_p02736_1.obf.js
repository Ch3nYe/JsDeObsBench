function Main(input) {
    var _0x17a025 = (function () {
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
        _0x17a025(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2f0460('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2f0460();
            }
        })();
    }());
    input = input['split']('\x0a');
    for (i = 0x0; i < input['length']; i = i + 0x2) {
        var N = parseInt(input[i]);
        var a = input[i + 0x1]['split']('');
        var aa = a['map'](Number);
        for (j = N; j > 0x1; j--) {
            for (k = 0x0; k < j; k++) {
                var e = Math['abs'](aa[0x0] - aa[0x1]);
                aa['push'](e);
                aa['shift']();
            }
            aa['pop']();
        }
        console['log'](aa[0x0]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2f0460(ret) {
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