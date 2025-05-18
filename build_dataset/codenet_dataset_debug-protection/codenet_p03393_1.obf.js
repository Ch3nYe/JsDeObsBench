function Main(s) {
    var _0x449d6b = (function () {
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
        _0x449d6b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3f4547('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f4547();
            }
        })();
    }());
    const n = s['length'];
    const a = 'a'['charCodeAt']();
    var b = Array(0x1a)['fill'](0x1);
    var i;
    if (n < 0x1a) {
        for (i = 0x0; i < n; i++) {
            b[s['charCodeAt'](i) - a] = 0x0;
        }
        for (i = 0x0; i < 0x1a; i++) {
            if (b[i]) {
                s += String['fromCharCode'](a + i);
                break;
            }
        }
    } else {
        if (s === 'zyxwvutsrqponmlkjihgfedcba') {
            console['log'](-0x1);
            return;
        }
        var c = s[0x19];
        b[s['charCodeAt'](0x19) - a] = 0x0;
        for (i = 0x18; i >= 0x0; i--) {
            if (c > s[i]) {
                c = s['charCodeAt'](i) - a;
                s = s['slice'](0x0, i);
                break;
            } else {
                b[s['charCodeAt'](i) - a] = 0x0;
            }
        }
        for (var j = c - a; j < 0x1a; j++) {
            if (b[j] === 0x0) {
                s += String['fromCharCode'](a + j);
                break;
            }
        }
    }
    console['log'](s);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x3f4547(ret) {
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