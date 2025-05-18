function Main(input) {
    var _0x587735 = (function () {
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
        _0x587735(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1beb94('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1beb94();
            }
        })();
    }());
    input = input['split']('\x0a');
    tmp = input[0x0]['split']('\x20');
    var N = parseInt(tmp[0x0]);
    var Q = parseInt(tmp[0x1]);
    var minRows = Array(N - 0x2);
    var minCols = Array(N - 0x2);
    minRows['fill'](N - 0x2);
    minCols['fill'](N - 0x2);
    var result = BigInt((N - 0x2) * (N - 0x2));
    for (var i = 0x0; i < Q; i++) {
        var query = input[i + 0x1]['split']('\x20');
        var q_1 = parseInt(query[0x0]);
        var q_2 = parseInt(query[0x1]);
        var myArray = minRows;
        var myArray2 = minCols;
        var index = q_2 - 0x2;
        var closest = minCols[index];
        if (q_1 == 0x1) {
            myArray = minCols;
            myArray2 = minRows;
            closest = minRows[index];
        }
        result -= BigInt(closest);
        for (var j = 0x0; j < closest; j++) {
            if (myArray[j] > index)
                myArray[j] = index;
        }
        myArray2[index] = 0x0;
    }
    console['log']('%d', Number(result));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1beb94(ret) {
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