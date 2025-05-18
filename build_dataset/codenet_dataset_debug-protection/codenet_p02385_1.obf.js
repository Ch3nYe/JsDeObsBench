function move(x, arr) {
    var _0x10ed07 = (function () {
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
        _0x10ed07(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1fd576('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1fd576();
            }
        })();
    }());
    var d1 = arr[0x0];
    var d2 = arr[0x1];
    var d3 = arr[0x2];
    var d4 = arr[0x3];
    var d5 = arr[0x4];
    var d6 = arr[0x5];
    var after = [];
    if (x == 'N')
        after = [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    if (x == 'S')
        after = [
            d5,
            d1,
            d3,
            d4,
            d6,
            d2
        ];
    if (x == 'E')
        after = [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
    if (x == 'W')
        after = [
            d3,
            d2,
            d6,
            d1,
            d5,
            d4
        ];
    return after;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var diceA = Arr[0x0]['split']('\x20')['map'](Number);
var diceB = Arr[0x1]['split']('\x20')['map'](Number);
var NSEW = 'NSEW'['split']('');
for (var i = 0x0; i < 0x64; i++) {
    var r = Math['floor'](Math['random']() * 0x4);
    diceA = move(NSEW[r], diceA);
    var flag = diceA['every'](function (v, i) {
        return v == diceB[i];
    });
    if (flag)
        break;
}
console['log'](flag ? 'Yes' : 'No');
function _0x1fd576(ret) {
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