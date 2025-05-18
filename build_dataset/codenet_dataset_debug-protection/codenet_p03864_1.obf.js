function Main(input) {
    var _0x286489 = (function () {
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
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var x = parseInt(input[0x0][0x1], 0xa);
    var vec_a = input[0x1]['map'](e => parseInt(e, 0xa));
    var sum = function (arr) {
        (function () {
            _0x286489(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x1e5c45('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x1e5c45();
                }
            })();
        }());
        var sum = 0x0;
        arr['forEach'](function (elm) {
            sum += elm;
        });
        return sum;
    };
    var vec_b = [];
    var tmp = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (vec_a[i] >= x - tmp)
            vec_b['push'](x - tmp);
        else
            vec_b['push'](vec_a[i]);
        tmp = vec_b[i];
    }
    console['log'](sum(vec_a) - sum(vec_b));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1e5c45(ret) {
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