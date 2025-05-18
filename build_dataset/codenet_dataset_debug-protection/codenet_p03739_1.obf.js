function Main(s) {
    var _0x5afd6a = (function () {
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
        _0x5afd6a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x400bea('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x400bea();
            }
        })();
    }());
    var s = s['split']('\x0a');
    var n = parseInt(s[0x0], 0xa);
    var a = s[0x1]['split']('\x20')['map'](e => parseInt(e, 0xa));
    var acc = 0x0, cnt = 0x0, arr = [];
    for (var i = 0x0; i < n; i++) {
        acc += a[i];
        if (i === 0x0) {
            if (acc === 0x0) {
                if (a[i + 0x1] >= 0x0) {
                    acc -= a[i + 0x1] - 0x1;
                    if (acc === 0x0)
                        acc--;
                    cnt += Math['abs'](acc);
                } else {
                    acc += Math['abs'](a[i + 0x1]) - 0x1;
                    if (acc === 0x0)
                        acc++;
                    cnt += acc;
                }
            }
        } else {
            if (arr[i - 0x1] > 0x0) {
                if (acc >= 0x0) {
                    cnt += acc + 0x1;
                    acc -= acc + 0x1;
                }
            } else {
                if (acc <= 0x0) {
                    cnt += Math['abs'](acc) + 0x1;
                    acc += Math['abs'](acc) + 0x1;
                }
            }
        }
        arr['push'](acc);
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x400bea(ret) {
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