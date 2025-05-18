function Main(input) {
    var _0x4838b6 = (function () {
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
        _0x4838b6(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3538e3('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3538e3();
            }
        })();
    }());
    input = input['split']('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    var array = input[0x1]['split']('\x20')['map']((e, i) => {
        return e - i - 0x1;
    })['sort']((a, b) => {
        return a - b;
    });
    console['log'](array['reduce']((acc, cur) => {
        return acc + Math['abs'](cur - array[Math['floor'](array['length'] / 0x2)]);
    }, 0x0));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function permutation(n, k) {
    var ret = [[]];
    var next;
    for (var i = 0x0; i < k; i++) {
        next = [];
        ret['forEach'](e => {
            for (var k = 0x1; k <= n; k++) {
                if (!e['includes'](k)) {
                    next['push'](e['concat']([k]));
                }
            }
        });
        ret = next['concat']([]);
    }
    return ret;
}
function _0x3538e3(ret) {
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