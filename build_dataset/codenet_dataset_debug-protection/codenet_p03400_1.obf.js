function Main(input) {
    var _0x2e8f0b = (function () {
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
        _0x2e8f0b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1737e2('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1737e2();
            }
        })();
    }());
    input = input['split']('\x0a');
    var n = Number(input[0x0]);
    var d = Number(input[0x1]['split']('\x20')[0x0]);
    var x = Number(input[0x1]['split']('\x20')[0x1]);
    var array = [];
    for (var i = 0x0; i < input['length'] - 0x2; i++) {
        array['push'](Number(input[i + 0x2]));
    }
    var total = [];
    for (var j = 0x0; j < array['length']; j++) {
        for (var k = 0x1; k < 0x64; k++) {
            if (d >= k * array[j] + 0x1) {
                total['push'](k * array[j] + 0x1);
            }
        }
    }
    console['log'](total['length'] + n + x);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1737e2(ret) {
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