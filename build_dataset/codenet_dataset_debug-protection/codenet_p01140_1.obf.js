var a0_0x1eda07 = (function () {
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
    a0_0x1eda07(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2cdbe4('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2cdbe4();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var str = arr['shift']();
    if (str == '0\x200')
        break;
    var ary = str['split']('\x20')['map'](Number);
    var h = [];
    var w = [];
    for (var i = 0x0; i < ary[0x0]; i++)
        h['push'](arr['shift']() - 0x0);
    for (var i = 0x0; i < ary[0x1]; i++)
        w['push'](arr['shift']() - 0x0);
    var H = {};
    for (var i = 0x0; i < h['length']; i++) {
        var sum = 0x0;
        for (var j = i; j < h['length']; j++) {
            if (j != i)
                sum += h[j];
            H['hasOwnProperty'](h[i] + sum) ? H[h[i] + sum]++ : H[h[i] + sum] = 0x1;
        }
    }
    var W = {};
    for (var i = 0x0; i < w['length']; i++) {
        var sum = 0x0;
        for (var j = i; j < w['length']; j++) {
            if (j != i)
                sum += w[j];
            W['hasOwnProperty'](w[i] + sum) ? W[w[i] + sum]++ : W[w[i] + sum] = 0x1;
        }
    }
    var cnt = 0x0;
    for (var k in H) {
        if (W['hasOwnProperty'](k))
            cnt += H[k] * W[k];
    }
    console['log'](cnt);
}
function a0_0x2cdbe4(ret) {
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