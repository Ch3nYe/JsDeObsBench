function Main(s) {
    var _0x4e12cf = (function () {
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
        _0x4e12cf(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x126b15('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x126b15();
            }
        })();
    }());
    var s = s['split']('\x0a')[0x0]['split']('\x20')['map'](e => parseInt(e, 0xa))['sort']((a, b) => b - a);
    var cnt = 0x0;
    if ((s[0x1] - s[0x2]) % 0x2 === 0x0) {
        cnt += s[0x0] - s[0x1];
        s[0x2] += cnt;
        cnt += (s[0x0] - s[0x2]) / 0x2;
    } else {
        s[0x0]++;
        s[0x1]++;
        cnt++;
        cnt += s[0x0] - s[0x1];
        s[0x2] += s[0x0] - s[0x1];
        cnt += (s[0x0] - s[0x2]) / 0x2;
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x126b15(ret) {
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