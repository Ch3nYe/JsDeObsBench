var a0_0xf063c0 = (function () {
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
    a0_0xf063c0(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x39499a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x39499a();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var data = [];
var N;
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    if (arr['length'] == 0x1) {
        if (i == 0x0) {
            N = arr[0x0];
            continue;
        }
        var DATA = [];
        for (var j = 0x0; j < N + 0x1; j++) {
            DATA['push'](0x0);
        }
        for (var k = 0x0; k < N; k++) {
            var v = data[k];
            for (var l = 0x0; l < N + 0x1; l++) {
                DATA[l] += v[l];
            }
            v = v['map'](function (val) {
                return ('\x20\x20\x20\x20\x20' + val)['slice'](-0x5);
            });
            console['log'](v['join'](''));
        }
        DATA = DATA['map'](function (val) {
            return ('\x20\x20\x20\x20\x20' + val)['slice'](-0x5);
        });
        console['log'](DATA['join'](''));
        if (arr[0x0] == 0x0)
            break;
        data = [];
        N = arr[0x0];
    } else {
        var sum = arr['reduce'](function (a, b) {
            return a + b;
        });
        arr['push'](sum);
        data['push'](arr);
    }
}
function a0_0x39499a(ret) {
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