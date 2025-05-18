(function (input) {
    var _0x5b4c79 = (function () {
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
        _0x5b4c79(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4c222b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4c222b();
            }
        })();
    }());
    var inputs = input['replace'](/\r/g, '')['split']('\x0a'), data = [], n, line, max_index, a, b;
    n = parseInt(inputs['shift']());
    max_index = 0x65;
    max_value = -0x1;
    while (n--) {
        line = inputs['shift']()['split']('\x20');
        a = parseInt(line[0x0]);
        b = parseInt(line[0x1]);
        if (b > max_value || b === max_value && a < max_index) {
            max_index = a;
            max_value = b;
        }
    }
    console['log'](max_index + '\x20' + max_value);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x4c222b(ret) {
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