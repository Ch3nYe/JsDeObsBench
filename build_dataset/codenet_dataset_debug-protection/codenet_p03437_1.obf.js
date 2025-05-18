function Main(input) {
    var _0x4883ab = (function () {
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
        _0x4883ab(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3523ea('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3523ea();
            }
        })();
    }());
    input = input['split']('\x20');
    ans = input[0x0] / input[0x1];
    num = 0x0;
    var a = Number['isInteger'](ans);
    if (a === !![]) {
        ans = -0x1;
    } else {
        while (!![]) {
            num++;
            cal = input[0x0] * num / input[0x1];
            var b = Number['isInteger'](cal);
            if (b === !![]) {
                ans = input[0x0] * (num - 0x1);
                break;
            }
            if (input[0x0] > Math['pow'](0xa, 0x9) | input[0x1] > Math['pow'](0xa, 0x9) | input[0x0] * (num - 0x1) > Math['pow'](0xa, 0x12)) {
                ans = -0x1;
                break;
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3523ea(ret) {
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