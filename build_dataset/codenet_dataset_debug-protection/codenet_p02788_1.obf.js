function main(input) {
    var _0x57ec63 = (function () {
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
        _0x57ec63(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x54d7ba('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x54d7ba();
            }
        })();
    }());
    var N = input[0x0]['split']('\x20')[0x0] - 0x0;
    var D = input[0x0]['split']('\x20')[0x1] - 0x0;
    var A = input[0x0]['split']('\x20')[0x2] - 0x0;
    var list = [];
    for (var i = 0x1; i <= N; i++) {
        list['push'](input[i]['split']('\x20')['map'](v => v - 0x0));
    }
    list = list['sort']((a, b) => a[0x0] - b[0x0]);
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        var x = list[i];
        if (x[0x1] > 0x0) {
            var time = Math['ceil'](x[0x1] / A);
            ans += time;
            for (var j = i; j < N; j++) {
                var y = list[j];
                if (y[0x0] <= x[0x0] + D * 0x2 + 0x1) {
                    y[0x1] -= A * time;
                } else {
                    break;
                }
            }
        }
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));
function _0x54d7ba(ret) {
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