function Main(input) {
    var _0x1db745 = (function () {
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
        _0x1db745(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x581632('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x581632();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var n = parseInt(input[0x0][0x0], 0xa);
    var originalN = n;
    var v_ans = [];
    var start = 0x2;
    whole_loop:
        while (!![]) {
            for (var i = start; i <= Math['sqrt'](n); i++) {
                if (n % i === 0x0) {
                    v_ans['push'](i);
                    n /= i;
                    start = i;
                    continue whole_loop;
                }
            }
            v_ans['push'](n);
            break;
        }
    console['log'](originalN['toString']() + ':\x20' + v_ans['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x581632(ret) {
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