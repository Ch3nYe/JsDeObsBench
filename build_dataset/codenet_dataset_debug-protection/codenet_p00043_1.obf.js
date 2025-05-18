function Puzzle() {
    var _0x219780 = (function () {
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
        _0x219780(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1467ad('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1467ad();
            }
        })();
    }());
    var obj = {};
    var arrA = '123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999'['split'](',');
    var arrB = '11,22,33,44,55,66,77,88,99'['split'](',');
    var i, j, k, l, m;
    for (i = 0x0; i < 0x10; i++)
        for (j = 0x0; j < 0x10; j++)
            for (k = 0x0; k < 0x10; k++)
                for (l = 0x0; l < 0x10; l++)
                    for (m = 0x0; m < 0x9; m++) {
                        var str = arrA[i] + arrA[j] + arrA[k] + arrA[l] + arrB[m];
                        str = str['split']('')['map'](Number)['sort'](function (a, b) {
                            return a - b;
                        })['join']('');
                        obj[str] = !![];
                    }
    return obj;
}
var P = Puzzle();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var str = Arr['shift']();
    var ans = [];
    for (var i = 0x1; i <= 0x9; i++) {
        var arr = str['split']('')['map'](Number);
        arr['push'](i);
        arr['sort'](function (a, b) {
            return a - b;
        });
        var v = arr['join']('');
        if (/(.)\1\1\1\1/['test'](v))
            continue;
        if (P['hasOwnProperty'](v))
            ans['push'](i);
    }
    console['log'](ans['length'] == 0x0 ? '0' : ans['join']('\x20'));
}
function _0x1467ad(ret) {
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