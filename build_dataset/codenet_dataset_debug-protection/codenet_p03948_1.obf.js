function Main(input) {
    var _0x45da84 = (function () {
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
    var space_strinput = function (line) {
        var arr = line['replace'](/(^\s+)|(\s+$)/g, '')['split']('\x20');
        for (var i = 0x0; i < arr['length']; ++i) {
            arr[i] = arr[i];
        }
        return arr;
    };
    var space_numinput = function (line) {
        (function () {
            _0x45da84(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x1b3877('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x1b3877();
                }
            })();
        }());
        var arr = line['replace'](/(^\s+)|(\s+$)/g, '')['split']('\x20');
        for (var i = 0x0; i < arr['length']; ++i) {
            arr[i] = +arr[i];
        }
        return arr;
    };
    var getmin = function (a, b) {
        return a > b ? b : a;
    };
    lines = input['split']('\x0a');
    var l0 = space_numinput(lines[0x0]);
    var n = l0[0x0];
    var t = l0[0x1];
    var a = space_numinput(lines[0x1]);
    var rieki = 0x0;
    var rieki_place_count = 0x0;
    var min = a[0x0];
    var max = a[0x0];
    for (var i = 0x0; i < n; ++i) {
        var val = a[i];
        if (val - min > rieki) {
            rieki = val - min;
            rieki_place_count = 0x1;
        } else if (val - min == rieki) {
            rieki_place_count++;
        }
        min = val < min ? val : min;
    }
    console['log'](getmin(rieki_place_count, Math['floor'](t / 0x2)));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1b3877(ret) {
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