function roop(depth, A, end) {
    var ans = 0x0, i = 0x0;
    if (depth < end) {
        for (i = depth; i < end; i++) {
            ans += roop(i + 0x1, A, end);
        }
        return A[depth] + A[depth] * ans;
    } else {
        return A[depth];
    }
}
function main(input) {
    var _0x23feb5 = (function () {
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
        _0x23feb5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x11650d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x11650d();
            }
        })();
    }());
    var i, j, A, B, ans = 0x0, count = 0x0;
    var inputs = input['split']('\x0a');
    var arg = Number(inputs[0x0]);
    var str = inputs[0x1]['split']('');
    A = {};
    for (i = 0x0; i < arg; ++i) {
        if (A[str[i]]) {
            A[str[i]]++;
        } else {
            A[str[i]] = 0x1;
            count++;
        }
    }
    B = [];
    for (key in A) {
        B['push'](A[key]);
    }
    for (i = 0x0; i < count; ++i) {
        ans += roop(i, B, count - 0x1);
    }
    ans = Math['round'](ans);
    console['log'](ans % 0x3b9aca07);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x11650d(ret) {
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