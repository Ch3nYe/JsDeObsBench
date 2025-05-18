function Main(input) {
    var _0x536be1 = (function () {
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
        _0x536be1(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2d1d3b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2d1d3b();
            }
        })();
    }());
    var data = input['split']('\x0a');
    var n = data[0x0];
    var a = data['slice'](0x1);
    for (var i = 0x0; i < n; ++i) {
        var b = [];
        for (var j = 0x0; j < a['length']; j += 0x2) {
            if (a[j] > a[j + 0x1]) {
                b['push'](a[j] - a[j + 0x1]);
            } else if (a[j] == a[j + 0x1]) {
                b['push'](a[j]);
            } else {
                b['push'](a[j + 0x1] - a[j]);
            }
        }
        a = b;
    }
    console['log'](a[0x0]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2d1d3b(ret) {
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