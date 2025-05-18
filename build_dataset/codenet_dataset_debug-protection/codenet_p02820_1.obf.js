function Main(input) {
    var _0x348a87 = (function () {
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
        _0x348a87(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2ba038('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2ba038();
            }
        })();
    }());
    input = input['split']('\x0a');
    var tmp0 = input[0x0]['split']('\x20');
    var N = tmp0[0x0] - 0x0;
    var K = tmp0[0x1] - 0x0;
    var tmp1 = input[0x1]['split']('\x20');
    var point = {
        'r': tmp1[0x2] - 0x0,
        's': tmp1[0x0] - 0x0,
        'p': tmp1[0x1] - 0x0
    };
    var str = input[0x2];
    var sum = 0x0;
    for (var i = 0x0; i < N; i++) {
        var char = str[i];
        var charBK = '';
        if (i - K >= 0x0) {
            charBK = str[i - K];
        }
        if (char == charBK) {
            str = str['slice'](0x0, i) + 'B' + str['slice'](i + 0x1);
            continue;
        }
        sum += point[char];
    }
    console['log'](sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2ba038(ret) {
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