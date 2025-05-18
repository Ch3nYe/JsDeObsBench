function Main(input) {
    var _0x4d2e11 = (function () {
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
        _0x4d2e11(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x999155('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x999155();
            }
        })();
    }());
    input = input['split']('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const K = input[0x0]['split']('\x20')[0x1] - 0x0;
    const x = input[0x1]['split']('\x20')['map'](e => {
        return e - 0x0;
    });
    var pointer = x['findIndex'](e => {
        return e => 0x0;
    }) - K;
    if (pointer < 0x0) {
        pointer = 0x0;
    }
    var temp;
    var ret = Infinity;
    for (var i = 0x0; i < K; i++) {
        if (pointer + i + K - 0x1 >= x['length']) {
            break;
        }
        if (x[pointer + i] * x[pointer + i + K - 0x1] < 0x0) {
            temp = Math['min'](-x[pointer + i], x[pointer + i + K - 0x1]) - x[pointer + i] + x[pointer + i + K - 0x1];
        } else {
            temp = Math['max'](Math['abs'](x[pointer + i]), Math['abs'](x[pointer + i + K - 0x1]));
        }
        ret = Math['min'](ret, temp);
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x999155(ret) {
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