function main(input) {
    var _0x2f9bb3 = (function () {
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
        _0x2f9bb3(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3a54de('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3a54de();
            }
        })();
    }());
    var a = input[0x1]['trim']()['split']('\x20')['map'](e => parseInt(e, 0xa));
    var a_max = 0xa ** 0x6 + 0x1;
    var dp = new Array(a_max + 0x1)['fill'](0x0);
    for (var i of a) {
        dp[i]++;
    }
    for (var i = 0x1; i <= a_max; i++) {
        if (dp[i] === 0x0) {
            continue;
        }
        for (var j = i + i; j <= a_max; j += i) {
            if (dp[j] !== 0x0) {
                dp[j] = 0x0;
            }
        }
    }
    console['log'](dp['filter'](function (x) {
        return x == 0x1;
    })['length']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
function _0x3a54de(ret) {
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