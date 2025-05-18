function knapsack() {
    var _0x503cb0 = (function () {
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
        _0x503cb0(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4a0100('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4a0100();
            }
        })();
    }());
    var C = [];
    for (var i = 0x0; i <= N; i++)
        C[i] = [];
    for (var i = 0x0; i <= W; i++)
        C[0x0][i] = 0x0;
    for (var i = 0x0; i <= N; i++)
        C[i][0x0] = 0x0;
    for (var i = 0x1; i <= N; i++) {
        for (var j = 0x1; j <= W; j++) {
            if (items[i]['w'] <= W) {
                if (items[i]['v'] + C[i - 0x1][j - items[i]['w']] > C[i - 0x1][j]) {
                    C[i][j] = items[i]['v'] + C[i - 0x1][j - items[i]['w']];
                } else {
                    C[i][j] = C[i - 0x1][j];
                }
            } else {
                C[i][j] = C[i - 0x1][j];
            }
        }
    }
    return C[N][W];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var nW = Arr['shift']()['split']('\x20')['map'](Number);
var n = nW[0x0];
var W = nW[0x1];
var N = 0x0;
var items = [null];
for (var i = 0x1; i <= n; i++) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var k = 0x1;
    do {
        items['push']({
            'v': arr[0x0] * k,
            'w': arr[0x1] * k
        });
        N++;
        k++;
    } while (arr[0x1] * k <= W);
}
var max = knapsack();
console['log'](max);
function _0x4a0100(ret) {
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