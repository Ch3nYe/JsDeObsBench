var a0_0x981b1e = (function () {
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
    a0_0x981b1e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3c034f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3c034f();
        }
    })();
}());
function kumiawase(start, end, len) {
    var ans = [];
    var loop = function (a, arr) {
        if (arr['length'] == len)
            ans['push'](arr);
        else {
            for (var i = a; i <= end; i++)
                loop(i + 0x1, arr['concat'](i));
        }
    };
    loop(start, []);
    return ans;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['some'](function (v, i) {
    if (v == '0\x200\x200')
        return !![];
    var nks = v['split']('\x20')['map'](Number);
    var ary = kumiawase(0x1, nks[0x0], nks[0x1]);
    var cnt = 0x0;
    ary['forEach'](function (v) {
        var sum = v['reduce'](function (a, b) {
            return a + b;
        });
        if (sum == nks[0x2])
            cnt++;
    });
    console['log'](cnt);
});
function a0_0x3c034f(ret) {
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