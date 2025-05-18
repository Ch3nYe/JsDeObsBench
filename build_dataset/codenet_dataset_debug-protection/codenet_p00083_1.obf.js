var a0_0x364ff7 = (function () {
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
    a0_0x364ff7(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4c17e6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4c17e6();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var arr = line['split']('\x20')['map'](function (n) {
        return +n;
    });
    var year = arr[0x0];
    var month = arr[0x1];
    var day = arr[0x2];
    var era = '';
    var today = new Date(year, month - 0x1, day);
    if (today < new Date(0x74c, 0x8, 0x8)) {
        era = 'pre-meiji';
    } else if (today < new Date(0x778, 0x6, 0x1e)) {
        era = 'meiji';
        year -= 0x74b;
    } else if (today < new Date(0x786, 0xb, 0x19)) {
        era = 'taisho';
        year -= 0x777;
    } else if (today < new Date(0x7c5, 0x0, 0x8)) {
        era = 'showa';
        year -= 0x785;
    } else {
        era = 'heisei';
        year -= 0x7c4;
    }
    if (era == 'pre-meiji') {
        console['log']('pre-meiji');
        continue;
    }
    console['log'](era, year, month, day);
}
function a0_0x4c17e6(ret) {
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