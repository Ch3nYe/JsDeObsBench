function Main(input) {
    var _0x8d9239 = (function () {
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
        _0x8d9239(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2899f9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2899f9();
            }
        })();
    }());
    input = input['split']('\x0a')['map'](Number);
    input['shift']();
    var n = arrsum(input);
    if (n == input['length']) {
        n = 0x1;
    }
    if (n % 0x2 == 0x1) {
        console['log']('first');
    } else {
        console['log']('second');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function arrsum(arr) {
    var sum = 0x0;
    for (var i = 0x0, len = arr['length']; i < len; ++i) {
        sum += arr[i];
    }
    ;
    return sum;
}
function _0x2899f9(ret) {
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