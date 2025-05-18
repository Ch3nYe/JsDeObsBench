var a0_0x3957ff = (function () {
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
    a0_0x3957ff(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x355295('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x355295();
        }
    })();
}());
'use strict';
var lines = require('fs')['readFileSync'](0x0, 'utf8')['split']('\x0a');
var str = lines[0x0];
var n = str['length'] - 0x1;
var dfs = (i, sum, order) => {
    if (i === n)
        return eval(order + str[n]) == 0x7 ? order + str[n] : '';
    var temp = dfs(i + 0x1, sum, order + str[i] + '+');
    return temp ? temp : dfs(i + 0x1, sum, order + str[i] + '-');
};
var ans = dfs(0x0, 0x0, '');
console['log'](ans ? ans + '=7' : '');
function a0_0x355295(ret) {
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