var a0_0x38bc27 = (function () {
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
    a0_0x38bc27(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x148823('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x148823();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
var imagine;
while (imagine = lines['shift']()) {
    var guess = lines['shift']();
    var a = imagine['split']('\x20')['map'](function (n) {
        return +n;
    });
    var b = guess['split']('\x20')['map'](function (n) {
        return +n;
    });
    var hit = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (a[i] == b[i]) {
            hit++;
        }
    }
    var blow = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (a['indexOf'](b[i]) >= 0x0) {
            blow++;
        }
    }
    blow -= hit;
    console['log'](hit + '\x20' + blow);
}
function a0_0x148823(ret) {
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