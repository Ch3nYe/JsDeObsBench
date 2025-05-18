function main(input) {
    var _0x52544b = (function () {
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
        _0x52544b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2f01d2('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2f01d2();
            }
        })();
    }());
    const args = input['split']('\x20');
    const R = parseInt(args[0x0], 0xa), G = parseInt(args[0x1], 0xa), B = parseInt(args[0x2], 0xa), N = parseInt(args[0x3], 0xa);
    var s = 0x0;
    var k = 0x0;
    for (var i = 0x0; i <= (N / R | 0x0); ++i) {
        for (var j = 0x0; j <= (N / G | 0x0); ++j) {
            k = (N - i * R - j * G) / B | 0x0;
            if (k >= 0x0 && i * R + j * G + k * B == N)
                ++s;
        }
    }
    console['log'](s);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2f01d2(ret) {
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