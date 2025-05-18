var a0_0x9f10f6 = (function () {
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
    a0_0x9f10f6(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1f421f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1f421f();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (v) {
    var arr = v['split']('\x20')['map'](Number);
    var a = arr[0x0];
    var b = arr[0x1];
    var ans;
    if (35.5 > a && 0x47 > b)
        ans = 'AAA';
    else if (37.5 > a && 0x4d > b)
        ans = 'AA';
    else if (0x28 > a && 0x53 > b)
        ans = 'A';
    else if (0x2b > a && 0x59 > b)
        ans = 'B';
    else if (0x32 > a && 0x69 > b)
        ans = 'C';
    else if (0x37 > a && 0x74 > b)
        ans = 'D';
    else if (0x46 > a && 0x94 > b)
        ans = 'E';
    else
        ans = 'NA';
    console['log'](ans);
});
function a0_0x1f421f(ret) {
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