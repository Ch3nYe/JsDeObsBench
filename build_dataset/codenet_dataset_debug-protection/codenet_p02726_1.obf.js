function main(input) {
    const _0x5930ff = (function () {
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
    function dist(a, b) {
        (function () {
            _0x5930ff(this, function () {
                const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                const result = _0x16df1b('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x16df1b();
                }
            })();
        }());
        return Math['min'](b - a, Math['abs'](x - a) + Math['abs'](y - b) + 0x1);
    }
    const inp = input['split']('\x20');
    const n = inp[0x0];
    const x = inp[0x1];
    const y = inp[0x2];
    for (var i = 0x1; i < n; i++) {
        var cnt = 0x0;
        for (var a = 0x1; a < n; a++)
            for (var b = a + 0x1; b <= n; b++)
                if (dist(a, b) == i)
                    cnt++;
        console['log'](cnt);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x16df1b(ret) {
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