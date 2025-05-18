var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var xy = [];
    var hand = [];
    for (var i = 0x0; i < n; i++) {
        xy[i] = [];
        hand[i] = [];
        for (var j = 0x0; j < n; j++) {
            xy[i][j] = yx[j][i];
            hand[i][j] = [
                0x0,
                0x0
            ];
        }
    }
    yx['forEach'](function (v, i) {
        var min = v['reduce'](function (a, b) {
            return Math['min'](a, b);
        });
        hand[i][v['indexOf'](min)][0x0] = 0x1;
    });
    xy['forEach'](function (v, i) {
        var max = v['reduce'](function (a, b) {
            return Math['max'](a, b);
        });
        hand[v['indexOf'](max)][i][0x1] = 0x1;
    });
    var ans = (function () {
        var _0x3e3065 = (function () {
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
            _0x3e3065(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x523c54('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x523c54();
                }
            })();
        }());
        for (var i = 0x0; i < n; i++) {
            for (var j = 0x0; j < n; j++) {
                if (hand[i][j][0x0] == 0x1 && hand[i][j][0x1] == 0x1)
                    return yx[i][j];
            }
        }
        return 0x0;
    }());
    console['log'](ans);
}
function _0x523c54(ret) {
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