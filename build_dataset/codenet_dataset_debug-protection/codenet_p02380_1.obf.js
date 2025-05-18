var a0_0x34782b = (function () {
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
    a0_0x34782b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x6a5647('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x6a5647();
        }
    })();
}());
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    var rad, a, S, L, h;
    var e = line['split']('\x20');
    var b = Number(e[0x0]);
    var c = Number(e[0x1]);
    var d = Number(e[0x2]);
    rad = d / 0xb4 * Math['PI'];
    a = Math['sqrt'](b * b + c * c - 0x2 * b * c * Math['cos'](rad));
    S = b * c * Math['sin'](rad) / 0x2;
    L = a + b + c;
    h = b * c * Math['sin'](rad) / b;
    console['log'](S['toFixed'](0x8));
    console['log'](L['toFixed'](0x8));
    console['log'](h['toFixed'](0x8));
    process['exit']();
});
process['stdin']['on']('end', function () {
});
function a0_0x6a5647(ret) {
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