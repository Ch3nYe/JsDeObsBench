var a0_0x26044a = (function () {
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
    a0_0x26044a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3af949('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3af949();
        }
    })();
}());
var a = [''];
a[0x1] = '\x27,.,!?'['split']('');
a[0x2] = 'abcABC'['split']('');
a[0x3] = 'defDEF'['split']('');
a[0x4] = 'ghiGHI'['split']('');
a[0x5] = 'jklJKL'['split']('');
a[0x6] = 'mnoMNO'['split']('');
a[0x7] = 'pqrsPQRS'['split']('');
a[0x8] = 'tuvTUV'['split']('');
a[0x9] = 'wxyzWXYZ'['split']('');
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['forEach'](function (v) {
    v = v['replace'](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (x) {
        if (x[0x0] == '0')
            return x['slice'](0x1)['replace'](/0/g, '\x20');
        else
            return a[x[0x0] - 0x0][x['length'] - 0x1];
    });
    console['log'](v);
});
function a0_0x3af949(ret) {
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