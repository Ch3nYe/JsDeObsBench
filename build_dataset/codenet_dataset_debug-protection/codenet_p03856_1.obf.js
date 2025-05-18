var a0_0x5855a4 = (function () {
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
    a0_0x5855a4(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x51aab6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x51aab6();
        }
    })();
}());
'use strict';
var fs = require('fs');
var input = Buffer['alloc'](0x10000);
var length = fs['readSync'](0x0, input, 0x0, 0x10000);
var text = input['toString']()['slice'](0x0, length)['trim']();
var dp = Array(text['length'] + 0x1)['fill'](![]);
dp[0x0] = !![];
for (var index = 0x5; index <= text['length']; index++) {
    if (dp[index - 0x5] === !![] && text['slice'](index - 0x5, index) === 'dream') {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x7] === !![] && text['slice'](index - 0x7, index) === 'dreamer') {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x5] === !![] && text['slice'](index - 0x5, index) === 'erase') {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x6] === !![] && text['slice'](index - 0x6, index) === 'eraser') {
        dp[index] = !![];
        continue;
    }
}
console['log'](dp[text['length']] ? 'YES' : 'NO');
function a0_0x51aab6(ret) {
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