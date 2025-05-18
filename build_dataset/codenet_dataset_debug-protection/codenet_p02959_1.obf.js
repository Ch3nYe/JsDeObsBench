function Main(input) {
    var _0x4ed6df = (function () {
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
        _0x4ed6df(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2184bc('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2184bc();
            }
        })();
    }());
    input = input['split']('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var a = input[0x1]['split']('\x20');
    a = a['map'](str => parseInt(str, 0xa));
    var b = input[0x2]['split']('\x20');
    b = b['map'](str => parseInt(str, 0xa));
    var count = 0x0;
    for (var i = 0x0; i < n; i++) {
        var atarget = a[i] + a[i + 0x1];
        var rest = atarget - b[i];
        if (rest < 0x0) {
            count += atarget;
            a[i + 0x1] = 0x0;
        } else {
            count += b[i];
            a[i + 0x1] = Math['min'](rest, a[i + 0x1]);
        }
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2184bc(ret) {
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