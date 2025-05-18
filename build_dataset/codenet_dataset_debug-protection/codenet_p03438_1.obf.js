function Main(input) {
    var _0x7242c2 = (function () {
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
        _0x7242c2(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5cb4e8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5cb4e8();
            }
        })();
    }());
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    a = new Array(n)['fill'](0x0);
    b = new Array(n)['fill'](0x0);
    tmpa = input[0x1]['split']('\x20');
    tmpb = input[0x2]['split']('\x20');
    var suma = 0x0;
    var sumb = 0x0;
    var dif = 0x0;
    for (i = 0x0; i < n; i++) {
        a[i] = parseInt(tmpa[i]);
        suma += a[i];
        b[i] = parseInt(tmpb[i]);
        sumb += b[i];
        dif += Math['abs'](a[i] - b[i]);
    }
    var ans = 'No';
    if (suma <= sumb && dif <= (sumb - suma) * 0x3) {
        ans = 'Yes';
    }
    console['log']('%s', ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5cb4e8(ret) {
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