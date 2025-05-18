function Main(input) {
    var _0x254832 = (function () {
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
        _0x254832(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xdae376('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xdae376();
            }
        })();
    }());
    var input = input['split']('\x20');
    var n = parseInt(input[0x0], 0xa);
    var p = parseInt(input[0x1], 0xa);
    var arr = [];
    var counts = [];
    var ans = 0x1;
    var i = 0x2;
    while (i <= p) {
        while (p % i === 0x0) {
            arr['push'](i);
            p = Math['floor'](p / i);
        }
        i++;
    }
    for (var i = 0x0; i < arr['length']; i++) {
        var key = arr[i];
        counts[key] = counts[key] ? counts[key] + 0x1 : 0x1;
    }
    var b = arr['filter'](function (x, i, self) {
        return self['indexOf'](x) === i;
    });
    for (var i = 0x0; i < b['length']; i++) {
        if (counts[b[i]] >= n) {
            ans *= b[i];
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xdae376(ret) {
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