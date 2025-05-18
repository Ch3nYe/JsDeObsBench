function Main(input) {
    var _0x3f826b = (function () {
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
        _0x3f826b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x249fdd('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x249fdd();
            }
        })();
    }());
    input = input['split']('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var q = parseInt(input[0x2], 0xa);
    input[0x1] = input[0x1]['split']('\x20');
    input[0x3] = input[0x3]['split']('\x20');
    var s = Array(n), t = Array(q);
    for (var i = 0x0; i < n; i++) {
        s[i] = parseInt(input[0x1][i], 0xa);
    }
    for (var i = 0x0; i < q; i++) {
        t[i] = parseInt(input[0x3][i], 0xa);
    }
    var count = 0x0;
    for (var i = 0x0; i < q; i++) {
        var j;
        for (j = 0x0; j < n; j++) {
            if (s[j] == t[i])
                break;
        }
        if (j < n)
            count++;
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x249fdd(ret) {
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