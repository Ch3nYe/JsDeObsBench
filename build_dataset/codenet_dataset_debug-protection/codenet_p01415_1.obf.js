var a0_0x4b20f5 = (function () {
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
    a0_0x4b20f5(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4f7958('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4f7958();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var NKTUVL = Arr['shift']()['split']('\x20')['map'](Number);
var N = NKTUVL[0x0];
var K = NKTUVL[0x1];
var T = NKTUVL[0x2];
var U = NKTUVL[0x3];
var V = NKTUVL[0x4];
var L = NKTUVL[0x5];
var time = 0x0;
var obj = {};
for (var i = 0x0; i < N; i++)
    obj[Arr['shift']() - 0x0] = !![];
var fast = 0x0;
var stock = 0x0;
for (var i = 0x0; i < L; i++) {
    var now = obj['hasOwnProperty'](i) ? !![] : ![];
    if (fast == 0x0 && now == !![]) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        continue;
    }
    if (fast == 0x0 && now == ![] && stock == 0x0) {
        time += 0x1 / U;
        continue;
    }
    if (fast == 0x0 && now == ![] && stock > 0x0) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        stock--;
        continue;
    }
    if (fast > 0x0 && now == ![]) {
        time += 0x1 / V;
        fast--;
        continue;
    }
    if (fast > 0x0 && now == !![] && stock + 0x1 <= K) {
        time += 0x1 / V;
        fast--;
        stock++;
        continue;
    }
    if (fast > 0x0 && now == !![] && stock + 0x1 > K) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        continue;
    }
}
console['log'](time['toFixed'](0x9));
function a0_0x4f7958(ret) {
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