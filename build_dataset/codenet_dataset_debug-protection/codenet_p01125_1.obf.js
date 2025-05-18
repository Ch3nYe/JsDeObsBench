var a0_0x43a18f = (function () {
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
    a0_0x43a18f(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x55fee3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x55fee3();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var a = Arr['shift']();
    if (a == '0')
        break;
    var xy = [];
    for (var i = 0x0; i < a; i++)
        xy['push'](Arr['shift']());
    var b = Arr['shift']();
    var news = [];
    for (var i = 0x0; i < b; i++)
        news['push'](Arr['shift']());
    var X = 0xa;
    var Y = 0xa;
    var XY = [];
    news['forEach'](function (v) {
        var arr = v['split']('\x20');
        for (var i = 0x0; i < arr[0x1] - 0x0; i++) {
            if (arr[0x0] == 'N')
                Y++;
            if (arr[0x0] == 'E')
                X++;
            if (arr[0x0] == 'W')
                X--;
            if (arr[0x0] == 'S')
                Y--;
            XY['push'](X + '\x20' + Y);
        }
    });
    var flag = xy['every'](function (v) {
        return XY['indexOf'](v) != -0x1;
    });
    console['log'](flag ? 'Yes' : 'No');
}
function a0_0x55fee3(ret) {
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