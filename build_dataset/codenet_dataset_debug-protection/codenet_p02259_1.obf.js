function bubbleSort(A) {
    var _0x2483eb = (function () {
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
        _0x2483eb(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1a62e7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1a62e7();
            }
        })();
    }());
    var N = A['length'];
    var flag = 0x1;
    var i = 0x0;
    var cnt = 0x0;
    while (flag == 0x1) {
        flag = 0x0;
        for (var j = N - 0x1; j >= i + 0x1; j--) {
            if (A[j] < A[j - 0x1]) {
                var m = A[j];
                A[j] = A[j - 0x1];
                A[j - 0x1] = m;
                flag = 0x1;
                cnt++;
            }
        }
        i++;
    }
    return [
        A,
        cnt
    ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['shift']();
var arr = Arr[0x0]['split']('\x20')['map'](Number);
var result = bubbleSort(arr);
console['log'](result[0x0]['join']('\x20'));
console['log'](result[0x1]);
function _0x1a62e7(ret) {
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