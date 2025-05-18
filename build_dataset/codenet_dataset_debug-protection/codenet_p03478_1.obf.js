function Main(input) {
    var _0x2e9e8e = (function () {
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
        _0x2e9e8e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5d04d9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5d04d9();
            }
        })();
    }());
    var input = input['split']('\x20');
    var n = input[0x0];
    var a = input[0x1];
    var b = input[0x2];
    var Sum = 0x0;
    for (j = 0x1; j <= n; j++) {
        if (0x0 <= j && j <= 0x9) {
            if (a <= j && j <= b) {
                Sum += j;
            }
        } else {
            var str = j['toString']();
            var arr = str['split']('')['map'](n => parseInt(n));
            var x = arr['reduce'](function (prev, current, i, arr) {
                return prev + current;
            });
        }
        ;
        if (a <= x && x <= b) {
            Sum += j;
        }
    }
    console['log'](Sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5d04d9(ret) {
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