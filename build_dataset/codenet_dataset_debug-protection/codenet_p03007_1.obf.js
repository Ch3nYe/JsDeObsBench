var a0_0x10cc23 = (function () {
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
    a0_0x10cc23(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x48f561('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x48f561();
        }
    })();
}());
log = console['log'];
var stdin = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
var lines = stdin['split']('\x0a')['filter'](v => v !== '')['map'](v => v['split']('\x20')['map'](Number));
var N = lines[0x0];
var A = lines[0x1];
var processList = [];
A['sort']((a, b) => a - b);
var plusList = [];
var minusList = [];
plusList['push'](A['pop']());
minusList['push'](A['shift']());
A['forEach'](v => {
    v >= 0x0 ? plusList['push'](v) : minusList['push'](v);
});
var tmp = minusList['pop']();
for (var i = 0x0; i < plusList['length'] - 0x1; i++) {
    var plus = plusList['pop']();
    processList['push'](tmp + '\x20' + plus);
    tmp = tmp - plus;
}
var lastplus = plusList['pop']();
for (var i = 0x0; i < minusList['length']; i++) {
    var minus = minusList['pop']();
    processList['push'](lastplus + '\x20' + minus);
    lastplus = lastplus - minus;
}
processList['push'](lastplus + '\x20' + tmp);
log(lastplus - tmp);
processList['forEach'](v => log(v));
function a0_0x48f561(ret) {
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