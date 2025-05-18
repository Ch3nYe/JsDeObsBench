function Main(input) {
    var _0x45cef9 = (function () {
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
        _0x45cef9(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x335aa3('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x335aa3();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var vec_A = input[0x1]['map'](e => parseInt(e, 0xa));
    var vec_B = input[0x2]['map'](e => parseInt(e, 0xa));
    var vec_C = input[0x3]['map'](e => parseInt(e, 0xa));
    function compareFunc(a, b) {
        return b - a;
    }
    vec_A['sort'](compareFunc);
    vec_B['sort'](compareFunc);
    vec_C['sort'](compareFunc);
    var s = 0x0;
    var t = -0x1;
    var vec_sumB = Array['from']({ 'length': N }, () => 0x0);
    var tmpAdj = 0x0;
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        while (s < N && vec_B[s] > vec_A[i]) {
            while (t < N - 0x1 && vec_C[t + 0x1] > vec_B[s]) {
                t++;
            }
            if (s > 0x0)
                tmpAdj = vec_sumB[s - 0x1];
            else
                tmpAdj = 0x0;
            vec_sumB[s] = tmpAdj + t + 0x1;
            s++;
        }
        s = Math['max'](0x0, s - 0x1);
        ans += vec_sumB[s];
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x335aa3(ret) {
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