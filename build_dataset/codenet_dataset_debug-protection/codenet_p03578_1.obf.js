const a0_0x2b0909 = (function () {
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
    a0_0x2b0909(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x4eb9a6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4eb9a6();
        }
    })();
}());
console['log']((args => {
    const [[N], D, [M], T] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    D['sort']((a, b) => a - b);
    T['sort']((a, b) => a - b);
    let j = -0x1;
    Q:
        for (let i = 0x0; i < M; i++) {
            while (++j < N) {
                if (D[j] > T[i])
                    return 'NO';
                if (D[j] === T[i])
                    continue Q;
            }
            return 'NO';
        }
    return 'YES';
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x4eb9a6(ret) {
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