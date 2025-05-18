function Main(input) {
    var _0x50b000 = (function () {
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
        _0x50b000(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4d6f7a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4d6f7a();
            }
        })();
    }());
    input = input['split']('\x20');
    var valN = input[0x0];
    var valK = input[0x1];
    if (valN < 0x3) {
        console['log']('0');
        return;
    }
    var count = 0x0;
    for (var i = 0x0; i + 0x2 < valN; i++) {
        for (var j = 0x0; j < 0x5; j++) {
            if ((i * 0x3f + j * 0x9 + 0x51) % 0xb == valK) {
                count++;
            }
        }
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4d6f7a(ret) {
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