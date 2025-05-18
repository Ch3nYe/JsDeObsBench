function main(input) {
    var _0x598469 = (function () {
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
        _0x598469(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4a23ce('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4a23ce();
            }
        })();
    }());
    var digits = input['toString']()['length'];
    var input = parseInt(input, 0xa);
    var divisor = Math['pow'](0xa, digits - 0x1);
    var arr = [];
    for (var i = 0x0; i < digits; i++) {
        arr['push'](Math['floor'](input / divisor));
        input = input % divisor;
        divisor /= 0xa;
    }
    var answer = arr['reduce']((a, b) => a + b);
    if (answer == 0x1) {
        answer = 0xa;
    }
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4a23ce(ret) {
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