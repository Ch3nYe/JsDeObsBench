(function () {
    var _0x19d374 = (function () {
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
    var max, max_log2, series, col, j, str, i, line, hw, even, odd;
    max = 0x12c;
    max_log2 = max['toString'](0x2)['length'] - 0x1;
    series = [
        0x1,
        0x2
    ];
    col = [
        '#',
        '#.'
    ];
    j = 0x2;
    str = '#.';
    for (i = 0x2; i <= max_log2; i++) {
        series['push'](j *= 0x2);
        col['push'](str = str + str);
    }
    series['push'](series[series['length'] - 0x1] * 0x2);
    function get_column(w) {
        (function () {
            _0x19d374(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x42002e('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x42002e();
                }
            })();
        }());
        var i, res;
        res = '';
        for (i = 0x1; i < series['length']; i++) {
            if (w < series[i])
                break;
            if (w % series[i + 0x1] >= series[i])
                res = res + col[i];
        }
        if (w % 0x2 === 0x1)
            res = res + '#';
        return res;
    }
    line = require('fs')['readFileSync']('/dev/stdin', 'ascii')['split']('\x0a');
    for (i in line) {
        if (line[i] === '0\x200')
            break;
        hw = line[i]['split']('\x20')['map'](Number);
        even = get_column(hw[0x1]);
        odd = even['slice'](0x1) + (hw[0x1] % 0x2 === 0x0 ? '#' : '.');
        for (j = 0x0; j < hw[0x0]; j++) {
            if (j % 0x2 === 0x0)
                console['log'](even);
            else
                console['log'](odd);
        }
        console['log']('');
    }
}());
function _0x42002e(ret) {
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