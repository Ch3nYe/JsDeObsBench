function Main(input) {
    var _0x4bd534 = (function () {
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
    input = input['split']('\x0a');
    var a1 = input[0x1]['split']('\x20')['map'](e => {
        return parseInt(e);
    });
    var a2 = input[0x2]['split']('\x20')['map'](e => {
        return parseInt(e);
    });
    var j = a1['length'] - 0x1;
    var m = 0x0, n = a1['length'] - 0x2;
    var r = 0x0;
    var temp;
    for (var i = j; i >= m; i--) {
        temp = sum(a1['slice'](m, i + 0x1)) + sum(a2['slice'](i));
        if (r < temp)
            r = temp;
    }
    function sum(arr) {
        (function () {
            _0x4bd534(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x8fbf9e('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x8fbf9e();
                }
            })();
        }());
        var r = 0x0;
        for (var i = 0x0; i < arr['length']; i++) {
            r += arr[i];
        }
        return r;
    }
    console['log'](r);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x8fbf9e(ret) {
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