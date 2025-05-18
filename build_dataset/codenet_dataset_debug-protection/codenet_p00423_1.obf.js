(function (stdin) {
    var _0x373c2e = (function () {
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
        _0x373c2e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x191a11('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x191a11();
            }
        })();
    }());
    var lines = stdin['trim']()['split']('\x0a');
    while (0x1) {
        var line = lines['shift']();
        if (line == '0') {
            break;
        }
        var n = Number(line);
        var a = 0x0, b = 0x0;
        for (var i = 0x0; i < n; i++) {
            var numbers = lines['shift']()['split']('\x20')['map'](Number);
            if (numbers[0x0] == numbers[0x1]) {
                a += numbers[0x0];
                b += numbers[0x0];
            } else if (numbers[0x0] > numbers[0x1]) {
                a += numbers[0x0] + numbers[0x1];
            } else {
                b += numbers[0x0] + numbers[0x1];
            }
        }
        console['log']([
            a,
            b
        ]['join']('\x20'));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x191a11(ret) {
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