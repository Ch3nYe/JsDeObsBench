function Main(input) {
    var _0x29fca9 = (function () {
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
        _0x29fca9(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5e1834('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5e1834();
            }
        })();
    }());
    tmp = input['split']('\x20');
    a = 0x0;
    b = 0x0;
    c = 0x0;
    d = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (tmp[i] == '1') {
            a = 0x1;
        }
        if (tmp[i] == '9') {
            b = 0x1;
        }
        if (tmp[i] == '7') {
            c = 0x1;
        }
        if (tmp[i] == '4') {
            d = 0x1;
        }
    }
    if (a == 0x1 && b == 0x1 && c == 0x1 && d == 0x1) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5e1834(ret) {
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