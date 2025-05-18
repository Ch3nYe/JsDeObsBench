function move(d1, d2, d3, d4, d5, d6) {
    var x = this['toString']();
    if (x == 'N')
        return [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    if (x == 'E')
        return [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
}
function roll(d1, d2, d3, d4, d5, d6) {
    return [
        d1,
        d3,
        d5,
        d2,
        d4,
        d6
    ];
}
function rolls(arr) {
    var _0x5046db = (function () {
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
        _0x5046db(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2cd595('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2cd595();
            }
        })();
    }());
    for (var i = 0x0; i < 0x4; i++) {
        obj[arr['join'](',')] = !![];
        arr = roll['apply'](null, arr);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
var OBJ = {};
var result = 'Yes';
for (var i = 0x0; i < n; i++) {
    var obj = {};
    var dice = Arr[i]['split']('\x20')['map'](Number);
    for (var j = 0x0; j < 0x4; j++) {
        rolls(dice);
        dice = move['apply']('N', dice);
    }
    dice = move['apply']('E', dice);
    rolls(dice);
    dice = move['apply']('E', dice);
    dice = move['apply']('E', dice);
    rolls(dice);
    for (var k in obj) {
        if (OBJ['hasOwnProperty'](k))
            result = 'No';
        else
            OBJ[k] = !![];
    }
    if (result == 'No')
        break;
}
console['log'](result);
function _0x2cd595(ret) {
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