function Main(input) {
    var _0x11df2b = (function () {
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
        _0x11df2b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x14011d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x14011d();
            }
        })();
    }());
    var N = input[0x0] - 0x0;
    var list = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k'
    ];
    var ans = {
        0x0: [],
        0x1: ['a']
    };
    for (var i = 0x2; i <= N; i++) {
        ans[i] = [];
        var preAns = ans[i - 0x1];
        var nowAns = ans[i];
        preAns['forEach'](preans => {
            var max = 'a';
            preans['split']('')['forEach'](v => {
                max = max < v ? v : max;
            });
            var endflg = ![];
            for (var i = 0x0; i < list['length'] - 0x1; i++) {
                nowAns['push'](preans + list[i]);
                if (endflg)
                    break;
                if (max == list[i])
                    endflg = !![];
            }
        });
    }
    console['log'](ans[N]['join']('\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
function _0x14011d(ret) {
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