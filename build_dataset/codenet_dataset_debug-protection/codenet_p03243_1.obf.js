function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x2fc8c6 = (function () {
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
        _0x2fc8c6(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x42e90a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x42e90a();
            }
        })();
    }());
    input = parseInt(input['trim']());
    var check = [
        0x0,
        0x6f,
        0xde,
        0x14d,
        0x1bc,
        0x22b,
        0x29a,
        0x309,
        0x378,
        0x3e7
    ];
    for (var i = 0x0; i < check['length'] - 0x1; i++) {
        if (check[i] < input && check[i + 0x1] > input) {
            myout(check[i + 0x1]);
            return;
        } else if (check[i] == input) {
            myout(check[i]);
            return;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x42e90a(ret) {
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