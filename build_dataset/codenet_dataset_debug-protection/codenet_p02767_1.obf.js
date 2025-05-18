function Main(input) {
    var _0x47e6cb = (function () {
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
    input = input['split']('\x0a');
    var inputs = input[0x1]['split']('\x20');
    function avg(args) {
        (function () {
            _0x47e6cb(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x28e6a9('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x28e6a9();
                }
            })();
        }());
        var num = 0x0;
        for (var n of args) {
            num += Number(n);
        }
        return num / args['length'];
    }
    var average = Math['round'](avg(inputs));
    var useStamina = 0x0;
    for (var point of inputs) {
        useStamina += Math['pow'](average - point, 0x2);
    }
    console['log'](useStamina);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x28e6a9(ret) {
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