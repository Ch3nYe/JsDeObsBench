function LD(a, b) {
    var _0x24963f = (function () {
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
        _0x24963f(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x283b54('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x283b54();
            }
        })();
    }());
    var ar = new Array();
    for (var i = 0x0; i < a['length'] + 0x1; i++) {
        var subar = new Array();
        for (var j = 0x0; j < b['length'] + 0x1; j++) {
            subar['push'](0x0);
        }
        ar['push'](subar);
    }
    for (var i = 0x0; i < a['length'] + 0x1; i++) {
        ar[i][0x0] = i;
    }
    for (var i = 0x0; i < b['length'] + 0x1; i++) {
        ar[0x0][i] = i;
    }
    for (var i = 0x1; i < a['length'] + 0x1; i++) {
        for (var j = 0x1; j < b['length'] + 0x1; j++) {
            if (a['charAt'](i - 0x1) == b['charAt'](j - 0x1)) {
                ar[i][j] = Math['min'](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1]);
            } else {
                ar[i][j] = Math['min'](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1] + 0x1);
            }
        }
    }
    return ar[a['length']][b['length']];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var strings = input['split']('\x0a');
console['log'](LD(strings[0x0], strings[0x1]));
function _0x283b54(ret) {
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