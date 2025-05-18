function Main(input) {
    var _0x36ed13 = (function () {
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
        _0x36ed13(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x13b40d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x13b40d();
            }
        })();
    }());
    input = input['split']('\x0a');
    const N = parseInt(input[0x0], 0xa);
    var x = [];
    var y = [];
    for (var i = 0x1; i <= N; i++) {
        tmp = input[i]['split']('\x20')['map'](n => parseInt(n, 0xa));
        x['push'](tmp[0x0]);
        y['push'](tmp[0x1]);
    }
    var counts = [];
    for (var j = 0x0; j < N; j++) {
        var count = 0x0;
        for (var k = 0x0; k < N; k++) {
            if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                count++;
            }
        }
        counts['push'](parseInt(count, 0xa));
    }
    for (var j = 0x0; j < N; j++) {
        var count = 0x1;
        for (var k = 0x0; k < N; k++) {
            if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
                count = count + counts[k];
            }
        }
        console['log'](count);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x13b40d(ret) {
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