function Main(input) {
    const _0x188edb = (function () {
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
        _0x188edb(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xb03bd3('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xb03bd3();
            }
        })();
    }());
    const N = Number(input);
    let fn = new Array(N)['fill'](0x0);
    for (let x = 0x1; x ** 0x2 <= N; x++) {
        for (let y = 0x1; y ** 0x2 <= N; y++) {
            if (x + y > N)
                break;
            for (let z = 0x1; z ** 0x2 <= N; z++) {
                const i = x ** 0x2 + y ** 0x2 + z ** 0x2 + x * y + y * z + z * x;
                if (i > N)
                    break;
                fn[i - 0x1]++;
            }
        }
    }
    console['log'](fn['join']('\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xb03bd3(ret) {
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