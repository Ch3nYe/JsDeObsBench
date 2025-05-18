function time(x) {
    var _0x45df23 = (function () {
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
        _0x45df23(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x20e4c5('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x20e4c5();
            }
        })();
    }());
    x = x['split']('')['map'](Number);
    return x[0x0] * 0xa * 0x3c + x[0x1] * 0x3c + x[0x2] * 0xa + x[0x3];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var npq = arr['shift']();
    if (npq == '0\x200\x200')
        break;
    npq = npq['split']('\x20');
    var n = npq[0x0] - 0x0;
    var p = time(npq[0x1]);
    var q = time(npq[0x2]);
    var tv = [];
    for (var i = p; i < q; i++)
        tv[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var cm = arr['shift']();
        var ary = arr['shift']()['split']('\x20');
        for (var j = 0x0; j < cm; j++) {
            var start = time(ary['shift']());
            var stop = time(ary['shift']());
            for (var k = start; k < stop; k++)
                tv[k]++;
        }
    }
    var max = 0x0;
    var cnt = 0x0;
    for (var i = p; i < q; i++) {
        if (tv[i] != n) {
            cnt++;
        } else {
            max = Math['max'](max, cnt);
            cnt = 0x0;
        }
    }
    max = Math['max'](max, cnt);
    console['log'](max);
}
function _0x20e4c5(ret) {
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