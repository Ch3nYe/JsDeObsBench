function Main(input) {
    var _0x296fe9 = (function () {
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
        _0x296fe9(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xad24da('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xad24da();
            }
        })();
    }());
    input = input['split']('\x20');
    var tem = input;
    var beforeText = tem;
    var arr = String(tem)['split']('');
    var a = parseInt(arr[0x0], 0xa);
    var b = parseInt(arr[0x1], 0xa);
    var c = parseInt(arr[0x2], 0xa);
    var d = parseInt(arr[0x3], 0xa);
    if (a == b) {
        console['log']('Bad');
    } else if (b == c) {
        console['log']('Bad');
    } else if (c == d) {
        console['log']('Bad');
    } else {
        console['log']('Good');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xad24da(ret) {
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