var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var nww = [];
    for (var i = 0x0; i < n; i++)
        nww[i] = arr['shift']()['split']('\x20');
    nww = nww['map'](v => [
        v[0x0],
        v[0x1] - 0x0,
        v[0x2] - 0x0
    ]);
    nww['sort']((a, b) => {
        return b[0x1] - a[0x1];
    });
    var max = 0x0;
    var ans = '';
    var bomb = function (strA, strB, sum, g) {
        var _0x53a7ab = (function () {
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
            _0x53a7ab(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x327ff7('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x327ff7();
                }
            })();
        }());
        if (strB['length'] == 0x0) {
            if (max < g) {
                ans = strA;
                max = g;
            }
            return;
        }
        for (var i = 0x0; i < strB['length']; i++) {
            var v = strB[i];
            if (sum <= nww[v][0x2]) {
                var a = strA + v;
                var b = strB['replace'](v, '');
                bomb(a, b, sum + nww[v - 0x0][0x1], g + nww[v - 0x0][0x1] * (strA['length'] + 0x1));
            }
        }
    };
    var str = '';
    for (var i = 0x0; i < n; i++)
        str += i;
    bomb('', str, 0x0, 0x0);
    console['log'](ans['split']('')['map'](v => nww[v - 0x0][0x0])['reverse']()['join']('\x0a'));
}
function _0x327ff7(ret) {
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