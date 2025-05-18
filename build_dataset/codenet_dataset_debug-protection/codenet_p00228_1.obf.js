var a0_0x53cb58 = (function () {
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
    a0_0x53cb58(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x43a2d6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x43a2d6();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var SEG = [
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x0,
        0x0
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ]['reverse']()
];
var n = Arr[0x0];
var seg = [];
for (var i = 0x1; i < Arr['length']; i++) {
    if (n == 0x0) {
        if (i == 0x0)
            continue;
        var arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        seg['forEach'](function (v) {
            var V = SEG[v];
            var str = '';
            for (var i = 0x0; i < 0x7; i++) {
                str += V[i] == arr[i] ? '0' : '1';
            }
            console['log'](str);
            arr = V['slice']();
        });
        if (Arr[i] == -0x1)
            break;
        seg = [];
        n = Arr[i];
    } else {
        n--;
        seg['push'](Arr[i]);
    }
}
function a0_0x43a2d6(ret) {
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