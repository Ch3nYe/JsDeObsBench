function Main(input) {
    const _0x59f85a = (function () {
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
        _0x59f85a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x2da730('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2da730();
            }
        })();
    }());
    const chars = input['trim']()['split']('\x20');
    const x = Math['floor'](chars[0x0]);
    const y = Math['floor'](chars[0x1]);
    let ans = 0x0;
    if (x === 0x1 && y === 0x1) {
        ans += 0x61a80;
    }
    if (x === 0x1)
        ans += 0x493e0;
    if (y === 0x1)
        ans += 0x493e0;
    if (x === 0x2)
        ans += 0x30d40;
    if (y === 0x2)
        ans += 0x30d40;
    if (x === 0x3)
        ans += 0x186a0;
    if (y === 0x3)
        ans += 0x186a0;
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2da730(ret) {
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