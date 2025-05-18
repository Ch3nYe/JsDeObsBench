function bomb() {
    var _0xfe1042 = (function () {
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
        _0xfe1042(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2f6581('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2f6581();
            }
        })();
    }());
    var obj = {};
    var ans = 'NA';
    var leaf = [
        [
            0x0,
            0x0,
            0x0
        ],
        [
            0x1,
            0x0,
            0x0
        ]
    ];
    while (!![]) {
        if (leaf['length'] == 0x0)
            break;
        var ary = leaf['shift']();
        var x = ary[0x0];
        var y = ary[0x1];
        if (obj['hasOwnProperty'](x + ',' + y))
            continue;
        else
            obj[x + ',' + y] = !![];
        var cnt = ary[0x2];
        var v = xy[x][y];
        if (v == 0x1) {
            while (!![]) {
                y++;
                if (xy[x][y] != 0x1) {
                    y--;
                    break;
                }
            }
        } else if (v == 0x2) {
            while (!![]) {
                y--;
                if (xy[x][y] != 0x2)
                    break;
            }
        }
        if (y == n - 0x1) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; i <= 0x2; i++)
            leaf['push']([
                0x1 - x,
                y + i,
                cnt + 0x1
            ]);
    }
    return ans;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var xy = [];
    xy[0x0] = arr['shift']()['split']('\x20')['map'](Number);
    xy[0x1] = arr['shift']()['split']('\x20')['map'](Number);
    console['log'](bomb());
}
function _0x2f6581(ret) {
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