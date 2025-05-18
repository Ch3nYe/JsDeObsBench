const a0_0xad4a25 = (function () {
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
    a0_0xad4a25(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x42e5c3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x42e5c3();
        }
    })();
}());
console['log']((args => {
    const [[N], ...tmp] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const rp = [], bp = [];
    for (let i = 0x0; i < N; i++) {
        rp['push'](tmp[i]);
        bp['push'](tmp[N + i]);
    }
    bp['sort'](([a], [b]) => a - b);
    let count = 0x0;
    const test = [];
    for (let i = 0x0; i < N; i++) {
        const [bx, by] = bp[i];
        let max = [
            -0x1,
            -0x1
        ];
        for (let j = 0x0; j < rp['length']; j++) {
            const [rx, ry] = rp[j];
            if (bx < rx)
                continue;
            if (by > ry && ry > max[0x1])
                max = [
                    j,
                    ry
                ];
        }
        if (max[0x1] >= 0x0) {
            rp['splice'](max[0x0], 0x1);
            count++;
        }
    }
    return '' + count;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x42e5c3(ret) {
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