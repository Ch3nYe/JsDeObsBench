function Main(input) {
    var _0x1cb8ee = (function () {
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
        _0x1cb8ee(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5c2b97('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5c2b97();
            }
        })();
    }());
    a = input['split']('\x0a');
    b = a[0x0]['split']('\x20')['map'](Number);
    c = a[0x1]['split']('\x20')['map'](Number);
    N = b[0x0], K = b[0x1], r = 0x0;
    while (c['length'] > 0x1) {
        r++;
        d = [];
        for (i = 0x0; i < K; i++) {
            d['push'](c[i]);
        }
        for (i = 0x0; i < K; i++) {
            if (d['sort']()[0x0] !== c[i]) {
                c[i] = '';
            }
        }
        c = c['join']('')['split']('')['map'](Number);
    }
    console['log'](r);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5c2b97(ret) {
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