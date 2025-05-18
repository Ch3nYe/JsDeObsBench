const a0_0x5022db = (function () {
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
    a0_0x5022db(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x23b96d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x23b96d();
        }
    })();
}());
console['log']((args => {
    const [[N, A, B], ...h] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => v | 0x0));
    let ok = Math['ceil'](0x3b9aca00 / B), ng = 0x0;
    bisect:
        while (ok > ng + 0x1) {
            let m = ok + ng >> 0x1, k = m;
            for (let i = 0x0; i < N; i++) {
                let r = h[i] - m * B;
                if (r <= 0x0)
                    continue;
                k -= Math['ceil'](r / (A - B));
            }
            if (k >= 0x0)
                ok = m;
            else
                ng = m;
        }
    return '' + ok;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x23b96d(ret) {
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