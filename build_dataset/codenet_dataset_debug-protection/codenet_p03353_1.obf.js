function Main(s) {
    var _0x69c14a = (function () {
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
        _0x69c14a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x82e5d8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x82e5d8();
            }
        })();
    }());
    s = s['split']('\x0a');
    var k = +s[0x1];
    s = s[0x0];
    var a = 0x60;
    var sl = s['length'];
    var ans = {};
    var j;
    loop:
        while (a <= 0x7a) {
            a++;
            var n = s['indexOf'](String['fromCharCode'](a));
            while (n !== -0x1) {
                for (j = 0x0; j < k; j++) {
                    if (n + j >= sl)
                        break;
                    ans[s['slice'](n, n + j + 0x1)] = 0x1;
                }
                n = s['indexOf'](String['fromCharCode'](a), n + 0x1);
            }
            j = 0x0;
            var ans2 = [];
            for (i in ans) {
                j++;
                ans2['push'](i);
            }
            if (j >= k) {
                ans2['sort']();
                console['log'](ans2[k - 0x1]);
                break loop;
            }
        }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x82e5d8(ret) {
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