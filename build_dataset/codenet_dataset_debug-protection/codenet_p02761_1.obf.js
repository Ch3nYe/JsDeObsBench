function Main(input) {
    var _0x465a09 = (function () {
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
        _0x465a09(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x12a87b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x12a87b();
            }
        })();
    }());
    input = input['split']('\x0a');
    tmp = input['shift']();
    N = parseInt(tmp['split']('\x20')[0x0]);
    M = tmp['split']('\x20')[0x1];
    S = input;
    A = 'n'['repeat'](N)['split']('');
    flag = !![];
    S['forEach'](v => {
        t = v['split']('\x20')['map'](v => parseInt(v));
        if (A[t[0x0] - 0x1] != 'n' && A[t[0x0] - 0x1] != t[0x1])
            flag = ![];
        A[t[0x0] - 0x1] = t[0x1];
    });
    A = A['join']('');
    A = A['replace'](/^nn([0-9])/, '10$1');
    A = A['replace'](/^n([0-9])/, '1$1');
    A = A['replace'](/n/g, '0');
    A = parseInt(A);
    if (flag && (A + '')['length'] == N) {
        console['log'](A);
    } else {
        console['log'](-0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x12a87b(ret) {
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