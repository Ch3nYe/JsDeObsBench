function main(input) {
    var _0x2646e5 = (function () {
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
        _0x2646e5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x33c6ae('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x33c6ae();
            }
        })();
    }());
    var n = input[0x0] - 0x0;
    var list = [0x0]['concat'](input[0x1]['split']('\x20')['map'](v => v - 0x0), [0x0]);
    var llist = [];
    llist[0x0] = 0x0;
    var rlist = [];
    rlist[n] = 0x0;
    for (var i = 0x1; i <= n; i++) {
        llist[i] = llist[i - 0x1] + Math['abs'](list[i] - list[i - 0x1]);
        rlist[n - i] = rlist[n - i + 0x1] + Math['abs'](list[n - i + 0x1] - list[n - i + 0x2]);
    }
    for (var i = 0x1; i <= n; i++) {
        var ans = 0x0;
        ans += llist[i - 0x1];
        ans += rlist[i] || 0x0;
        ans += Math['abs'](list[i - 0x1] - list[i + 0x1]);
        console['log'](ans);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
function _0x33c6ae(ret) {
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