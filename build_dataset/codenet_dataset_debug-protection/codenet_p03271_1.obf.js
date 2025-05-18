var p = require('fs')['readFileSync']('/dev/stdin', 'utf8');
p = p['split']('\x0a')['map'](a => +a);
console['log'](main());
function main() {
    var _0x47af2f = (function () {
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
        _0x47af2f(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2a880c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2a880c();
            }
        })();
    }());
    var N = 'No';
    var n = p[0x0];
    var t = 0x0;
    for (i = 0x1; i <= n; i++) {
        while (t > i) {
            if (p[i] !== i)
                return N;
            i++;
        }
        var j = i;
        while (p[j] !== i) {
            j++;
            if (p[j] !== j)
                return N;
            j++;
        }
        t = j;
        while (j > i) {
            if (p[j - 0x2] < p[j - 0x1])
                return N;
            p[j] = p[j - 0x2];
            j -= 0x2;
        }
    }
    return 'Yes';
}
function _0x2a880c(ret) {
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