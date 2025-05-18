function main(input) {
    var _0x39cb0b = (function () {
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
        _0x39cb0b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1c5af9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1c5af9();
            }
        })();
    }());
    var N = input[0x0]['split']('\x20')[0x0] - 0x0;
    var M = input[0x0]['split']('\x20')[0x1] - 0x0;
    var list = input[0x1]['split']('\x20')['map'](v => v / 0x2);
    var l = lcm(list);
    console['log'](Math['trunc'](M / l) - Math['trunc'](M / (l * 0x2)));
}
function lcm(args) {
    var a = args;
    var g = (n, m) => m ? g(m, n % m) : n;
    var l = (n, m) => n * m / g(n, m);
    var ans = a[0x0];
    for (var i = 0x1; i < a['length']; i++) {
        ans = l(ans, a[i]);
    }
    return ans;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
function _0x1c5af9(ret) {
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