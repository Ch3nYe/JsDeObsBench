var a0_0x405066 = (function () {
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
    a0_0x405066(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x510201('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x510201();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nf = arr['shift']()['split']('\x20')['map'](Number);
var f = nf[0x1];
var obj = {};
arr = arr['map'](function (v) {
    v = v['split']('\x20');
    v['shift']();
    v['forEach'](function (V) {
        obj[V] = {};
    });
    return v;
});
for (var k in obj) {
    for (var K in obj) {
        obj[k][K] = 0x0;
    }
}
arr['forEach'](function (v) {
    for (var i = 0x0; i < v['length']; i++) {
        for (var j = 0x0; j < v['length']; j++) {
            obj[v[i]][v[j]]++;
        }
    }
});
var ans = [];
for (var k in obj) {
    for (var K in obj) {
        obj[K][k] = 0x0;
        if (obj[k][K] >= f) {
            ans['push']([
                k,
                K
            ]['sort']()['join']('\x20'));
        }
    }
}
ans['sort']();
console['log'](ans['length']);
if (ans['length'] != 0x0)
    console['log'](ans['join']('\x0a'));
function a0_0x510201(ret) {
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