var a0_0xb82687 = (function () {
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
    a0_0xb82687(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x23127('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x23127();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['replace'](/\?/g, '.');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = arr['shift']()['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0 && m == 0x0)
        break;
    var rule = [];
    while (n--) {
        var ary = arr['shift']()['split']('\x20');
        var flag = ary[0x0] == 'permit' ? !![] : ![];
        rule['push']([
            flag,
            new RegExp(ary[0x1] + ary[0x2])
        ]);
    }
    var ans = [];
    while (m--) {
        var packet = arr['shift']()['split']('\x20');
        var str = packet[0x0] + packet[0x1];
        var flag = ![];
        rule['forEach'](function (v) {
            if (v[0x0] == !![] && v[0x1]['test'](str))
                flag = !![];
            else if (v[0x0] == ![] && v[0x1]['test'](str))
                flag = ![];
        });
        if (flag)
            ans['push'](packet['join']('\x20'));
    }
    console['log'](ans['length']);
    ans['forEach'](function (v) {
        console['log'](v);
    });
}
function a0_0x23127(ret) {
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