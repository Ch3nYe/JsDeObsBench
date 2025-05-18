process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
function Main(input) {
    var _0x105024 = (function () {
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
        _0x105024(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5682d9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5682d9();
            }
        })();
    }());
    var tmp = input['split']('\x0a');
    var line0 = tmp[0x0]['split']('\x20');
    var line1 = tmp[0x1]['split']('\x20');
    var n = Number(line0[0x0]);
    var k = Number(line1[0x0]);
    var ans = 0x1;
    for (var i = 0x1; i <= n; i++) {
        if (ans < k)
            ans *= 0x2;
        else
            ans += k;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5682d9(ret) {
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