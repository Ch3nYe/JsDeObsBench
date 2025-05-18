function Main(input) {
    var _0x2507e3 = (function () {
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
        _0x2507e3(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3c6cd2('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3c6cd2();
            }
        })();
    }());
    var list = [
        0x1,
        0x1,
        0x1,
        0x2,
        0x1,
        0x2,
        0x1,
        0x5,
        0x2,
        0x2,
        0x1,
        0x5,
        0x1,
        0x2,
        0x1,
        0xe,
        0x1,
        0x5,
        0x1,
        0x5,
        0x2,
        0x2,
        0x1,
        0xf,
        0x2,
        0x2,
        0x5,
        0x4,
        0x1,
        0x4,
        0x1,
        0x33
    ];
    input = parseInt(input);
    if (0x1 <= input && input <= 0x20) {
        console['log'](list[input - 0x1]);
    } else {
        console['log'](0x0);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3c6cd2(ret) {
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