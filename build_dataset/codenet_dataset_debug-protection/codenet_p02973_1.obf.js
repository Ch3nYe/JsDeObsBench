function Main(input) {
    var _0x1be385 = (function () {
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
        _0x1be385(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4b68d6('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4b68d6();
            }
        })();
    }());
    input = input['split']('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0] - 0x0;
    var colors = [];
    var temp;
    var min, max, mid;
    for (var i = 0x1; i < input['length']; i++) {
        temp = input[i] - 0x0;
        if (colors['length'] === 0x0) {
            colors['push'](temp);
            continue;
        }
        if (temp <= colors[0x0]) {
            colors['unshift'](temp);
            continue;
        }
        if (temp > colors[colors['length'] - 0x1]) {
            colors[colors['length'] - 0x1] = temp;
            continue;
        }
        min = 0x0;
        max = colors['length'] - 0x1;
        while (max - min > 0x1) {
            mid = Math['floor']((max + min) / 0x2);
            if (colors[mid] <= temp) {
                max = mid;
            } else {
                min = mid;
            }
        }
        colors[min] = temp;
    }
    console['log'](colors['length']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4b68d6(ret) {
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