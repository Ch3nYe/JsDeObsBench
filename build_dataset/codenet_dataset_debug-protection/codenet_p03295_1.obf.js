var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var _0x494945 = (function () {
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
        _0x494945(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x479333('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x479333();
            }
        })();
    }());
    var input = input['split']('\x0a');
    var temp1 = input[0x0]['split']('\x20');
    var n = toInt(temp1[0x0]);
    var m = toInt(temp1[0x1]);
    var abs = [];
    for (var i = 0x0; i < m; i++) {
        c = toIntArr(input[i + 0x1]['split']('\x20'));
        a = c[0x0];
        b = c[0x1];
        abs[i] = [
            a,
            b
        ];
    }
    abs['sort'](function (a, b) {
        if (a[0x0] !== b[0x0]) {
            return a[0x0] - b[0x0];
        } else {
            return a[0x1] - b[0x1];
        }
    });
    var l = 0x0;
    r = n - 0x1;
    var ab;
    var ans = 0x1;
    for (var i = 0x0; i < m; i++) {
        ab = abs[i];
        if (ab[0x1] <= l || r <= ab[0x0]) {
            ans++;
            l = ab[0x0];
            r = ab[0x1];
        } else {
            l = max(l, ab[0x0]);
            r = min(r, ab[0x1]);
        }
    }
    console['log'](ans);
}
function _0x479333(ret) {
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