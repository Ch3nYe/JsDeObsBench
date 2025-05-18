function move(yx) {
    var _0x9dd35d = (function () {
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
        _0x9dd35d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xd22d8c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xd22d8c();
            }
        })();
    }());
    var arr = [];
    for (var y = 0x0; y < 0x8; y++)
        arr[y] = [];
    for (var y = 0x0; y < 0x8; y++) {
        for (var x = 0x0; x < 0x8; x++) {
            arr[y][x] = yx[0x7 - x][y];
        }
    }
    return arr;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var yx = [];
for (var i = 0x0; i < 0x8; i++)
    yx['push'](Arr[i]['split'](''));
yx = move(yx);
console['log']('90\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));
yx = move(yx);
console['log']('180\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));
yx = move(yx);
console['log']('270\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));
function _0xd22d8c(ret) {
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