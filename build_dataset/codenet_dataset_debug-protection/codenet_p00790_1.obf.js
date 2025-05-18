var a0_0x4bf3c5 = (function () {
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
    a0_0x4bf3c5(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x37b260('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x37b260();
        }
    })();
}());
function move(d1, d2, d3, d4, d5, d6) {
    var x = this['toString']();
    if (x == 's')
        return [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    else if (x == 'n')
        return [
            d5,
            d1,
            d3,
            d4,
            d6,
            d2
        ];
    else if (x == 'w')
        return [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
    else if (x == 'e')
        return [
            d3,
            d2,
            d6,
            d1,
            d5,
            d4
        ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var dice = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6
    ];
    while (n--) {
        var str = arr['shift']();
        dice = move['apply'](str[0x0], dice);
    }
    console['log'](dice[0x0]);
}
function a0_0x37b260(ret) {
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