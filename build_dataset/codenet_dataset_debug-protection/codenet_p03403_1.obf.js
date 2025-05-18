const a0_0x2455e0 = (function () {
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
    a0_0x2455e0(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x893259('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x893259();
        }
    })();
}());
console['log']((args => {
    const [[N], A] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    let C = Math['abs'](A[0x0]) + Math['abs'](A[N - 0x1]);
    for (let i = 0x1; i < N; i++) {
        C += Math['abs'](A[i] - A[i - 0x1]);
    }
    const c = [C - Math['abs'](A[0x0]) - Math['abs'](A[0x1] - A[0x0]) + Math['abs'](A[0x1])];
    for (let i = 0x1; i < N - 0x1; i++) {
        c['push'](C - Math['abs'](A[i + 0x1] - A[i]) - Math['abs'](A[i] - A[i - 0x1]) + Math['abs'](A[i + 0x1] - A[i - 0x1]));
    }
    c['push'](C - Math['abs'](A[N - 0x1]) - Math['abs'](A[N - 0x2] - A[N - 0x1]) + Math['abs'](A[N - 0x2]));
    return c['join']`\n`;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x893259(ret) {
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