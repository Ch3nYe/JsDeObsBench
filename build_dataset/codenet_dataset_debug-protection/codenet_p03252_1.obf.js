function Main(input) {
    var _0x39c80e = (function () {
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
        _0x39c80e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1ce211('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1ce211();
            }
        })();
    }());
    input = input['split']('\x0a');
    var S = input[0x0];
    var T = input[0x1];
    var ans = 'Yes';
    while (T['length'] != 0x0) {
        for (i = 0x1; i < T['length']; i++) {
            if (T['substr'](0x0, 0x1) == T['substr'](i, 0x1)) {
                if (S['substr'](0x0, 0x1) != S['substr'](i, 0x1)) {
                    ans = 'No';
                    break;
                }
            }
            if (S['substr'](0x0, 0x1) == S['substr'](i, 0x1)) {
                if (T['substr'](0x0, 0x1) != T['substr'](i, 0x1)) {
                    ans = 'No';
                    break;
                }
            }
        }
        if (ans == 'No') {
            break;
        }
        S = S['substr'](0x1);
        T = T['substr'](0x1);
    }
    console['log']('%s', ans);
}
function debug() {
    var input = document['getElementById']('input')['value'];
    Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1ce211(ret) {
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