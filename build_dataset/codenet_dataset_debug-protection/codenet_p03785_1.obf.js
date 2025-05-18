function Main(s) {
    var _0xe2d21 = (function () {
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
        _0xe2d21(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x48ea99('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x48ea99();
            }
        })();
    }());
    var s = s['split']('\x0a');
    var zero = s[0x0]['split']('\x20')['map'](e => parseInt(e, 0xa));
    var t = s['slice'](0x1)['map'](e => parseInt(e, 0xa))['sort']((a, b) => a - b);
    var cnt = 0x1;
    var c = zero[0x1];
    for (var i = 0x1; i < zero[0x0]; i++) {
        if (t[i - 0x1] <= t[i] && t[i] <= t[i - 0x1] + zero[0x2]) {
            c--;
            if (c === 0x0) {
                cnt++;
                c = zero[0x1];
            }
        } else {
            cnt++;
            c = zero[0x1];
        }
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x48ea99(ret) {
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