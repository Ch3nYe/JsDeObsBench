function Main(input) {
    var _0x1d5b51 = (function () {
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
    input = input['split']('\x0a');
    tmp = input[0x1]['split']('\x20');
    var N = parseInt(input[0x0], 0xa);
    var array_N = new Array(0x2 * N - 0x1);
    for (var i = 0x0; i < array_N['length']; i++) {
        array_N[i] = parseInt(tmp[i], 0xa);
    }
    function getArrayNext(array_i) {
        (function () {
            _0x1d5b51(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x4a9966('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x4a9966();
                }
            })();
        }());
        array_i_next = new Array(array_i['length'] - 0x2);
        for (var j = 0x0; j < array_i_next['length']; j++) {
            var small_array = array_i['slice'](j, j + 0x3);
            array_i_next[j] = small_array['sort'](function (a, b) {
                return a < b ? -0x1 : 0x1;
            })[0x1];
        }
        return array_i_next;
    }
    var array_i = array_N;
    while (array_i['length'] > 0x1) {
        array_i = getArrayNext(array_i);
    }
    console['log'](array_i[0x0]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4a9966(ret) {
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