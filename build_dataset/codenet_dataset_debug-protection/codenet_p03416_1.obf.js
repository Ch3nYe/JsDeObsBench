function Main(input) {
    var _0x490533 = (function () {
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
    var input = input['split']('\x20');
    var A = input[0x0];
    var B = input[0x1];
    var cnt = 0x0;
    function hoge() {
        (function () {
            _0x490533(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x2a9227('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x2a9227();
                }
            })();
        }());
        var x = A['toString']();
        if (x[0x0] === x[0x4] && x[0x1] === x[0x3]) {
            return !![];
        }
    }
    while (A <= B) {
        if (hoge()) {
            cnt++;
        }
        A++;
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2a9227(ret) {
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