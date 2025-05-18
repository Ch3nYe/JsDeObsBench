function main(input) {
    var _0x1dca56 = (function () {
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
        _0x1dca56(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3f997b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f997b();
            }
        })();
    }());
    const N = input;
    var ans = 0x1;
    var cnt = 0x0;
    var maxCnt = 0x0;
    for (var i = 0x1; i <= N; i++) {
        cnt = 0x0;
        var tmp = i;
        while (!![]) {
            if (tmp % 0x2 === 0x0) {
                cnt = cnt + 0x1;
                tmp = tmp / 0x2;
            } else {
                break;
            }
        }
        if (maxCnt < cnt) {
            maxCnt = cnt;
            ans = i;
        }
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3f997b(ret) {
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