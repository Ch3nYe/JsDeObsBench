function Main(input) {
    var _0x3ffd65 = (function () {
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
        _0x3ffd65(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x226f0a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x226f0a();
            }
        })();
    }());
    input = input['split']('\x0a');
    var a = parseInt(input[0x0]['split']('\x20')[0x0], 0xa);
    var b = parseInt(input[0x0]['split']('\x20')[0x1], 0xa);
    var s = input[0x1];
    var regex = new RegExp('^[0-9]{' + a + '}-[0-9]{' + b + '}$', 'g');
    var f = s['match'](regex);
    console['log'](f == null ? 'No' : 'Yes');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x226f0a(ret) {
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