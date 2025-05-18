const a0_0x2cc205 = (function () {
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
    a0_0x2cc205(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x3471c8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3471c8();
        }
    })();
}());
console['log']((args => {
    const [[N], D] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    if (N === 0x1)
        return '' + D[0x0];
    const q = Array(0xd)['fill'](0x0);
    let _s = 0xc, s = 0x1;
    for (let i = 0x0; i < N; i++) {
        if (++q[D[i]] > 0x2)
            return '0';
        if (D[i] < _s)
            _s = D[i];
        if (q[D[i]] === 0x2)
            _s = Math['min'](_s, 0x18 - 0x2 * D[i]);
    }
    if (q[0xc] > 0x1 || q[0x0] > 0x0)
        return '0';
    const mask = q['reduce']((a, b, i) => a | (b === 0x1 ? 0x0 : 0x1 << i), 0x1);
    for (let m = 0x0; m < 0x1 << 0xd; m = m + 0x1 | mask) {
        let min = _s;
        for (let a = 0x1; a <= 0xc; a++) {
            if (!q[a])
                continue;
            for (let b = a + 0x1; b <= 0xc; b++) {
                if (!q[b])
                    continue;
                let t = b - a;
                if (q[a] === 0x1 && q[b] === 0x1)
                    t = m >> a & 0x1 ^ m >> b & 0x1 ? 0x18 - a - b : t;
                min = Math['min'](min, t);
            }
        }
        if (s < min)
            s = min;
    }
    return '' + s;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x3471c8(ret) {
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