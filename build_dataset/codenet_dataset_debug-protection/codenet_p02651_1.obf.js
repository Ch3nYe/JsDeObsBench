function Main(input) {
    const _0x521be4 = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
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
        _0x521be4(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x89793d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x89793d();
            }
        })();
    }());
    let t = input['split']('\x0a')[0x0], n, a = new Array(n), s = new Array(n), x = 0x0;
    for (let i = 0x0; i < t; i++) {
        n = input['split']('\x0a')[i * 0x3 + 0x1];
        a = input['split']('\x0a')[i * 0x3 + 0x2]['split']('\x20');
        s = input['split']('\x0a')[i * 0x3 + 0x3]['split']('');
        let tmp;
        for (let j = 0x0; j < n; j++) {
            tmp = x ^ a[j];
            if (s[j] == 0x0) {
                if (tmp == 0x0)
                    x = tmp;
            } else
                x = tmp;
        }
        if (x == 0x0) {
            console['log'](0x0);
        } else
            console['log'](0x1);
        x = 0x0;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x89793d(ret) {
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