function Main(input) {
    var _0x22257d = (function () {
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
        _0x22257d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x88f609('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x88f609();
            }
        })();
    }());
    var a = parseInt(input['charAt'](0x0) + input['charAt'](0x1));
    var b = parseInt(input['charAt'](0x2) + input['charAt'](0x3));
    var r = 0x0;
    if (a >= 0xd || a == 0x0) {
        r = 0x1;
    }
    if (b >= 0xd || b == 0x0) {
        r = 0x2;
    }
    if (a >= 0x1 && a <= 0xc && b >= 0x1 && b <= 0xc) {
        r = 0x3;
    }
    if (a >= 0xd && b >= 0xd || a >= 0xd && b == 0x0 || a == 0x0 && b >= 0xd || a == 0x0 && b == 0x0) {
        r = 0x4;
    }
    if (r == 0x1) {
        console['log']('YYMM');
    }
    if (r == 0x2) {
        console['log']('MMYY');
    }
    if (r == 0x3) {
        console['log']('AMBIGUOUS');
    }
    if (r == 0x4) {
        console['log']('NA');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x88f609(ret) {
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