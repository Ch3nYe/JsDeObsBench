var a0_0x36c461 = (function () {
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
    a0_0x36c461(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1c8866('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1c8866();
        }
    })();
}());
var ab = [];
for (var i = 0x0; i <= 0x3e8; i++) {
    for (var j = 0x0; j <= 0x3e8; j++) {
        ab['push'](i + j);
    }
}
ab['sort'](function (a, b) {
    return a - b;
});
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var n = Arr['shift']() - 0x0;
    var cnt = 0x0;
    var k = ab['length'] - 0x1;
    for (var i = 0x0; i < ab['length']; i++) {
        while (ab[i] + ab[k] > n)
            k--;
        var memo = k;
        while (ab[i] + ab[memo] == n) {
            cnt++;
            memo--;
        }
    }
    console['log'](cnt);
}
function a0_0x1c8866(ret) {
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