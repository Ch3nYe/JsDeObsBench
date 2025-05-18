function Main(input) {
    var _0xe16e12 = (function () {
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
        _0xe16e12(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x148289('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x148289();
            }
        })();
    }());
    var nums = input['split']('\x0a')['map'](function (value) {
        return value - 0x0;
    });
    var N = nums['shift']();
    nums['sort'](function (a, b) {
        return b - a;
    });
    var ary = new Array(N);
    var m = 0x0;
    var r = N - 0x1;
    for (var l = 0x0; l < N / 0x2; l++, r--) {
        ary[m++] = nums[l];
        ary[m++] = nums[r];
    }
    var s = 0x0, s1 = 0x0;
    m = N - 0x1;
    for (var n = 0x0; n < N - 0x1; n++) {
        r = Math['abs'](ary[m] - ary[n]);
        s += r;
        m = n;
    }
    for (var n = 0x0; n < N - 0x1; n++) {
        r = Math['abs'](ary[n] - ary[n + 0x1]);
        s1 += r;
    }
    console['log'](Math['max'](s, s1));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x148289(ret) {
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