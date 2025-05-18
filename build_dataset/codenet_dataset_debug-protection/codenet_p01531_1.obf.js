var a0_0x3ad9ff = (function () {
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
    a0_0x3ad9ff(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x446def('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x446def();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('');
var x = '';
arr['forEach'](function (v) {
    if (v == '0')
        x += 'w';
    if (v == '1')
        x += '';
    if (v == '2')
        x += 'k';
    if (v == '3')
        x += 's';
    if (v == '4')
        x += 't';
    if (v == '5')
        x += 'n';
    if (v == '6')
        x += 'h';
    if (v == '7')
        x += 'm';
    if (v == '8')
        x += 'y';
    if (v == '9')
        x += 'r';
    if (v == 'T')
        x += 'a';
    if (v == 'L')
        x += 'i';
    if (v == 'U')
        x += 'u';
    if (v == 'R')
        x += 'e';
    if (v == 'D')
        x += 'o';
});
x = x['replace'](/wu/g, 'nn');
console['log'](x);
function a0_0x446def(ret) {
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