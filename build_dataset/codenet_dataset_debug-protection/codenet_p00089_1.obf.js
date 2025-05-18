function bomb(y, x, sum) {
    var _0x4ca0cf = (function () {
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
        _0x4ca0cf(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x10bb1b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x10bb1b();
            }
        })();
    }());
    YX[y][x] = sum;
    if (y == yx['length'] - 0x1) {
        max = Math['max'](max, sum);
    } else if ((yx['length'] - 0x1) / 0x2 > y) {
        if (YX[y + 0x1][x] < sum + yx[y + 0x1][x])
            bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
        if (YX[y + 0x1][x + 0x1] < sum + yx[y + 0x1][x + 0x1])
            bomb(y + 0x1, x + 0x1, sum + yx[y + 0x1][x + 0x1]);
    } else if ((yx['length'] - 0x1) / 0x2 <= y) {
        if (x - 0x1 >= 0x0) {
            if (YX[y + 0x1][x - 0x1] < sum + yx[y + 0x1][x - 0x1])
                bomb(y + 0x1, x - 0x1, sum + yx[y + 0x1][x - 0x1]);
        }
        if (x < yx[y]['length'] - 0x1) {
            if (YX[y + 0x1][x] < sum + yx[y + 0x1][x])
                bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var yx = [];
var YX = [];
Arr['forEach'](function (v) {
    var x = v['split'](',')['map'](Number);
    var X = x['map'](function (v) {
        return 0x0;
    });
    yx['push'](x);
    YX['push'](X);
});
var max = 0x0;
bomb(0x0, 0x0, yx[0x0][0x0]);
console['log'](max);
function _0x10bb1b(ret) {
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