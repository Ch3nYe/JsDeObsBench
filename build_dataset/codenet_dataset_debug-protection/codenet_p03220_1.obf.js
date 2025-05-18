var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var rest = arguments, v = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] < v)
            v = rest[i];
    return v;
}
function max() {
    var rest = arguments, v = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] > v)
            v = rest[i];
    return v;
}
function gcd() {
    var rest = arguments, v = rest[0x0], temp = (a, b) => b ? temp(b, a % b) : a;
    for (var i = 0x1; i < rest['length']; i++)
        v = temp(v, rest[i]);
    return v;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var _0x4ffcd9 = (function () {
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
        _0x4ffcd9(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2ebe9a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2ebe9a();
            }
        })();
    }());
    var input = input['split']('\x0a');
    var n = toInt(input[0x0]);
    var ta = toIntArr(input[0x1]['split']('\x20'));
    var hs = toIntArr(input[0x2]['split']('\x20'));
    var t = ta[0x0];
    var a = ta[0x1];
    var ans = 0x1;
    var x = abs(t - a - 0.006 * hs[0x0]), y;
    for (var i = 0x1; i < n; i++) {
        y = abs(t - a - 0.006 * hs[i]);
        if (y < x) {
            ans = i + 0x1;
            x = y;
        }
    }
    console['log'](ans);
}
function _0x2ebe9a(ret) {
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