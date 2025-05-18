function main(input) {
    var _0x507e56 = (function () {
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
        _0x507e56(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4a4e79('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4a4e79();
            }
        })();
    }());
    var n = input[0x0]['split']('\x20')[0x0] - 0x0;
    var m = input[0x0]['split']('\x20')[0x1] - 0x0;
    var nummap = [
        0x0,
        0x2,
        0x5,
        0x5,
        0x4,
        0x5,
        0x6,
        0x3,
        0x7,
        0x6
    ];
    var mattis = input[0x1]['split']('\x20')['map'](v => {
        return {
            'val': v,
            'num': nummap[v - 0x0]
        };
    });
    var ans = '';
    var dp = [];
    dp[0x0] = '';
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x0; j < m; j++) {
            var matti = mattis[j];
            if (dp[i - matti['num']] !== undefined) {
                var tv = (dp[i - matti['num']] ? dp[i - matti['num']] : '') + matti['val'];
                if (dp[i] === undefined || diff(tv, dp[i]) > 0x0) {
                    dp[i] = tv;
                }
            }
        }
    }
    console['log'](dp[n]);
}
function diff(a, b) {
    if (a['length'] != b['length'])
        return a['length'] - b['length'];
    for (var i = 0x0; i < a['length']; i++) {
        if (a[i] != b[i])
            return a[i] - b[i];
    }
    return 0x0;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
function _0x4a4e79(ret) {
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