function Main(input) {
    var _0x58e300 = (function () {
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
        _0x58e300(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5e8c38('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5e8c38();
            }
        })();
    }());
    var xs = input['trim']()['split']('\x0a')['map'](v => parseInt(v, 0xa));
    var A = 0x0;
    if (xs[0x0] <= xs[0x1]) {
        A = A + xs[0x0];
    } else if (xs[0x0] >= xs[0x1]) {
        A = A + xs[0x1];
    }
    var B = 0x0;
    if (xs[0x2] <= xs[0x3]) {
        B = B + xs[0x2];
    } else if (xs[0x2] >= xs[0x3]) {
        B = B + xs[0x3];
    }
    console['log'](A + B);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5e8c38(ret) {
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