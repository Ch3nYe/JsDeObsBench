var a0_0x375315 = (function () {
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
    a0_0x375315(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x55a22f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x55a22f();
        }
    })();
}());
function saiki(str, flag) {
    while (!![]) {
        if (/\[{2}\d.*?\]{2}/['test'](str)) {
            str = str['replace'](/\[{2}\d.*?\]{2}/, function (s) {
                var d = s['slice'](0x2, -0x2)['split']('][')['map'](Number);
                d['sort']((a, b) => a - b);
                var sum = 0x0;
                for (var i = 0x0; i < Math['ceil'](d['length'] / 0x2); i++) {
                    if (flag)
                        sum += Math['floor'](d[i] / 0x2) + 0x1;
                    else
                        sum += Math['floor'](d[i]);
                }
                return '(' + sum + ')';
            });
        } else
            break;
    }
    str = str['replace'](/\(/g, '[');
    str = str['replace'](/\)/g, ']');
    return str;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
arr['forEach'](str => {
    str = saiki(str, !![]);
    while (/\[\[/['test'](str))
        str = saiki(str, ![]);
    console['log'](str['replace'](/\[|\]/g, ''));
});
function a0_0x55a22f(ret) {
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