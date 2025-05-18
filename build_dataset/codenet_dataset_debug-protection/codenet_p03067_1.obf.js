function Main(input) {
    var _0x489bb4 = (function () {
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
        _0x489bb4(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5e4515('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5e4515();
            }
        })();
    }());
    var A = parseInt(input[0x0], 0xa);
    var B = parseInt(input[0x1], 0xa);
    var C = parseInt(input[0x2], 0xa);
    if (A < B) {
        if (A < C && C < B) {
            console['log']('Yes');
        } else {
            console['log']('No');
        }
    } else {
        if (B < C && C < A) {
            console['log']('Yes');
        } else {
            console['log']('No');
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\n|\s/));
function _0x5e4515(ret) {
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