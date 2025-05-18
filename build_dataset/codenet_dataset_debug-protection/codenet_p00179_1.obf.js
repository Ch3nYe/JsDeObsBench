function BFS(x) {
    var _0x332772 = (function () {
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
        _0x332772(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x8132b9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x8132b9();
            }
        })();
    }());
    var obj = {};
    var bfs = [[
            x,
            0x0
        ]];
    obj[x] = !![];
    while (!![]) {
        if (bfs['length'] == 0x0) {
            ans = 'NA';
            break;
        }
        var leaf = bfs['shift']();
        var str = leaf[0x0];
        var cnt = leaf[0x1];
        if (/^0+$|^1+$|^2+$/['test'](str)) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; i < str['length'] - 0x1; i++) {
            if (str[i] == str[i + 0x1])
                continue;
            var arr = str['split']('');
            var color = 0x3 - +arr[i] - +arr[i + 0x1];
            arr[i] = color;
            arr[i + 0x1] = color;
            var Str = arr['join']('');
            if (obj['hasOwnProperty'](Str) == ![]) {
                bfs['push']([
                    Str,
                    cnt + 0x1
                ]);
                obj[Str] = !![];
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var rgb = Arr['shift']();
    if (rgb == '0')
        break;
    rgb = rgb['replace'](/r/g, '0')['replace'](/g/g, '1')['replace'](/b/g, '2');
    var ans;
    BFS(rgb);
    console['log'](ans);
}
function _0x8132b9(ret) {
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