var a0_0xf56bc8 = (function () {
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
    a0_0xf56bc8(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x490bc8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x490bc8();
        }
    })();
}());
var line;
var S;
var MOD = Math['pow'](0xa, 0x9) + 0x7;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    line = x;
});
rl['on']('close', function () {
    S = line['split']('');
    dp = Array(S['length'] + 0x1);
    for (var i = 0x0; i <= S['length']; i++) {
        dp[i] = Array(0x3 + 0x1)['fill'](0x0);
    }
    for (var i = S['length']; i >= 0x0; i--) {
        for (var j = 0x3; j >= 0x0; j--) {
            if (i === S['length']) {
                dp[i][j] = j === 0x3 ? 0x1 : 0x0;
            } else {
                dp[i][j] = dp[i + 0x1][j] * (S[i] === '?' ? 0x3 : 0x1);
                if (j < 0x3 && (S[i] === '?' || S[i] === 'ABC'[j])) {
                    dp[i][j] += dp[i + 0x1][j + 0x1];
                }
                dp[i][j] %= MOD;
            }
        }
    }
    console['log'](dp[0x0][0x0]);
});
function a0_0x490bc8(ret) {
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